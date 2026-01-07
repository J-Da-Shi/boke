import './index.css'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'

const md = `
# 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
- 有效字符串需满足：
  - 左括号必须用相同类型的右括号闭合。
  - 左括号必须以正确的顺序闭合。
  - 每个右括号都有一个对应的相同类型的左括号。
\`\`\`ts
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = new Map();
    map.set("(",")");
    map.set("{","}");
    map.set("[","]");
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(map.has(char)) {
            stack.push(char);
        } else {
            const top = stack[stack.length - 1];
            if(
                map.get(top) === char
            ) {
                stack.pop();
            } else {
                return false
            }
        }
    }
    return stack.length === 0;
};
\`\`\`

`
const Blog = () => {
  return (
    <div className="blog-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {md}
      </ReactMarkdown>
    </div>
  )
}

export default Blog
