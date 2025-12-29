import './index.css'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'

const md = `
# 渲染markdown
## 算法与数据结构
计算机存储，组织数据结构的方式，类似于锅碗瓢盆。
## 算法
一系列解决问题的清晰指令，类似于食谱。
## 时间复杂度
- 概念
- 原理
\`\`\`ts
function add(a: number, b: number) {
  return a + b
}
\`\`\`

`;

const Blog = () => {
  return (
    <div className='blog-container'>
       <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
      {md}
    </ReactMarkdown>
    </div>
  )
}

export default Blog;