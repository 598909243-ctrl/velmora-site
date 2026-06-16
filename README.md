# VELMORA Umbrella Site

English-first React demonstration site for umbrella retail, wholesale, and OEM/ODM inquiries.

## Run locally

```bash
npm install
npm run dev
npm test
npm run build
```

For GitHub Pages project-site deployment, this Vite app uses `base: '/velmora-site/'`.

## Environment

Copy `.env.example` to `.env` and set:

- `VITE_FORM_ENDPOINT`: optional JSON form receiver. Without it, the form uses a successful demo response.
- `VITE_CONTACT_EMAIL`: public contact email.
- `VITE_WHATSAPP_NUMBER`: public international number without punctuation.

No private API keys belong in client-side Vite environment variables.

## Before launch

- Verify the VELMORA trademark, domain, and social handles.
- Replace the concept logo, company story, and supplier evidence.
- Replace all demonstration product images, specifications, prices, MOQ, and lead times.
- Configure the real email, WhatsApp number, and form receiver.
- Add privacy, cookie, terms, and returns policies.
- Remove every demonstration notice and unsupported business claim.
