function MinimalLight({ data }) {
  return (
    <div className="w-full max-w-[900px] mx-auto bg-white p-12 shadow-lg">
      {/* 姓名 + 职位 */}
      <div className="border-b-2 border-slate-800 pb-4 mb-6">
        <h1 className="text-4xl font-light text-slate-900">{data.fullName}</h1>
        <p className="text-md text-slate-500 mt-1">{data.title}</p>
      </div>

      {/* 简介 */}
      <p className="text-slate-600 mb-6">{data.profileSummary}</p>

      {/* 联系方式（横排，极简风常见做法） */}
      <div className="flex gap-6 text-sm text-slate-500 mb-8">
        <span>{data.contact.location}</span>
        <span>{data.contact.availability}</span>
        <span>{data.contact.reference}</span>
      </div>

      {/* 工作经历 */}
      <section className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">
          Experience
        </h2>
        <div className="space-y-4">
          {data.experience.map((job) => (
            <div key={job.id}>
              <div className="flex justify-between">
                <h3 className="font-semibold text-slate-800">{job.position}</h3>
                <span className="text-sm text-slate-400">{job.dateRange}</span>
              </div>
              <p className="text-sm text-slate-500 mb-1">
                {job.company} · {job.city}
              </p>
              <ul className="list-disc list-inside text-sm text-slate-600">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 教育背景 */}
      <section className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">
          Education
        </h2>
        <div className="space-y-2">
          {data.education.map((edu) => (
            <div key={edu.id}>
              <div className="flex justify-between">
                <h3 className="font-semibold text-slate-800">{edu.degree}</h3>
                <span className="text-sm text-slate-400">{edu.dateRange}</span>
              </div>
              <p className="text-sm text-slate-500">
                {edu.institution} · {edu.field}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 技能 / 工具 / 语言（简化为标签形式） */}
      <div className="flex gap-2 flex-wrap text-sm">
        {data.skills.map((s, i) => (
          <span key={i} className="bg-slate-100 px-3 py-1 rounded-full text-slate-600">
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MinimalLight;