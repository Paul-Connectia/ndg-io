# NextDoc Labs Research Platform

> The research arm of NextDoc Global Ltd., advancing evidence-based medical education and NHS workforce integration.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (use [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn

### Installation
```bash
git clone <YOUR_GIT_URL>
cd nextdoc-labs
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080)

## 🏗️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4 + shadcn/ui
- **Routing**: React Router DOM 6
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📁 Project Structure

```
nextdoc-labs/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui base components
│   │   ├── scholarly/     # Academic-specific components
│   │   └── ...            # Feature components
│   ├── pages/             # Route pages
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── types/             # TypeScript type definitions
│   ├── data/              # Static data (temporary)
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles + design tokens
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary**: NHS Blue `#003087` (HSL: 215 100% 27%)
- **Cyan**: `#06B6D4` (Accent)
- **Teal**: `#0891B2` (Secondary accent)

### Spacing System (8pt Grid)
All spacing uses multiples of 8px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

### Typography Scale
- Hero H1: 48px → 60px (desktop)
- Page H1: 36px → 48px
- Section H2: 30px → 36px
- Card H3: 20px → 24px
- Body: 16px → 18px

### Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px

## 🧪 Development

### Available Scripts
```bash
npm run dev          # Start dev server (http://localhost:8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Environment Variables
Create a `.env` file in the root directory (see `.env.example`):
```env
VITE_GA_ID=G-XXXXXXXXX
VITE_META_PIXEL_ID=XXXXXXXXXXXXX
VITE_API_URL=https://api.nextdoclabs.com
```

### Code Style
- Use TypeScript for all new files
- Follow React hooks best practices
- Use functional components (no class components)
- Prefer composition over inheritance
- Use shadcn/ui components for consistency

## 🚀 Deployment

### Via Lovable (Current)
1. Open [Lovable Project](https://lovable.dev/projects/03eb803c-7d13-4f8e-bd91-10ef07fd6d90)
2. Click Share → Publish
3. Configure custom domain if needed

### Via Vercel/Netlify
```bash
npm run build
# Deploy the `dist/` folder
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment options.

## 📚 Documentation

- [CONTRIBUTING.md](./CONTRIBUTING.md) - Development guidelines
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment strategies
- [COMPONENTS.md](./COMPONENTS.md) - Component library reference
- [CHANGELOG.md](./CHANGELOG.md) - Version history

## 📧 Contact

All inquiries: [labs@nextdocglobal.io](mailto:labs@nextdocglobal.io)

## 📄 License

© 2025 NextDoc Global Ltd. All rights reserved. See [LICENSE](./LICENSE) for details.
