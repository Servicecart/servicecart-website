import { track } from '@vercel/analytics'

// Track page views
export const trackPageView = (sectionName: string) => {
  track('page_view', { section: sectionName })
}

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  track('button_click', { button: buttonName, location })
}

// Track navigation clicks
export const trackNavigation = (linkName: string) => {
  track('navigation', { link: linkName })
}

// Track contact interactions
export const trackContact = (method: string, value?: string) => {
  track('contact_interaction', { method, ...(value && { value }) })
}

// Track download button clicks
export const trackDownload = (platform: 'app_store' | 'google_play') => {
  track('download_click', { platform })
}

// Track social media clicks
export const trackSocial = (platform: string) => {
  track('social_click', { platform })
}

// Track FAQ interactions
export const trackFAQ = (action: 'open' | 'close', question: string) => {
  track('faq_interaction', { action, question })
}

// Track section visibility
export const trackSectionView = (sectionName: string) => {
  track('section_view', { section: sectionName })
}

