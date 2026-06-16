import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AppRoutes from '../app/AppRoutes'
import { InquiryProvider } from '../features/inquiry/InquiryContext'

export function renderWithApp(path = '/') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <InquiryProvider>
        <AppRoutes />
      </InquiryProvider>
    </MemoryRouter>,
  )
}
