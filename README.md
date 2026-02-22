# Prachiti Bhansali - CA Portfolio Website

A modern, premium personal portfolio website for a Chartered Accountant (CA) and finance professional in India. Built with Next.js 14+, Tailwind CSS, and Framer Motion.

## Features

- **Modern 2026 Design**: Glassmorphism cards, subtle grain texture, smooth scroll animations
- **Dark Mode First**: Deep navy (#0A0F1E) background with electric indigo (#6366F1) and gold (#F59E0B) accents
- **Responsive**: Mobile, tablet, and desktop layouts
- **SEO Ready**: Proper meta tags, Open Graph, and Twitter cards
- **Animations**: Page load reveals, scroll-triggered animations, hover effects, number counters
- **Components**: All sections built as separate, reusable components

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (body) + Playfair Display (headings)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ca-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles and custom properties
│   ├── layout.tsx        # Root layout with fonts and metadata
│   └── page.tsx          # Main page assembling all components
├── components/
│   ├── Navbar.tsx        # Navigation with mobile menu
│   ├── Hero.tsx          # Hero section with animations
│   ├── About.tsx         # About section with stats counter
│   ├── Services.tsx      # Bento grid services section
│   ├── WhyMe.tsx         # USP/differentiators section
│   ├── Work.tsx          # Case studies section
│   ├── Testimonials.tsx  # Marquee testimonials
│   ├── Certifications.tsx # Tools and certifications
│   ├── Blog.tsx          # Blog preview cards
│   ├── Contact.tsx       # Contact form and info
│   ├── Footer.tsx        # Minimal footer
│   └── FloatingButtons.tsx # WhatsApp & back-to-top buttons
└── lib/
    └── utils.ts          # Utility functions (cn helper)
```

## Customization

### Update Personal Information

Replace placeholder content in the following files:

- **Contact details**: Update in `src/components/Contact.tsx` (email, phone, social links)
- **WhatsApp link**: Update in `src/components/FloatingButtons.tsx`
- **Navigation**: Update links in `src/components/Navbar.tsx`

### Update Colors

Colors are defined in `src/app/globals.css`:
- Primary: `#6366F1` (indigo)
- Secondary: `#F59E0B` (gold)
- Background: `#0A0F1E` (navy)

### Add Your Photo

Replace the placeholder image in `src/components/About.tsx` with your actual profile photo.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Deploy with default settings

### Build for Production

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## SEO Configuration

Update metadata in `src/app/layout.tsx`:
- Title
- Description
- Keywords
- Open Graph images

## License

This project is for personal portfolio use.

## Credits

Built with Next.js, Tailwind CSS, and Framer Motion.
