export default function ImpactItem({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div>
      <div className="text-3xl font-bold text-[var(--green)]">
        {value}
      </div>
      <div className="text-green-900/60 text-sm">
        {label}
      </div>
    </div>
  )
}
