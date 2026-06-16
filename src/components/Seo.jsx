import { useEffect } from 'react'

const upsertMeta = (selector, attribute, value) => {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    const [key, name] = selector.match(/\[(.+?)="(.+?)"\]/).slice(1)
    element.setAttribute(key, name)
    document.head.appendChild(element)
  }
  element.setAttribute(attribute, value)
}

export default function Seo({ title, description, schema }) {
  useEffect(() => {
    document.title = `${title} | VELMORA`
    upsertMeta('meta[name="description"]', 'content', description)
    upsertMeta('meta[property="og:title"]', 'content', `${title} | VELMORA`)
    upsertMeta('meta[property="og:description"]', 'content', description)
    if (schema) {
      let script = document.querySelector('#structured-data')
      if (!script) {
        script = document.createElement('script')
        script.id = 'structured-data'
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(schema)
    }
  }, [title, description, schema])
  return null
}
