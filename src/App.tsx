import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from './pages/Home'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import EqualOpportunityPolicy from './pages/EqualOpportunityPolicy'
import RefundAndCancellation from './pages/RefundAndCancellation'
import VulnerabilityDisclosure from './pages/VulnerabilityDisclosure'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal/equal-opportunity-policy" element={<EqualOpportunityPolicy />} />
        <Route path="/legal/refund-and-cancellation" element={<RefundAndCancellation />} />
        <Route path="/policy/vulnerability-disclosure" element={<VulnerabilityDisclosure />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

export default App


