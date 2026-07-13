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

export function ProjectItem({ project }) {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-lg font-serif font-bold text-slate-900">{project.name}</h3>
        <span className="text-sm text-slate-500">{project.dateRange}</span>
      </div>
      <p className="text-sm text-slate-500 mb-1">{project.role}</p>
      <p className="text-slate-600 leading-relaxed">{project.description}</p>
    </div>
  );
}