import { ExperienceItem, EducationItem } from "./templates/ClassicNavyParts";
import { CONTENT_COLUMN_WIDTH } from "../hooks/useAutoPagination";

// 这个组件不会被用户看到：渲染在屏幕外，专门用来测量每一块内容的真实高度
function MeasureContainer({ data, measureRef }) {
  return (
    <div
      ref={measureRef}
      style={{
        position: "absolute",
        top: 0,
        left: "-9999px", // 移到屏幕外，用户看不见，但仍然会正常渲染和占据尺寸
        width: `${CONTENT_COLUMN_WIDTH}px`,
      }}
    >
      <div data-measure="header" className="p-10">
        <h1 className="text-5xl font-serif font-bold">{data.fullName}</h1>
        <p className="text-lg tracking-widest mt-2">{data.title.toUpperCase()}</p>
        <div className="w-24 h-1 mt-4"></div>
        <p className="leading-relaxed mt-4">{data.profileSummary}</p>
        <h2 className="text-xl font-bold mt-4">PROFILE</h2>
        <div className="w-16 h-1 my-2"></div>
        <p className="leading-relaxed">{data.profile}</p>
      </div>

      <div className="px-10">
        <h2 data-measure="exp-header" className="text-xl font-bold tracking-wide mb-2">
          PROFESSIONAL EXPERIENCE
        </h2>
        {data.experience.map((job) => (
          <div key={job.id} data-measure="exp-item" className="mb-6">
            <ExperienceItem job={job} />
          </div>
        ))}

        <h2 data-measure="edu-header" className="text-xl font-bold tracking-wide mb-2 mt-4">
          EDUCATION
        </h2>
        {data.education.map((edu) => (
          <div key={edu.id} data-measure="edu-item" className="mb-4">
            <EducationItem edu={edu} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeasureContainer;