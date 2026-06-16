import { useNavigate } from 'react-router-dom'
import { useInquiry } from '../../features/inquiry/InquiryContext'

export default function InquiryLink({ intent, product, children, className = 'button' }) {
  const navigate = useNavigate()
  const { setSource } = useInquiry()
  return (
    <a
      className={className}
      href="/contact"
      onClick={(event) => {
        event.preventDefault()
        setSource({
          intent,
          productSlug: product?.slug || '',
          productName: product?.name || '',
          category: product?.category || '',
        })
        navigate('/contact')
      }}
    >
      {children}
    </a>
  )
}
