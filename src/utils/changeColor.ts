export function useChangeColor(rgbaString, newAlpha) {
  // 使用正则表达式匹配rgba的各个部分
  const rgbaRegex = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/;
  const rgbaMatch = rgbaString.match(rgbaRegex);
  console.log(rgbaMatch);

  if (rgbaMatch) {
    // 提取r, g, b和原始的alpha值
    const r = parseInt(rgbaMatch[1], 10);
    const g = parseInt(rgbaMatch[2], 10);
    const b = parseInt(rgbaMatch[3], 10);
    const originalAlpha = parseFloat(rgbaMatch[4]);

    // 构造新的rgba字符串
    const newRGBAString = `rgba(${r}, ${g}, ${b}, ${newAlpha})`;

    // 返回新的rgba字符串
    return newRGBAString;
  } else {
    // 如果不匹配，返回原始字符串或错误信息
    return rgbaString; // 或者 throw new Error('Invalid rgba string');
  }
}
