// A4 纸张标准尺寸，按 96 DPI（屏幕标准分辨率）换算成像素
// 210mm × 297mm ≈ 794px × 1123px
export const PAGE_WIDTH_PX = 794;
export const PAGE_HEIGHT_PX = 1123;

// 页面内边距（上下左右留白），后面计算"可用内容高度"要减去这部分
export const PAGE_PADDING_PX = 48; // 对应 Tailwind 的 p-12 (3rem = 48px)
export const PAGE_BOTTOM_BUFFER_PX = 60; // 页面底部安全缓冲区,防止吞字