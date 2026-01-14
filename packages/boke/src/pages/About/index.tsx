import { useCallback, useEffect } from 'react'
import { ReactFlow, MiniMap, Controls, useNodesState, useEdgesState, addEdge } from '@xyflow/react'

import '@xyflow/react/dist/style.css'
import './index.css'

const About = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  useEffect(() => {
    const initialNodes = [
      { id: '1', data: { label: '开始节点/触发任务' }, position: { y: 0, x: 0 } },
      { id: '2', data: { label: '任务节点1(HTTP请求)' }, position: { y: 0, x: 200 } },
      { id: '3', data: { label: '任务节点2(SQL执行)' }, position: { y: 0, x: 400 } },
      { id: '4', data: { label: '结束节点/执行完成' }, position: { y: 0, x: 600 } },
    ]
    const initialEdges = [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e3-4', source: '3', target: '4' },
    ]
    setNodes(initialNodes)
    setEdges(initialEdges)
  }, [setNodes, setEdges])

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  return (
    <div className="about-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        {/* <Background variant={BackgroundVariant.Dots} gap={12} size={1} /> */}
      </ReactFlow>
    </div>
  )
}

export default About
