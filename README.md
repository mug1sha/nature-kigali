# Nature Kigali — Website

Official frontend for [Nature Kigali](https://naturekigali.com), a boutique garden hotel in Nyarutarama, Kigali, Rwanda.

Built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**.

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Project structure

```
nature-kigali/
├── app/
│   ├── layout.tsx        # Root layout and metadata
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles
├── public/
│   └── Nature kigali/    # Property photography
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Features

- Responsive landing page with desktop and mobile navigation
- Sections: Stay, Dining, Nature & Birding, Events, Gallery, Location
- Enquiry modal with arrival date, departure date and guest count
- WhatsApp booking handoff
- Restaurant menu PDF link
- Google Maps directions link
- Lightbox gallery
- Actual property photography served from local assets

---

## Tech stack

| Technology | Version |
|---|---|
| Next.js | 14.x |
| React | 18.x |
| TypeScript | 5.x |
| Tailwind CSS | 3.x |
| Lucide React | 0.468.x |

---

## Deployment

This project deploys as a standard Next.js application. Recommended platforms:

- **Vercel** — zero-config, optimal for Next.js
- **Netlify** — with the Next.js build plugin
- **Self-hosted** — `npm run build && npm run start`

---

## Important notes

- This is a **frontend-only** application. It does not check room availability, create reservations, store customer data, or process payments.
- The enquiry form opens WhatsApp with a pre-filled message. Availability is confirmed directly by the Nature Kigali team.
- Before going live, verify all business information (phone numbers, address, menu link, event details) with the property owner.
- A backend booking integration should only be connected after owner approval.

---

## License

Private. All rights reserved — Nature Kigali.
