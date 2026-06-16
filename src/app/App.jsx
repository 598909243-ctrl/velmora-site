import { HashRouter } from 'react-router-dom'
import { InquiryProvider } from '../features/inquiry/InquiryContext'
import AppRoutes from './AppRoutes'

export default function App() {
  return (
    <HashRouter>
      <InquiryProvider>
        <AppRoutes />
      </InquiryProvider>
    </HashRouter>
  )
}
