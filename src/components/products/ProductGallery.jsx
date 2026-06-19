export default function ProductGallery({ product }) {
  const uniqueImages = [...new Set(product.images)]
  const [primaryImage, ...secondaryImages] = uniqueImages

  return (
    <div className="product-gallery" aria-label={`${product.name} product gallery`}>
      <div className="product-gallery-main">
        <img
          src={primaryImage}
          alt={`${product.name} view 1`}
          width="900"
          height="1000"
        />
      </div>
      {secondaryImages.length ? (
        <div className="product-gallery-thumbs" aria-label="Additional views">
          {secondaryImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${product.name} view ${index + 2}`}
              loading="lazy"
              width="260"
              height="320"
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
