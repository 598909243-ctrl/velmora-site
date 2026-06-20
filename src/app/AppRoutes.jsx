import { Route, Routes } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import SiteFooter from '../components/layout/SiteFooter'
import SiteHeader from '../components/layout/SiteHeader'
import WhatsAppButton from '../components/layout/WhatsAppButton'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import CustomPage from '../pages/CustomPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import ProductsPage from '../pages/ProductsPage'
import TermsPage from '../pages/TermsPage'

export default function AppRoutes() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/custom" element={<CustomPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
