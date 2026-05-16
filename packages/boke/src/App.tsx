import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './theme/ThemeProvider'
import Header from './components/Header'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Works from './pages/Works'
import About from './pages/About'

const getRouterBasename = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  if (!base || base === '/') return undefined

  return window.location.pathname === base || window.location.pathname.startsWith(`${base}/`) ? base : undefined
}

const App = () => {
  return (
    <ThemeProvider>
      <Router basename={getRouterBasename()}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
