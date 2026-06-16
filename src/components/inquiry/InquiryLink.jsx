import { useNavigate } from 'react-router-dom'
import { useInquiry } from '../../features/inquiry/InquiryContext'

export default function InquiryLink({ intent, product, children, className = 'button' }) {
  const navigate = useNavigate()
  const { setSource } = useInquiry()
  return (
    <button
      className={className}
      type="button"
      onClick={() => {
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
    </button>
  )
}
