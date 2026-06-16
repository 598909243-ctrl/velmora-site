export default function ProductFilters({ categories, selected, onSelect }) {
  return (
    <div className="filters" aria-label="Filter products by category">
      {['All', ...categories].map((category) => (
        <button
          key={category}
          type="button"
          className={selected === category ? 'is-active' : ''}
          aria-pressed={selected === category}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
