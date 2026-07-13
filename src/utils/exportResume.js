import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

// 把多个"页面" DOM 元素导出成一个多页 PDF 文件
export async function exportToPDF(pageElements, fileName = "resume.pdf") {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: "a4",
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  for (let i = 0; i < pageElements.length; i++) {
    const el = pageElements[i];
    if (!el) continue;

    // 用 html2canvas 把这一页 DOM 转成图片
    const canvas = await html2canvas(el, {
      scale: 2, // 提高清晰度(2倍分辨率截图)
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");

    if (i > 0) {
      pdf.addPage(); // 除了第一页,后面每一页都要新建 PDF 页
    }

    // 把图片贴满整个 PDF 页面
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  }

  pdf.save(fileName);
}

// 导出单张图片(比如只导出第一页当预览图)
export async function exportToImage(element, fileName = "resume.png") {
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
  });
  const link = document.createElement("a");
  link.download = fileName;
  link.href = canvas.toDataURL("image/png");
  link.click();
}
// 把当前简历数据导出成一个 JSON 文件,方便备份/以后导入恢复
export function exportToJSON(data, fileName = "resume-data.json") {
  const jsonStr = JSON.stringify(data, null, 2); // null, 2 是为了让文件里的格式带缩进,方便人眼查看
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.download = fileName;
  link.href = url;
  link.click();

  URL.revokeObjectURL(url); // 释放内存
}

// 从用户选择的 JSON 文件里读取数据,返回一个 Promise
export function importFromJSON(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        resolve(data);
      } catch (err) {
        reject(new Error("文件内容不是有效的 JSON 格式"));
      }
    };

    reader.onerror = () => reject(new Error("文件读取失败"));
    reader.readAsText(file);
  });
}