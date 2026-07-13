import { useState, useRef } from "react";
import EditorForm from "./components/EditorForm";
import PageWrapper from "./components/PageWrapper";
import MeasureContainer from "./components/MeasureContainer";
import ClassicNavy from "./components/templates/ClassicNavy";
import ClassicNavyContinuation from "./components/templates/ClassicNavyContinuation";
import MinimalLight from "./components/templates/MinimalLight";
import defaultResumeData from "./data/defaultResumeData";
import templateRegistry from "./data/templateRegistry";
import { useAutoPagination } from "./hooks/useAutoPagination";
import { exportToPDF } from "./utils/exportResume";

function App() {
  const [resumeData, setResumeData] = useState(defaultResumeData);
  const [selectedTemplateId, setSelectedTemplateId] = useState(templateRegistry[0].id);

  // 只有 "经典深蓝" 模板支持自动分页(极简风先保持单页,逻辑更简单)
  const isPaginatedTemplate = selectedTemplateId === "classic-navy";
  const { pages, measureRef } = useAutoPagination(resumeData);

  // 用来收集每一页真实 DOM 元素,导出 PDF 时要用
  const pageRefs = useRef([]);

  const handleExportPDF = async () => {
    const elements = pageRefs.current.filter(Boolean); // 过滤掉空的 ref
    if (elements.length === 0) return;
    await exportToPDF(elements, `${resumeData.fullName || "resume"}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* 左侧:编辑表单 */}
        <div className="space-y-4">
          {/* 模板切换选择器 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <label className="block text-sm font-medium text-slate-600 mb-2">
              选择模板
            </label>
            <select
              value={selectedTemplateId}
              onChange={(e) => setSelectedTemplateId(e.target.value)}
              className="w-full border border-slate-300 rounded px-3 py-2"
            >
              {templateRegistry.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* 导出按钮 */}
          <button
            onClick={handleExportPDF}
            disabled={!isPaginatedTemplate}
            className="w-full bg-slate-800 text-white py-2.5 rounded-lg font-medium hover:bg-slate-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            导出为 PDF
          </button>

          <EditorForm data={resumeData} onChange={setResumeData} />
        </div>

        {/* 右侧:实时预览 */}
        <div>
          {/* 隐藏的测量容器,始终存在,用于计算分页(不会显示在页面上) */}
          <MeasureContainer data={resumeData} measureRef={measureRef} />

          {isPaginatedTemplate ? (
            // ---- 经典深蓝模板:自动分页渲染 ----
            !pages ? (
              <p className="text-slate-400 text-center">正在计算分页...</p>
            ) : (
              pages.map((page, index) => (
                <PageWrapper
                  key={index}
                  ref={(el) => (pageRefs.current[index] = el)}
                >
                  {index === 0 ? (
                    <ClassicNavy
                      data={resumeData}
                      experienceItems={page.experience}
                      educationItems={page.education}
                    />
                  ) : (
                    <ClassicNavyContinuation
                      experienceItems={page.experience}
                      educationItems={page.education}
                    />
                  )}
                </PageWrapper>
              ))
            )
          ) : (
            // ---- 极简风模板:暂时保持单页显示 ----
            <MinimalLight data={resumeData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;