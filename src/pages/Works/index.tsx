import './index.css'
import { Input, Button } from 'antd'

const Blog = () => {
  return (
    <div className='works-container'>
      <h1>组件展示，目前展示为antd，后续改为自己的组件库</h1>
      <div className='works-input-content'>
        <div className='works-content-input'>
          <Input placeholder='请输入你的作品名称' />
        </div>
        <div className='works-content-input'>
          <Input placeholder='请输入你的作品描述' />
        </div>
        <div className='works-content-input'>
          <Input placeholder='请输入你的作品链接' />
        </div>
        <div className='works-content-input'>
          <Input placeholder='请输入你的作品图片' />
        </div>
      </div>
      <div className='works-button-content'>
        <Button type='primary'>添加</Button>
        <Button>修改</Button>
        <Button type='link'>删除</Button>
      </div>
    </div>
  )
}

export default Blog;