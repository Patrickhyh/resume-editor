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