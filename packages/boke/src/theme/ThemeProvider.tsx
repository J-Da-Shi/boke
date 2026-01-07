import React, { createContext, useLayoutEffect, useState } from 'react'
import { type Theme, themes, type ThemeVars } from './themes'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// 获取用户偏好（从localStorage 或 系统）
const getPreferredTheme = (): Theme => {
  const saved = localStorage.getItem('theme') as Theme | null
  if (saved && ['light', 'dark'].includes(saved)) return saved

  // 默认跟随系统
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return systemPrefersDark ? 'dark' : 'light'
}

// 应用 CSS 变量到 ：root
const applyTheme = (theme: Theme) => {
  const root = document.documentElement
  const vars = themes[theme]
  for (const [key, value] of Object.entries(vars) as [keyof ThemeVars, string][]) {
    root.style.setProperty(key, value)
  }
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // 使用 useLayoutEffect 确保在浏览器绘制前应用主题，避免闪烁
  useLayoutEffect(() => {
    applyTheme(theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export { ThemeContext }
