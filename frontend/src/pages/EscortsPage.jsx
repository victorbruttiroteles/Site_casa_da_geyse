import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import FilterBar from '../components/FilterBar'
import EscortListing from '../components/EscortListing'
import Footer from '../components/Footer'

export default function EscortsPage() {
  const [searchParams]          = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') ?? '')
  const [sortBy,   setSortBy]   = useState(searchParams.get('sort')     ?? 'newest')

  const city         = searchParams.get('city')         ?? ''
  const neighborhood = searchParams.get('neighborhood') ?? ''

  const listingParams = {
    category,
    sort: sortBy,
    ...(city         && { city }),
    ...(neighborhood && { neighborhood }),
    state: 'SC',
  }

  const locationLabel = neighborhood
    ? `${city} — ${neighborhood}`
    : city || null

  return (
    <>
      <Header />
      <main>
        <div className="bg-navy-800 py-8 border-b border-navy-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-tag mb-1">Santa Catarina</p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {locationLabel ? `Acompanhantes em ${locationLabel}` : 'Todas as Acompanhantes'}
            </h1>
          </div>
        </div>

        <FilterBar
          active={category}
          onChange={setCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <EscortListing params={listingParams} showTitle={false} />
      </main>
      <Footer />
    </>
  )
}
