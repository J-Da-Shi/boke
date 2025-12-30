// 支持的主题类型
export type Theme = 'light' | 'dark';

// 主题配置对象
export const themes = {
  light: {
    // 背景色
    '--bg-white': '#ffffff',
    '--bg-secondary': '#f5f5f5',
    '--bg-tertiary': '#fafafa',
    '--bg-hover': 'rgba(0, 0, 0, 0.04)',
    '--bg-active': 'rgba(24, 144, 255, 0.1)',
    '--bg-color-blue': '#1a2438',
    '--bg-color-blue-100': '#06419a',
    
    // 文本颜色
    '--text-color-black': '#000000',
    '--text-color-primary': '#1890ff',
    '--text-color-secondary': 'rgba(0, 0, 0, 0.65)',
    '--text-color-tertiary': 'rgba(0, 0, 0, 0.45)',
    '--text-color-disabled': 'rgba(0, 0, 0, 0.25)',
    '--text-color-inverse': '#ffffff',
    
    // 主色变体
    '--color-primary': '#1890ff',
    '--color-primary-light': '#40a9ff',
    '--color-primary-lighter': '#69c0ff',
    '--color-primary-dark': '#096dd9',
    '--color-primary-hover': '#40a9ff',
    '--color-primary-active': '#096dd9',
    
    // 状态颜色
    '--color-success': '#52c41a',
    '--color-success-light': '#95de64',
    '--color-success-bg': '#f6ffed',
    '--color-warning': '#faad14',
    '--color-warning-light': '#ffd666',
    '--color-warning-bg': '#fffbe6',
    '--color-error': '#ff4d4f',
    '--color-error-light': '#ff7875',
    '--color-error-bg': '#fff2f0',
    '--color-info': '#1890ff',
    '--color-info-light': '#69c0ff',
    '--color-info-bg': '#e6f7ff',
    
    // 边框颜色
    '--border-color': 'rgba(0, 0, 0, 0.15)',
    '--border-color-light': 'rgba(0, 0, 0, 0.08)',
    '--border-color-lighter': 'rgba(0, 0, 0, 0.06)',
    '--border-color-dark': 'rgba(0, 0, 0, 0.25)',
    '--border-color-primary': '#1890ff',
    
    // 分割线
    '--divider-color': 'rgba(0, 0, 0, 0.08)',
    '--divider-color-dark': 'rgba(0, 0, 0, 0.12)',
    
    // 阴影
    '--shadow-sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
    '--shadow-md': '0 4px 16px rgba(0, 0, 0, 0.12)',
    '--shadow-lg': '0 8px 24px rgba(0, 0, 0, 0.16)',
    '--shadow-xl': '0 12px 48px rgba(0, 0, 0, 0.2)',
    '--shadow-primary': '0 4px 16px rgba(24, 144, 255, 0.2)',
    
    // 链接颜色
    '--link-color': '#1890ff',
    '--link-hover-color': '#40a9ff',
    '--link-active-color': '#096dd9',
    
    // 遮罩
    '--mask-color': 'rgba(0, 0, 0, 0.45)',
    '--mask-color-light': 'rgba(0, 0, 0, 0.25)',
  },
  dark: {
    // 背景色
    '--bg-white': '#121212',
    '--bg-secondary': '#1f1f1f',
    '--bg-tertiary': '#2a2a2a',
    '--bg-hover': 'rgba(255, 255, 255, 0.08)',
    '--bg-active': 'rgba(24, 144, 255, 0.2)',
    '--bg-color-blue': '#1a2438',
    '--bg-color-blue-100': '#06419a',
    
    // 文本颜色
    '--text-color-black': '#ffffff',
    '--text-color-primary': '#1890ff',
    '--text-color-secondary': 'rgba(255, 255, 255, 0.65)',
    '--text-color-tertiary': 'rgba(255, 255, 255, 0.45)',
    '--text-color-disabled': 'rgba(255, 255, 255, 0.25)',
    '--text-color-inverse': '#000000',
    
    // 主色变体
    '--color-primary': '#1890ff',
    '--color-primary-light': '#40a9ff',
    '--color-primary-lighter': '#69c0ff',
    '--color-primary-dark': '#096dd9',
    '--color-primary-hover': '#40a9ff',
    '--color-primary-active': '#096dd9',
    
    // 状态颜色
    '--color-success': '#52c41a',
    '--color-success-light': '#73d13d',
    '--color-success-bg': 'rgba(82, 196, 26, 0.15)',
    '--color-warning': '#faad14',
    '--color-warning-light': '#ffc53d',
    '--color-warning-bg': 'rgba(250, 173, 20, 0.15)',
    '--color-error': '#ff4d4f',
    '--color-error-light': '#ff7875',
    '--color-error-bg': 'rgba(255, 77, 79, 0.15)',
    '--color-info': '#1890ff',
    '--color-info-light': '#69c0ff',
    '--color-info-bg': 'rgba(24, 144, 255, 0.15)',
    
    // 边框颜色
    '--border-color': 'rgba(255, 255, 255, 0.15)',
    '--border-color-light': 'rgba(255, 255, 255, 0.08)',
    '--border-color-lighter': 'rgba(255, 255, 255, 0.06)',
    '--border-color-dark': 'rgba(255, 255, 255, 0.25)',
    '--border-color-primary': '#1890ff',
    
    // 分割线
    '--divider-color': 'rgba(255, 255, 255, 0.08)',
    '--divider-color-dark': 'rgba(255, 255, 255, 0.12)',
    
    // 阴影
    '--shadow-sm': '0 2px 8px rgba(0, 0, 0, 0.3)',
    '--shadow-md': '0 4px 16px rgba(0, 0, 0, 0.4)',
    '--shadow-lg': '0 8px 24px rgba(0, 0, 0, 0.5)',
    '--shadow-xl': '0 12px 48px rgba(0, 0, 0, 0.6)',
    '--shadow-primary': '0 4px 16px rgba(24, 144, 255, 0.3)',
    
    // 链接颜色
    '--link-color': '#1890ff',
    '--link-hover-color': '#40a9ff',
    '--link-active-color': '#096dd9',
    
    // 遮罩
    '--mask-color': 'rgba(0, 0, 0, 0.65)',
    '--mask-color-light': 'rgba(0, 0, 0, 0.45)',
  },
} as const;

// 提取 CSS 变量类型（用于 TS 类型安全）
export type ThemeVars = typeof themes.light;