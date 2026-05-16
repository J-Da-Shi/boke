import { useCallback } from 'react'
import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'
import './index.css'

const initialNodes: Node[] = [
  { id: '1', data: { label: '发现问题' }, position: { y: 80, x: 0 } },
  { id: '2', data: { label: '写成笔记' }, position: { y: 80, x: 210 } },
  { id: '3', data: { label: '沉淀代码' }, position: { y: 80, x: 420 } },
  { id: '4', data: { label: '发布文章' }, position: { y: 80, x: 630 } },
]

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
]

const About = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((params: Connection) => setEdges((currentEdges) => addEdge(params, currentEdges)), [setEdges])

  return (
    <main className="about-page">
      <section className="about-header">
        <div>
          <p className="eyebrow">About</p>
          <h1>关于这个博客</h1>
          <p>这个站点会围绕问题、笔记、代码和发布形成持续迭代的内容流。下面的流程图可以直接拖拽和连线。</p>
        </div>
      </section>

      <section className="flow-shell">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background variant={BackgroundVariant.Dots} gap={18} size={1} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </section>
    </main>
  )
}

export default About
