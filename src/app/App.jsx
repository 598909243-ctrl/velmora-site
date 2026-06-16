import { BrowserRouter } from 'react-router-dom'
import { InquiryProvider } from '../features/inquiry/InquiryContext'
import AppRoutes from './AppRoutes'

export default function App() {
  return (
    <BrowserRouter>
      <InquiryProvider>
        <AppRoutes />
      </InquiryProvider>
    </BrowserRouter>
  )
}
