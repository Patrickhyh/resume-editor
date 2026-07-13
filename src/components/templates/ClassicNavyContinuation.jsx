import { ExperienceItem, EducationItem, ProjectItem } from "./ClassicNavyParts";

function ClassicNavyContinuation({ experienceItems = [], projectItems = [], educationItems = [] }) {
  return (
    <div className="p-10 h-full space-y-8 bg-slate-100">
      {educationItems.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 tracking-wide">教育经历</h2>
          <div className="w-16 h-1 bg-amber-500 my-2"></div>
          <div className="space-y-4">
            {educationItems.map((edu) => (
              <EducationItem key={edu.id} edu={edu} />
            ))}
          </div>
        </section>
      )}

      {experienceItems.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 tracking-wide">工作经历</h2>
          <div className="w-16 h-1 bg-amber-500 my-2"></div>
          <div className="space-y-6">
            {experienceItems.map((job) => (
              <ExperienceItem key={job.id} job={job} />
            ))}
          </div>
        </section>
      )}

      {projectItems.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 tracking-wide">项目经历</h2>
          <div className="w-16 h-1 bg-amber-500 my-2"></div>
          <div className="space-y-6">
            {projectItems.map((p) => (
              <ProjectItem key={p.id} project={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ClassicNavyContinuation;