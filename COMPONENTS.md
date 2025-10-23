# Component Library

## Core UI Components (shadcn/ui)

Located in `src/components/ui/`

### Button
**File**: `src/components/ui/button.tsx`

**Variants**:
- `default`: NHS Blue background
- `outline`: Transparent with border
- `outline-on-dark`: White outline for dark backgrounds
- `ghost`: No background, hover state only
- `destructive`: Red for dangerous actions
- `link`: Text button style

**Sizes**: `default`, `sm`, `lg`, `icon`

**Usage**:
```tsx
import { Button } from '@/components/ui/button';

<Button variant="default" size="lg">
  Click Me
</Button>
```

### Card
**File**: `src/components/ui/card.tsx`

**Sub-components**: `CardHeader`, `CardContent`, `CardFooter`, `CardTitle`, `CardDescription`

**Usage**:
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

## Academic Components (NextDoc Labs Specific)

Located in `src/components/scholarly/`

### ItemCard
**File**: `src/components/scholarly/ItemCard.tsx`

Displays academic publications with metadata, metrics, and actions.

**Props**:
```typescript
interface ItemCardProps {
  item: Item; // From src/types/scholarly.ts
}
```

**Features**:
- Type badge (article, white paper, protocol, etc.)
- Peer review status indicator
- Author list with affiliations
- Publication date
- Meta pills (DOI, Open Access, Open Data)
- Abstract preview (3 lines)
- Metrics (views, downloads, citations)
- Action buttons (View, Cite)

**Usage**:
```tsx
import ItemCard from '@/components/scholarly/ItemCard';
import { Item } from '@/types/scholarly';

const item: Item = { /* ... */ };

<ItemCard item={item} />
```

### StatusBadge
**File**: `src/components/scholarly/StatusBadge.tsx`

Displays peer review status with color coding.

**Statuses**:
- `preprint`: Yellow badge
- `under-review`: Blue badge
- `peer-reviewed`: Green badge

**Usage**:
```tsx
import StatusBadge from '@/components/scholarly/StatusBadge';

<StatusBadge status="peer-reviewed" />
```

### TypeTabs
**File**: `src/components/scholarly/TypeTabs.tsx`

Filter publications by type.

**Props**:
```typescript
interface TypeTabsProps {
  activeType: ContentType | 'all';
  onTypeChange: (type: ContentType | 'all') => void;
  availableTypes: ContentType[];
}
```

**Usage**:
```tsx
import TypeTabs from '@/components/scholarly/TypeTabs';

<TypeTabs
  activeType={activeType}
  onTypeChange={setActiveType}
  availableTypes={['article', 'white-paper', 'protocol']}
/>
```

### CiteDialog
**File**: `src/components/scholarly/CiteDialog.tsx`

Modal showing citation formats (Harvard, Vancouver, BibTeX).

**Props**:
```typescript
interface CiteDialogProps {
  citation?: {
    harvard: string;
    vancouver: string;
    bibtex?: string;
  };
  trigger?: React.ReactNode;
}
```

**Usage**:
```tsx
import CiteDialog from '@/components/scholarly/CiteDialog';

<CiteDialog citation={item.citation} />
```

## Layout Components

### Layout
**File**: `src/components/Layout.tsx`

Page wrapper with Header, Footer, and SEO.

**Props**:
```typescript
interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
}
```

**Usage**:
```tsx
import Layout from '@/components/Layout';

<Layout 
  title="NextDoc Labs — Research Publications"
  description="Browse our research"
  canonical="https://nextdoclabs.com/publications"
>
  <YourPageContent />
</Layout>
```

### Header
**File**: `src/components/Header.tsx`

Navigation bar with mobile menu.

### Footer
**File**: `src/components/Footer.tsx`

Site footer with links and legal info.

## Form Components

### ContactForm
**File**: `src/components/ContactForm.tsx`

Simple contact form that opens default email client.

**Props**:
```typescript
interface ContactFormProps {
  subject?: string;
}
```

### FormCollaborate
**File**: `src/components/FormCollaborate.tsx`

Collaboration request form with API integration.

## Design System Tokens

See `tailwind.config.ts` for complete configuration.

### Colors
- `primary`: NHS Blue (#003087)
- `cyan`: Accent (#06B6D4)
- `nx-teal`: Secondary accent (#0891B2)

### Spacing (8pt grid)
- `4px`: Micro spacing
- `8px`: Tight spacing
- `16px`: Base spacing
- `24px`: Medium spacing
- `32px`: Large spacing
- `48px`: XL spacing
- `64px`: XXL spacing
- `96px`: Section spacing
- `128px`: Hero spacing
