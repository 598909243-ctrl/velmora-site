export async function submitInquiry(payload) {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT
  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 350))
    return { ok: true, demo: true }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  return { ok: response.ok }
}
