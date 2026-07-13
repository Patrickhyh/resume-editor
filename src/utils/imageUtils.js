// 把用户选择的图片文件,压缩并转换成 Base64 字符串
export function processImageFile(file, maxSize = 600) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        // 计算等比缩放后的尺寸(最长边不超过 maxSize)
        let { width, height } = img;
        if (width > height && width > maxSize) {
          height = (height / width) * maxSize;
          width = maxSize;
        } else if (height > maxSize) {
          width = (width / height) * maxSize;
          height = maxSize;
        }

        // 用 canvas 画出压缩后的图片
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // 转成 Base64(JPEG 格式,质量 0.85,进一步减小体积)
        const base64 = canvas.toDataURL("image/jpeg", 0.85);
        resolve(base64);
      };
      img.onerror = () => reject(new Error("图片加载失败"));
      img.src = event.target.result;
    };

    reader.onerror = () => reject(new Error("文件读取失败"));
    reader.readAsDataURL(file);
  });
}