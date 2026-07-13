import { processImageFile } from "../utils/imageUtils";

function EditorForm({ data, onChange }) {
  const handleFieldChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  // ------ 工作经历 ------
  const handleExperienceChange = (id, field, value) => {
    const updated = data.experience.map((job) =>
      job.id === id ? { ...job, [field]: value } : job
    );
    onChange({ ...data, experience: updated });
  };

  const handleBulletChange = (jobId, bulletIndex, value) => {
    const updated = data.experience.map((job) => {
      if (job.id !== jobId) return job;
      const newBullets = [...job.bullets];
      newBullets[bulletIndex] = value;
      return { ...job, bullets: newBullets };
    });
    onChange({ ...data, experience: updated });
  };

  const handleAddExperience = () => {
    const newJob = {
      id: Date.now(),
      position: "New Position",
      company: "Company Name",
      city: "City Name",
      dateRange: "Date Range",
      bullets: ["Describe your responsibility or achievement here."],
    };
    onChange({ ...data, experience: [...data.experience, newJob] });
  };

  const handleRemoveExperience = (id) => {
    onChange({ ...data, experience: data.experience.filter((job) => job.id !== id) });
  };

  // ------ 项目经历 ------
  const handleProjectChange = (id, field, value) => {
    const updated = data.projects.map((p) =>
      p.id === id ? { ...p, [field]: value } : p
    );
    onChange({ ...data, projects: updated });
  };

  const handleAddProject = () => {
    const newProject = {
      id: Date.now(),
      name: "New Project",
      role: "Role",
      dateRange: "Date Range",
      description: "Project description here.",
    };
    onChange({ ...data, projects: [...data.projects, newProject] });
  };

  const handleRemoveProject = (id) => {
    onChange({ ...data, projects: data.projects.filter((p) => p.id !== id) });
  };

  // ------ 教育背景 ------
  const handleEducationChange = (id, field, value) => {
    const updated = data.education.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    onChange({ ...data, education: updated });
  };

  const handleAddEducation = () => {
    const newEdu = {
      id: Date.now(),
      degree: "New Degree",
      institution: "Institution Name",
      field: "Field of Study",
      dateRange: "Date Range",
      details: "Details here.",
    };
    onChange({ ...data, education: [...data.education, newEdu] });
  };

  const handleRemoveEducation = (id) => {
    onChange({ ...data, education: data.education.filter((edu) => edu.id !== id) });
  };

  // ------ 联系方式 ------
  const handleContactChange = (field, value) => {
    onChange({ ...data, contact: { ...data.contact, [field]: value } });
  };

  // ------ 技能 ------
  const handleSkillChange = (index, field, value) => {
    const updated = [...data.skills];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...data, skills: updated });
  };

  const handleAddSkill = () => {
    onChange({ ...data, skills: [...data.skills, { name: "New Skill", level: 50 }] });
  };

  const handleRemoveSkill = (index) => {
    onChange({ ...data, skills: data.skills.filter((_, i) => i !== index) });
  };

  // ------ 证书/获奖 ------
  const handleCertificationChange = (index, value) => {
    const updated = [...data.certifications];
    updated[index] = value;
    onChange({ ...data, certifications: updated });
  };

  const handleAddCertification = () => {
    onChange({ ...data, certifications: [...data.certifications, "New Certification"] });
  };

  const handleRemoveCertification = (index) => {
    onChange({ ...data, certifications: data.certifications.filter((_, i) => i !== index) });
  };

  // ------ 工具 ------
  const handleToolChange = (index, value) => {
    const updated = [...data.tools];
    updated[index] = value;
    onChange({ ...data, tools: updated });
  };

  const handleAddTool = () => {
    onChange({ ...data, tools: [...data.tools, "New Tool"] });
  };

  const handleRemoveTool = (index) => {
    onChange({ ...data, tools: data.tools.filter((_, i) => i !== index) });
  };

  // ------ 语言 ------
  const handleLanguageChange = (index, value) => {
    const updated = [...data.languages];
    updated[index] = value;
    onChange({ ...data, languages: updated });
  };

  const handleAddLanguage = () => {
    onChange({ ...data, languages: [...data.languages, "New Language"] });
  };

  const handleRemoveLanguage = (index) => {
    onChange({ ...data, languages: data.languages.filter((_, i) => i !== index) });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-5">
      <h2 className="text-xl font-bold text-slate-800">编辑简历</h2>

      {/* 照片 */}
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">照片</label>
        <div className="flex items-center gap-4">
          {data.photo ? (
            <img
              src={data.photo}
              alt="预览"
              className="w-16 h-16 rounded-full object-cover border border-slate-300"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-400 text-xs">
              无照片
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files[0];
              if (!file) return;
              try {
                const base64 = await processImageFile(file);
                handleFieldChange("photo", base64);
              } catch (err) {
                alert(`照片处理失败:${err.message}`);
              }
            }}
            className="text-sm"
          />
          {data.photo && (
            <button
              onClick={() => handleFieldChange("photo", null)}
              className="text-sm text-red-500 hover:text-red-700"
            >
              移除
            </button>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">姓名</label>
        <input
          type="text"
          value={data.fullName}
          onChange={(e) => handleFieldChange("fullName", e.target.value)}
          className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">职位/头衔</label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => handleFieldChange("title", e.target.value)}
          className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>


      {/* 工作经历 */}
      <div className="border-t pt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-slate-800">工作经历</h3>
          <button onClick={handleAddExperience} className="text-sm bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600">
            + 新增一条
          </button>
        </div>
        <div className="space-y-4">
          {data.experience.map((job) => (
            <div key={job.id} className="border border-slate-200 rounded p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-slate-500">经历 #{job.id}</span>
                <button onClick={() => handleRemoveExperience(job.id)} className="text-sm text-red-500 hover:text-red-700">
                  删除
                </button>
              </div>
              <input
                type="text" placeholder="职位名称" value={job.position}
                onChange={(e) => handleExperienceChange(job.id, "position", e.target.value)}
                className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text" placeholder="公司名称" value={job.company}
                  onChange={(e) => handleExperienceChange(job.id, "company", e.target.value)}
                  className="border border-slate-300 rounded px-3 py-1.5 text-sm"
                />
                <input
                  type="text" placeholder="城市" value={job.city}
                  onChange={(e) => handleExperienceChange(job.id, "city", e.target.value)}
                  className="border border-slate-300 rounded px-3 py-1.5 text-sm"
                />
              </div>
              <input
                type="text" placeholder="日期范围" value={job.dateRange}
                onChange={(e) => handleExperienceChange(job.id, "dateRange", e.target.value)}
                className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
              />
              <div className="space-y-1">
                {job.bullets.map((bullet, i) => (
                  <textarea
                    key={i} rows={2} value={bullet}
                    onChange={(e) => handleBulletChange(job.id, i, e.target.value)}
                    className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 项目经历 */}
      <div className="border-t pt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-slate-800">项目经历</h3>
          <button onClick={handleAddProject} className="text-sm bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600">
            + 新增一条
          </button>
        </div>
        <div className="space-y-4">
          {data.projects.map((p) => (
            <div key={p.id} className="border border-slate-200 rounded p-4 space-y-2">
              <div className="flex justify-end">
                <button onClick={() => handleRemoveProject(p.id)} className="text-sm text-red-500 hover:text-red-700">
                  删除
                </button>
              </div>
              <input
                type="text" placeholder="项目名称" value={p.name}
                onChange={(e) => handleProjectChange(p.id, "name", e.target.value)}
                className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text" placeholder="担任角色" value={p.role}
                  onChange={(e) => handleProjectChange(p.id, "role", e.target.value)}
                  className="border border-slate-300 rounded px-3 py-1.5 text-sm"
                />
                <input
                  type="text" placeholder="日期范围" value={p.dateRange}
                  onChange={(e) => handleProjectChange(p.id, "dateRange", e.target.value)}
                  className="border border-slate-300 rounded px-3 py-1.5 text-sm"
                />
              </div>
              <textarea
                rows={3} placeholder="项目描述" value={p.description}
                onChange={(e) => handleProjectChange(p.id, "description", e.target.value)}
                className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 教育背景 */}
      <div className="border-t pt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-slate-800">教育背景</h3>
          <button onClick={handleAddEducation} className="text-sm bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600">
            + 新增一条
          </button>
        </div>
        <div className="space-y-4">
          {data.education.map((edu) => (
            <div key={edu.id} className="border border-slate-200 rounded p-4 space-y-2">
              <div className="flex justify-end">
                <button onClick={() => handleRemoveEducation(edu.id)} className="text-sm text-red-500 hover:text-red-700">
                  删除
                </button>
              </div>
              <input
                type="text" placeholder="学位/证书名称" value={edu.degree}
                onChange={(e) => handleEducationChange(edu.id, "degree", e.target.value)}
                className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text" placeholder="学校名称" value={edu.institution}
                  onChange={(e) => handleEducationChange(edu.id, "institution", e.target.value)}
                  className="border border-slate-300 rounded px-3 py-1.5 text-sm"
                />
                <input
                  type="text" placeholder="专业" value={edu.field}
                  onChange={(e) => handleEducationChange(edu.id, "field", e.target.value)}
                  className="border border-slate-300 rounded px-3 py-1.5 text-sm"
                />
              </div>
              <input
                type="text" placeholder="日期范围" value={edu.dateRange}
                onChange={(e) => handleEducationChange(edu.id, "dateRange", e.target.value)}
                className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
              />
              <textarea
                rows={2} placeholder="详情" value={edu.details}
                onChange={(e) => handleEducationChange(edu.id, "details", e.target.value)}
                className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 联系方式 */}
      <div className="border-t pt-5">
        <h3 className="text-lg font-bold text-slate-800 mb-3">联系方式</h3>
        <div className="space-y-2">
          <input
            type="text" placeholder="邮箱" value={data.contact.email}
            onChange={(e) => handleContactChange("email", e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
          />
          <input
            type="text" placeholder="电话" value={data.contact.phone}
            onChange={(e) => handleContactChange("phone", e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
          />
          <input
            type="text" placeholder="地址/位置" value={data.contact.location}
            onChange={(e) => handleContactChange("location", e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
          />
          <input
            type="text" placeholder="可用时间" value={data.contact.availability}
            onChange={(e) => handleContactChange("availability", e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
          />
          <input
            type="text" placeholder="推荐人信息" value={data.contact.reference}
            onChange={(e) => handleContactChange("reference", e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm"
          />
        </div>
      </div>

      {/* 技能 */}
      <div className="border-t pt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-slate-800">技能</h3>
          <button onClick={handleAddSkill} className="text-sm bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600">
            + 新增
          </button>
        </div>
        <div className="space-y-2">
          {data.skills.map((skill, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                type="text" placeholder="技能名称" value={skill.name}
                onChange={(e) => handleSkillChange(i, "name", e.target.value)}
                className="flex-1 border border-slate-300 rounded px-3 py-1.5 text-sm"
              />
              <input
                type="number" min="0" max="100" value={skill.level}
                onChange={(e) => handleSkillChange(i, "level", Number(e.target.value))}
                className="w-20 border border-slate-300 rounded px-3 py-1.5 text-sm"
              />
              <button onClick={() => handleRemoveSkill(i)} className="text-sm text-red-500 hover:text-red-700">
                删除
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 证书/获奖 */}
      <div className="border-t pt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-slate-800">证书/获奖</h3>
          <button onClick={handleAddCertification} className="text-sm bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600">
            + 新增
          </button>
        </div>
        <div className="space-y-2">
          {data.certifications.map((c, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                type="text" value={c}
                onChange={(e) => handleCertificationChange(i, e.target.value)}
                className="flex-1 border border-slate-300 rounded px-3 py-1.5 text-sm"
              />
              <button onClick={() => handleRemoveCertification(i)} className="text-sm text-red-500 hover:text-red-700">
                删除
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 工具 */}
      <div className="border-t pt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-slate-800">工具</h3>
          <button onClick={handleAddTool} className="text-sm bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600">
            + 新增
          </button>
        </div>
        <div className="space-y-2">
          {data.tools.map((tool, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                type="text" value={tool}
                onChange={(e) => handleToolChange(i, e.target.value)}
                className="flex-1 border border-slate-300 rounded px-3 py-1.5 text-sm"
              />
              <button onClick={() => handleRemoveTool(i)} className="text-sm text-red-500 hover:text-red-700">
                删除
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 语言 */}
      <div className="border-t pt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-slate-800">语言</h3>
          <button onClick={handleAddLanguage} className="text-sm bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600">
            + 新增
          </button>
        </div>
        <div className="space-y-2">
          {data.languages.map((lang, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                type="text" value={lang}
                onChange={(e) => handleLanguageChange(i, e.target.value)}
                className="flex-1 border border-slate-300 rounded px-3 py-1.5 text-sm"
              />
              <button onClick={() => handleRemoveLanguage(i)} className="text-sm text-red-500 hover:text-red-700">
                删除
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EditorForm;