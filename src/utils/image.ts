/**
 * iOS Safari で扱える canvas の最大面積（4096×4096 ピクセル）。
 * これを超えると描画結果が真っ白になるため、超えないように縮小率を決める。
 */
const MAX_CANVAS_AREA = 4096 * 4096

/** ファイル名に使えない文字 */
const INVALID_FILE_NAME_CHARS = /[\\/:*?"<>|]/g

/**
 * html2canvas を先読みする。
 * 画像出力のタップ時にチャンクの取得待ちが発生しないよう、
 * 結果モーダルを開いた時点で呼び出しておく。
 */
export const preloadHtml2canvas = () => {
  import('html2canvas').catch(() => {
    // 先読みの失敗は無視する（実際の出力時に改めて読み込む）
  })
}

/**
 * 要素を canvas に描画する
 */
export const renderToCanvas = async (node: HTMLElement): Promise<HTMLCanvasElement> => {
  const { default: html2canvas } = await import('html2canvas')
  const { width, height } = node.getBoundingClientRect()
  const area = width * height
  const maxScale = area > 0 ? Math.sqrt(MAX_CANVAS_AREA / area) : Infinity
  const scale = Math.min(window.devicePixelRatio || 1, maxScale)
  return html2canvas(node, { scale })
}

/**
 * canvas を PNG の File に変換する
 */
export const canvasToPngFile = (canvas: HTMLCanvasElement, fileName: string): Promise<File> =>
  new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) {
        resolve(new File([blob], fileName, { type: 'image/png' }))
      } else {
        reject(new Error('画像の生成に失敗しました。'))
      }
    }, 'image/png')
  })

/**
 * ファイル名に使えない文字を置き換える
 */
export const toSafeFileName = (name: string) => name.replace(INVALID_FILE_NAME_CHARS, '-')

/**
 * a[download] でファイルをダウンロードさせる
 */
export const downloadUrl = (url: string, fileName: string) => {
  const link = document.createElement('a')
  link.download = fileName
  link.href = url
  link.click()
}

/**
 * Web Share API でファイルを共有できるか
 */
export const canShareFile = (file: File): boolean =>
  typeof navigator.share === 'function' &&
  typeof navigator.canShare === 'function' &&
  navigator.canShare({ files: [file] })
