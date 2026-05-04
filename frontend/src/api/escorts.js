const BASE = '/api'

async function request(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return res.json()
}

export function fetchEscorts(params = {}) {
  const q = new URLSearchParams(
    Object.fromEntries(Object.entries(params).filter(([, v]) => v))
  ).toString()
  return request(`${BASE}/escorts.php${q ? `?${q}` : ''}`)
}

export function fetchEscort(id) {
  return request(`${BASE}/escort.php?id=${id}`)
}
