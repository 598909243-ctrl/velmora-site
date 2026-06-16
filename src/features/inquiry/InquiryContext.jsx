import { createContext, useContext, useMemo, useState } from 'react'

const InquiryContext = createContext(null)

export function InquiryProvider({ children }) {
  const [source, setSource] = useState({})
  const value = useMemo(() => ({ source, setSource }), [source])
  return <InquiryContext.Provider value={value}>{children}</InquiryContext.Provider>
}

export function useInquiry() {
  const value = useContext(InquiryContext)
  if (!value) throw new Error('useInquiry must be used within InquiryProvider')
  return value
}
