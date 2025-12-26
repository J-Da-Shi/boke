// 支持的主题类型
export type Theme = 'light' | 'dark';

// 主题配置对象
export const themes = {
  light: {
    '--bg-white': '#ffffff',
    '--bg-color-blue': '#1a2438',
    '--text-color-black': '#000000',
    '--text-color-primary': '#1890ff',
  },
  dark: {
    '--bg-white': '#121212',
    '--bg-color-blue': '#1a2438',
    '--text-color-black': '#ffffff',
    '--text-color-primary': '#1890ff',
  },
} as const;

// 提取 CSS 变量类型（用于 TS 类型安全）
export type ThemeVars = typeof themes.light;