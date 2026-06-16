export default function SpecificationsTable({ specifications }) {
  return (
    <dl className="specifications">
      {Object.entries(specifications).map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  )
}
