# Testing Infrastructure Guide

## Overview

This project is ready for testing infrastructure setup using Vitest and React Testing Library. The testing dependencies are **not installed by default** to keep the initial bundle size small, but can be added easily.

## Installation

### 1. Install Testing Dependencies

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitest/ui
```

### 2. Create Configuration Files

Create `vitest.config.ts` in the project root:

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### 3. Create Test Setup File

Create `src/test/setup.ts`:

```typescript
import '@testing-library/jest-dom'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})
```

### 4. Update package.json Scripts

Add these scripts (modify package.json manually or ask your developer):

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

## Writing Tests

### Example: Button Component Test

See `src/components/ui/__tests__/Button.test.tsx.template` for a template.

Create `src/components/ui/__tests__/Button.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies variant styles', () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByText('Outline')
    expect(button).toHaveClass('border')
  })

  it('applies size prop', () => {
    render(<Button size="lg">Large</Button>)
    const button = screen.getByText('Large')
    expect(button).toHaveClass('h-11')
  })
})
```

### Example: Form Component Test

```tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '@/components/ContactForm'

describe('ContactForm', () => {
  it('validates required fields', async () => {
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: /send/i })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/required/i)).toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'Test message')
    
    const submitButton = screen.getByRole('button', { name: /send/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    })
  })
})
```

## Running Tests

```bash
# Run tests once
npm test

# Watch mode
npm test -- --watch

# UI mode (visual test runner)
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## Testing Best Practices

### 1. Test User Behavior, Not Implementation
```tsx
// ❌ Bad - Testing implementation details
expect(wrapper.find('div').length).toBe(3)

// ✅ Good - Testing user behavior
expect(screen.getByText('Submit')).toBeInTheDocument()
```

### 2. Use Accessible Queries
```tsx
// ✅ Best - Accessible to screen readers
screen.getByRole('button', { name: /submit/i })
screen.getByLabelText(/email/i)

// ⚠️ Okay - Less semantic
screen.getByText('Submit')

// ❌ Avoid - Implementation detail
screen.getByTestId('submit-button')
```

### 3. Avoid Testing Library Internals
```tsx
// ❌ Don't test shadcn/ui internals
import { Button } from '@/components/ui/button'
// Skip testing Button - it's a library component

// ✅ Test your custom components
import ItemCard from '@/components/scholarly/ItemCard'
// Test ItemCard logic and rendering
```

### 4. Mock External Dependencies
```tsx
import { vi } from 'vitest'

// Mock API calls
vi.mock('@/lib/api', () => ({
  submitCollaborationRequest: vi.fn().mockResolvedValue({ success: true })
}))

// Mock React Router
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => vi.fn(),
}))
```

## Test Coverage Goals

- **Critical paths**: 100% (Forms, authentication, payment)
- **UI Components**: 80%+ (Custom components only)
- **Utilities**: 90%+ (Business logic functions)
- **Pages**: 60%+ (Route components)

## Recommended Test Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── __tests__/
│   │   │   └── button.test.tsx
│   │   └── button.tsx
│   ├── scholarly/
│   │   ├── __tests__/
│   │   │   ├── ItemCard.test.tsx
│   │   │   └── CiteDialog.test.tsx
│   │   ├── ItemCard.tsx
│   │   └── CiteDialog.tsx
├── lib/
│   ├── __tests__/
│   │   └── api.test.ts
│   └── api.ts
└── test/
    ├── setup.ts
    └── helpers.tsx (custom render functions)
```

## CI/CD Integration

Add to `.github/workflows/test.yml`:

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test -- --run
      - run: npm run test:coverage
```

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
