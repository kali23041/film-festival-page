<div align="center">

# Film Festival Page

**A FilmFreeway-style festival listing page, rebuilt with Next.js 15 and Tailwind CSS.**<br/>
One responsive page for a film festival: hero banner, tabs for About, Rules, Reviews and Photos, award categories, dates and deadlines, entry categories, organizers and more festivals.

<p>
  <img src="https://img.shields.io/badge/Next.js-15-48484d?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/React-18-48484d?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-48484d?style=for-the-badge&logo=typescript&logoColor=3178C6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-48484d?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8" alt="Tailwind CSS 3" />
  <img src="https://img.shields.io/badge/license-MIT-48484d?style=for-the-badge" alt="MIT License" />
</p>

<p>
  <a href="https://film-festival-page.vercel.app"><b>Live demo</b></a> ·
  <a href="#-features">Features</a> ·
  <a href="#-tech-stack">Tech stack</a> ·
  <a href="#-getting-started">Getting started</a> ·
  <a href="#-project-structure">Structure</a>
</p>

<sub>Designed and built by <b>Kartik Sabale</b></sub>

<!-- Screenshot: add docs/screenshots/page.png and reference it here -->

</div>

---

## About

Film festivals live on submission platforms, and their listing pages carry a lot of information: what the festival is, its rules and awards, deadlines, fees, reviews from filmmakers and where it takes place. This project is a front-end recreation of that kind of page for the (sample) **Mumba International Film Festival** at the National Film Archive of India, Pune.

> [!NOTE]
> This is a UI project. All festival details, reviews, dates, fees and logos are sample content, and buttons such as *Submit Now* are not wired to a backend. It is not affiliated with FilmFreeway.

## ✨ Features

- **Header and hero banner** with the festival collage, logo, title and a *Submit Now* call to action.
- **Tabbed content** (shadcn/ui Tabs): **About**, **Rules**, **Reviews** and **Photos**.
- **About:** festival description, social share buttons, contact details, organizers, venue with a map preview, and associated bodies.
- **Rules & awards:** jury and audience awards, cash prizes and the full list of award categories (best film, director, cinematography, documentary, actors, editing, animation short and more).
- **Reviews:** an overall rating with breakdowns (communication, organization, networking, programming), filmmaker reviews with *Helpful* buttons and festival responses.
- **Photos:** a gallery of festival photos.
- **Sidebar:** dates and deadlines (opening, regular, late, notification and event dates), entry categories (feature, short, documentary, animation, music video) and an *Other festivals you may like* list.
- **Responsive** layout with horizontally scrollable tabs on small screens.

## 🛠️ Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js 15 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS 3, tailwindcss-animate |
| Components | shadcn/ui on Radix UI, lucide-react icons, `next/image` |

## 🚀 Getting started

**Requirements:** Node.js 18.18+ and npm (or pnpm).

```bash
git clone https://github.com/kali23041/film-festival-page.git
cd film-festival-page
npm install
npm run dev
```

Open http://localhost:3000.

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run Next.js lint |

## 📁 Project structure

```
app/
├── layout.tsx       # Root layout
├── page.tsx         # The festival page
└── globals.css
components/ui/       # shadcn/ui components (Tabs, Button, Card…)
public/              # Festival collage, photos, avatars, logos, map preview
```

## 📄 License

Released under the [MIT License](LICENSE). Sample images and logos are placeholders.

## 📬 Contact

**Kartik Sabale** · [kartiksabale.com](https://kartiksabale.com) · [hello@kartiksabale.com](mailto:hello@kartiksabale.com)

---

<div align="center">

**Film Festival Page** · Created by **Kartik Sabale** · © 2026

</div>
