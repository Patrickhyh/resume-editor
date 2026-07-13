import { ExperienceItem, EducationItem } from "./ClassicNavyParts";

function ClassicNavy({ data, experienceItems, educationItems }) {
  // 如果没传子集，就默认显示全部（兼容旧用法）
  const expItems = experienceItems ?? data.experience;
  const eduItems = educationItems ?? data.education;

  return (
    <div className="w-full h-full bg-slate-100 flex">
      {/* 左侧主内容区 */}
      <div className="flex-1 p-10 space-y-8 overflow-hidden">
        <div>
          <h1 className="text-5xl font-serif font-bold text-slate-900 tracking-wide">
            {data.fullName}
          </h1>
          <p className="text-lg tracking-widest text-slate-500 mt-2">
            {data.title.toUpperCase()}
          </p>
          <div className="w-24 h-1 bg-amber-500 mt-4"></div>
        </div>

        <p className="text-slate-600 leading-relaxed">{data.profileSummary}</p>

        <section>
          <h2 className="text-xl font-bold text-slate-900 tracking-wide">PROFILE</h2>
          <div className="w-16 h-1 bg-amber-500 my-2"></div>
          <p className="text-slate-600 leading-relaxed">{data.profile}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 tracking-wide">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="w-16 h-1 bg-amber-500 my-2"></div>
          <div className="space-y-6">
            {expItems.map((job) => (
              <ExperienceItem key={job.id} job={job} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 tracking-wide">EDUCATION</h2>
          <div className="w-16 h-1 bg-amber-500 my-2"></div>
          <div className="space-y-4">
            {eduItems.map((edu) => (
              <EducationItem key={edu.id} edu={edu} />
            ))}
          </div>
        </section>
      </div>

      {/* 右侧侧边栏（只有第1页有） */}
      <div className="w-[280px] bg-slate-800 text-white p-8 space-y-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full border-2 border-white/50 flex items-center justify-center text-2xl font-bold">
            IN
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-widest mb-3">CONTACT</h3>
          <ul className="text-sm space-y-1 text-slate-300">
            <li>{data.contact.location}</li>
            <li>{data.contact.availability}</li>
            <li>{data.contact.reference}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-widest mb-3">KEY SKILLS</h3>
          <div className="space-y-3">
            {data.skills.map((skill, i) => (
              <div key={i}>
                <p className="text-sm mb-1">{skill.name}</p>
                <div className="w-full h-1.5 bg-slate-600 rounded">
                  <div
                    className="h-1.5 bg-amber-500 rounded"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-widest mb-3">TOOLS</h3>
          <ul className="text-sm space-y-1 text-slate-300">
            {data.tools.map((tool, i) => (
              <li key={i}>{tool}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-widest mb-3">LANGUAGES</h3>
          <ul className="text-sm space-y-1 text-slate-300">
            {data.languages.map((lang, i) => (
              <li key={i}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClassicNavy;