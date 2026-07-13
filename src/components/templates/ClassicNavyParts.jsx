// 单条工作经历的渲染逻辑，抽出来复用（第1页、续页、测量容器都会用到）
export function ExperienceItem({ job }) {
  return (
    <div>
      <h3 className="text-lg font-serif font-bold text-slate-900">{job.position}</h3>
      <div className="flex justify-between text-sm text-slate-500 mb-2">
        <span>{job.company} · {job.city}</span>
        <span>{job.dateRange}</span>
      </div>
      <ul className="list-disc list-inside text-slate-600 space-y-1">
        {job.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

// 单条教育背景的渲染逻辑，同样抽出来复用
export function EducationItem({ edu }) {
  return (
    <div>
      <h3 className="text-lg font-serif font-bold text-slate-900">{edu.degree}</h3>
      <div className="flex justify-between text-sm text-slate-500 mb-1">
        <span>{edu.institution} · {edu.field}</span>
        <span>{edu.dateRange}</span>
      </div>
      <p className="text-slate-600">{edu.details}</p>
    </div>
  );
}