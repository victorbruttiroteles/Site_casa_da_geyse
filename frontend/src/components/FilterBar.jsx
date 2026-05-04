const FILTERS = [
  { value: '',         label: 'Mulheres' },
  { value: 'novatas',  label: 'Novatas' },
]

export default function FilterBar({ active, onChange, sortBy, onSortChange }) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-[60px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 gap-4 overflow-x-auto">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {FILTERS.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => onChange(value)}
                className={`px-5 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap border transition-all duration-150 ${
                  active === value
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-sm text-gray-500 bg-white border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:border-primary cursor-pointer flex-shrink-0"
          >
            <option value="newest">Mais recentes</option>
            <option value="views">Mais vistas</option>
          </select>
        </div>
      </div>
    </div>
  )
}
