export default function ProductGallery({ product }) {
  return (
    <div className="product-gallery">
      {product.images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`${product.name} view ${index + 1}`}
          loading={index === 0 ? 'eager' : 'lazy'}
          width="900"
          height="1000"
        />
      ))}
    </div>
  )
}
