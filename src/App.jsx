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
import { exportToPDF, exportToJSON, importFromJSON } from "./utils/exportResume";

function App() {
  const [resumeData, setResumeData] = useState(defaultResumeData);
  const [selectedTemplateId, setSelectedTemplateId] = useState(templateRegistry[0].id);

  const isPaginatedTemplate = selectedTemplateId === "classic-navy";
  const { pages, measureRef } = useAutoPagination(resumeData);

  const pageRefs = useRef([]);

  const handleExportPDF = async () => {
    const elements = pageRefs.current.filter(Boolean);
    if (elements.length === 0) return;
    await exportToPDF(elements, `${resumeData.fullName || "resume"}.pdf`);
  };

  const handleExportJSON = () => {
    exportToJSON(resumeData, `${resumeData.fullName || "resume"}-data.json`);
  };

  const fileInputRef = useRef(null);
  const handleImportClick = () => fileInputRef.current?.click();

  const handleFileSelected = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const importedData = await importFromJSON(file);
      setResumeData(importedData);
      alert("导入成功!");
    } catch (err) {
      alert(`导入失败:${err.message}`);
    } finally {
      e.target.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <label className="block text-sm font-medium text-slate-600 mb-2">选择模板</label>
            <select
              value={selectedTemplateId}
              onChange={(e) => setSelectedTemplateId(e.target.value)}
              className="w-full border border-slate-300 rounded px-3 py-2"
            >
              {templateRegistry.map((t) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleExportPDF}
            disabled={!isPaginatedTemplate}
            className="w-full bg-slate-800 text-white py-2.5 rounded-lg font-medium hover:bg-slate-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            导出为 PDF
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleExportJSON}
              className="bg-white border border-slate-300 text-slate-700 py-2 rounded-lg text-sm font-medium hover:bg-slate-50"
            >
              导出配置
            </button>
            <button
              onClick={handleImportClick}
              className="bg-white border border-slate-300 text-slate-700 py-2 rounded-lg text-sm font-medium hover:bg-slate-50"
            >
              导入配置
            </button>
          </div>

          <input
            type="file"
            accept="application/json"
            ref={fileInputRef}
            onChange={handleFileSelected}
            className="hidden"
          />

          <EditorForm data={resumeData} onChange={setResumeData} />
        </div>

        <div>
          <MeasureContainer data={resumeData} measureRef={measureRef} />

          {isPaginatedTemplate ? (
            !pages ? (
              <p className="text-slate-400 text-center">正在计算分页...</p>
            ) : (
              pages.map((page, index) => (
                <PageWrapper key={index} ref={(el) => (pageRefs.current[index] = el)}>
                  {index === 0 ? (
                    <ClassicNavy
                      data={resumeData}
                      experienceItems={page.experience}
                      projectItems={page.projects}
                      educationItems={page.education}
                    />
                  ) : (
                    <ClassicNavyContinuation
                      experienceItems={page.experience}
                      projectItems={page.projects}
                      educationItems={page.education}
                    />
                  )}
                </PageWrapper>
              ))
            )
          ) : (
            <MinimalLight data={resumeData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;