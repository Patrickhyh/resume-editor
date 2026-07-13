import { ExperienceItem, EducationItem } from "./ClassicNavyParts";

function ClassicNavyContinuation({ experienceItems = [], educationItems = [] }) {
  return (
    <div className="p-10 h-full space-y-8 bg-slate-100">
      {experienceItems.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 tracking-wide">
            PROFESSIONAL EXPERIENCE (CONT'D)
          </h2>
          <div className="w-16 h-1 bg-amber-500 my-2"></div>
          <div className="space-y-6">
            {experienceItems.map((job) => (
              <ExperienceItem key={job.id} job={job} />
            ))}
          </div>
        </section>
      )}

      {educationItems.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 tracking-wide">
            EDUCATION (CONT'D)
          </h2>
          <div className="w-16 h-1 bg-amber-500 my-2"></div>
          <div className="space-y-4">
            {educationItems.map((edu) => (
              <EducationItem key={edu.id} edu={edu} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ClassicNavyContinuation;