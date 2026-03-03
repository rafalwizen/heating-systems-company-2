# TwojSerwis

[![pl](https://img.shields.io/badge/lang-pl-blue.svg)](https://github.com/rafalwizen/heating-systems-company-2)

Profesjonalna strona internetowa dla firmy zajmującej się systemami grzewczymi.

## O projekcie

Strona internetowa firmy oferującej kompleksowe usługi z zakresu instalacji i serwisowania systemów grzewczych. Projekt zawiera sekcje: Hero, O nas, Usługi, Realizacje, Opinie klientów oraz formularz kontaktowy.

## Użyte technologie

- **Framework:** [Next.js 15](https://nextjs.org) - React framework z App Router
- **UI:** [React 18](https://react.dev)
- **Język:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Animacje:** [Framer Motion](https://www.framer.com/motion)
- **Formularze:** [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)
- **Komponenty UI:** [Radix UI](https://www.radix-ui.com)
- **Ikony:** [Lucide React](https://lucide.dev)
- **Email:** [Resend](https://resend.com)

## Struktura projektu

```
app/
├── api/           # API routes (wysyłanie emaili)
├── realizations/  # Podstrona z realizacjami
├── layout.tsx     # Główny layout
└── page.tsx       # Strona główna

components/
├── hero.tsx           # Sekcja Hero z wideo
├── about.tsx          # Sekcja O nas
├── services.tsx       # Sekcja Usługi
├── testimonials.tsx   # Sekcja Opinie
├── contact.tsx        # Formularz kontaktowy
├── gallery.tsx        # Galeria realizacji
├── navigation.tsx     # Nawigacja
└── ui/               # Współdzielone komponenty UI

public/
└── images/
    ├── hero_main.mp4          # Wideo w sekcji Hero
    ├── relizations_main.mp4  # Wideo w sekcji Realizacje
    └── realizations/          # Zdjęcia realizacji
```

## Rozpoczęcie pracy

Zainstaluj zależności:

```bash
npm install
```

Uruchom serwer deweloperski:

```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## Zmienne środowiskowe

Skopiuj plik `.env.example` do `.env.local` i uzupełnij:

```env
RESEND_API_KEY=twój_klucz_api_resend
```

## Kontakt

Jeśli chcesz się ze mną skontaktować, napisz na: [rafal.wizen@gmail.com](mailto:rafal.wizen@gmail.com)

## Licencja

Ten projekt jest licencjonowany na licencji MIT. Licencja nie dotyczy obrazów i wideo zawartych w projekcie.
