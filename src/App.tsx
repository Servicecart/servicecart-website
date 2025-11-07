import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import { lazy, Suspense } from 'react'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'

// Lazy load pages for better performance
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const EqualOpportunityPolicy = lazy(() => import('./pages/EqualOpportunityPolicy'))
const RefundAndCancellation = lazy(() => import('./pages/RefundAndCancellation'))
const VulnerabilityDisclosure = lazy(() => import('./pages/VulnerabilityDisclosure'))
const GrowWithServicecart = lazy(() => import('./pages/GrowWithServicecart'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* Scroll to top on route change */}
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grow-with-servicecart" element={<GrowWithServicecart />} />
            <Route path="/legal/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/equal-opportunity-policy" element={<EqualOpportunityPolicy />} />
            <Route path="/legal/refund-and-cancellation" element={<RefundAndCancellation />} />
            <Route path="/policy/vulnerability-disclosure" element={<VulnerabilityDisclosure />} />
            {/* Catch-all route for 404 pages */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Analytics />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App


