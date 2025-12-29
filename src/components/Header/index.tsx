import './index.css'
import logoImg from '../../assets/react.svg'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { useTheme } from '../../hook/useTheme'

const Header = () => {

    const navigate = useNavigate()
    const { toggleTheme } = useTheme()
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
                <Button type="link" onClick={() => toggleTheme()}>
                    主题切换
                </Button>
            </div>
        </div>
    )
}

export default Header
