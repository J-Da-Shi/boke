import './index.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-title'>
        <h2>欢迎查看我的博客</h2>
      </div>
      <div className='home-content'>
        <div className='home-content-left'>
          <h3>我的博客</h3>
          <div className='home-content-left-content'>
            <span>2025-12-26</span>
            <span>2025-12-26</span>
            <span>2025-12-26</span>
            <span>2025-12-26</span>
          </div>
        </div>
        <div className='home-content-right'>
          <h2>我的博客</h2>
        </div>
      </div>
    </div>
  )
}

export default Home;