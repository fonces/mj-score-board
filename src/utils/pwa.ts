export type Platform = 'ios' | 'android' | 'other'

const DISMISS_KEY = 'install-guide-dismissed'

export const isStandalone = (): boolean => {
  if (window.matchMedia('(display-mode: standalone)').matches) return true
  if ((navigator as Navigator & { standalone?: boolean }).standalone) return true
  return false
}

export const getPlatform = (): Platform => {
  const ua = navigator.userAgent
  const isIPad = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1
  if (/iPad|iPhone|iPod/.test(ua) || isIPad) return 'ios'
  if (/Android/.test(ua)) return 'android'
  return 'other'
}

export const isInstallGuideDismissed = (): boolean =>
  localStorage.getItem(DISMISS_KEY) === '1'

export const dismissInstallGuide = () => {
  localStorage.setItem(DISMISS_KEY, '1')
}

/**
 * 初回起動時にホーム画面追加ガイドを表示すべきか判定する。
 * - iOS / Android のモバイル端末
 * - すでに standalone（ホーム画面から起動）でない
 * - 過去に dismiss していない
 */
export const shouldShowInstallGuide = (): boolean => {
  if (isStandalone()) return false
  if (isInstallGuideDismissed()) return false
  const platform = getPlatform()
  return platform === 'ios' || platform === 'android'
}
