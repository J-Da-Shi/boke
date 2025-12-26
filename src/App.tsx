import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Works from './pages/Works';
import { ThemeProvider } from './theme/ThemeProvider';
import Header from './components/Header';


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;