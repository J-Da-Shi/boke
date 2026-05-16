import { useEffect, useState } from 'react'
import { listWorks } from '../../api/client'
import type { WorkItem } from '../../api/types'
import { fallbackWorks } from '../../data/fallback'
import './index.css'

const statusLabel: Record<WorkItem['status'], string> = {
  online: '已上线',
  building: '构建中',
  planned: '计划中',
}

const Works = () => {
  const [works, setWorks] = useState<WorkItem[]>(fallbackWorks)
  const [draftName, setDraftName] = useState('')

  useEffect(() => {
    let mounted = true
    listWorks()
      .then((items) => {
        if (mounted) setWorks(items)
      })
      .catch(() => {
        if (mounted) setWorks(fallbackWorks)
      })

    return () => {
      mounted = false
    }
  }, [])

  return (
    <main className="works-page">
      <section className="works-header">
        <div>
          <p className="eyebrow">Projects</p>
          <h1>作品与实验</h1>
          <p>这里展示博客、自动化面板和组件库等项目。数据来自 NestJS 后端，前端保留了本地降级数据。</p>
        </div>
      </section>

      <section className="works-toolbar" aria-label="作品草稿">
        <input
          value={draftName}
          onChange={(event) => setDraftName(event.target.value)}
          placeholder="记录一个新的作品想法"
        />
        <button type="button" onClick={() => setDraftName('')}>
          清空
        </button>
      </section>

      <section className="works-grid">
        {works.map((work) => (
          <article key={work.id} className="work-card">
            <div className="work-card-top">
              <span className={`work-status ${work.status}`}>{statusLabel[work.status]}</span>
              <a href={work.link} target="_blank" rel="noreferrer">
                访问
              </a>
            </div>
            <h2>{work.name}</h2>
            <p>{work.description}</p>
            <div className="work-stack">
              {work.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Works
