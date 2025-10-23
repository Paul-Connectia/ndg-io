# Contributing to NextDoc Labs

## Development Workflow

1. **Fork & Clone**: Fork the repository and clone locally
2. **Branch**: Create a feature branch (`git checkout -b feature/your-feature`)
3. **Develop**: Make your changes following our code style
4. **Test**: Ensure all tests pass (when implemented)
5. **Commit**: Use conventional commits (`feat:`, `fix:`, `docs:`, etc.)
6. **Push**: Push to your fork and submit a pull request

## Code Standards

### TypeScript
- Always define types/interfaces for props and data structures
- Avoid `any` type - use `unknown` if necessary
- Enable strict mode in `tsconfig.json` (production readiness)

### React Components
- Use functional components with hooks
- Keep components small and focused (single responsibility)
- Extract complex logic to custom hooks
- Use `React.memo` for expensive components only

### Styling
- Use Tailwind CSS utility classes
- Follow the 8pt grid system for spacing
- Use design tokens from `tailwind.config.ts`
- Maintain WCAG AA accessibility standards

### File Naming
- Components: `PascalCase.tsx` (e.g., `ItemCard.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Types: `camelCase.ts` (e.g., `scholarly.ts`)
- Hooks: `use-kebab-case.ts` (e.g., `use-toast.ts`)

## Component Structure Template

```tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ComponentProps } from './types'; // if complex

interface MyComponentProps {
  title: string;
  onAction?: () => void;
  variant?: 'default' | 'secondary';
}

const MyComponent = ({ 
  title, 
  onAction, 
  variant = 'default' 
}: MyComponentProps) => {
  const [state, setState] = useState<boolean>(false);

  const handleAction = () => {
    setState(!state);
    onAction?.();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <Button variant={variant} onClick={handleAction}>
        Click Me
      </Button>
    </div>
  );
};

export default MyComponent;
```

## Accessibility Checklist

- [ ] Semantic HTML elements
- [ ] Proper heading hierarchy
- [ ] Alt text for images
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Focus indicators visible
- [ ] Color contrast ratios meet WCAG AA
- [ ] Touch targets ≥44px on mobile

## Git Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Examples**:
```
feat(articles): add filtering by specialty
fix(header): mobile menu not closing on route change
docs(readme): update installation instructions
```
