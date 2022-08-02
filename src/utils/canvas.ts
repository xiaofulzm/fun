export function initCanvas (canvas:HTMLCanvasElement, width = 200, height = 200, _dpi?:number) {
  const ctx = canvas.getContext('2d')!
  const dpr = window.devicePixelRatio || 1 // 当前设备的像素
  // @ts-expect-error
  // 兼容在不同设备下 显示canvasde 的像素比
  const bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1
  const dpi = _dpi || dpr / bsr
  console.log(dpi)
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  canvas.width = width
  canvas.height = height
  // canvas.width = dpi*width;
  // canvas.height = dpi*height;
  // ctx.scale(dpi,dpi);
  return { ctx, dpi }
}
