import './index.css'
import logoImg from '../../assets/react.svg'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()
    return (
        <div className="header-container">
            <div className='header-left'>
                <img src={logoImg} alt="logo" />
                <span>
                    Div里有光
                </span>
            </div>
            <div className='header-center'>
                <span onClick={() => navigate('/')}>简介</span>
                <span onClick={() => navigate('/blog')}>记录</span>
                <span onClick={() => navigate('/works')}>作品</span>
                <span onClick={() => navigate('/about')}>关于</span>
            </div>
            <div className='header-right'>
                <img src={logoImg} alt="logo" />
                <img src={logoImg} alt="logo" />
                <span>
                    搜索
                </span>
            </div>
        </div>
    )
}

export default Header
