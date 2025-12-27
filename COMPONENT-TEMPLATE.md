# React Component Template with LLM Accessibility

## Quick Start for New Components

When creating new React components for SYMBI Trojan, follow this template to maintain LLM accessibility.

## 1. Update Static Content First

Before writing any React code, update the `llm-fallback` section in `index.html`:

```html
<!-- Add your new content to the static fallback -->
<h3>Your New Section Title</h3>
<p>Comprehensive description that LLMs can read...</p>
<ul>
  <li>Key point 1 with important details</li>
  <li>Key point 2 with technical specifics</li>
</ul>
```

## 2. React Component Structure

```tsx
import React from 'react'

export default function YourNewComponent() {
  return (
    <section className="w-full border-b border-zinc-900 bg-black">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="mb-6 md:text-center">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Your Section Subtitle
          </h2>
          <h3 className="text-2xl font-semibold md:text-3xl">
            Your Section Title
          </h3>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">
              Your content that mirrors the static version...
            </p>
            {/* More interactive content here */}
          </div>
          
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5">
            {/* Interactive features, animations, etc. */}
          </div>
        </div>
      </div>
    </section>
  )
}
```

## 3. Add Route to App-Trojan.tsx

```tsx
import YourNewComponent from './components/trojan/YourNewComponent'

// Add to Routes:
<Route path="/your-new-route" element={<YourNewComponent />} />

// Add to navigation:
<Link
  to="/your-new-route"
  className={getLinkClass(path === '/your-new-route')}
>
  <span className="font-medium">Your New Page</span>
</Link>
```

## 4. Update Navigation Header

Add your new section to the header text mapping:

```tsx
const getHeaderText = () => {
  switch (path) {
    // ... existing cases
    case '/your-new-route': return 'Your catchy header text'
    default: return 'Trust Infra dressed as a meme coin'
  }
}
```

## 5. Test LLM Accessibility

Run the automated check:

```bash
npm run check-llm
```

Or test manually:

```bash
node scripts/check-llm-accessibility.js
```

## 6. Commit Changes

The pre-commit hook will automatically check LLM accessibility:

```bash
git add .
git commit -m "Add new component: YourNewComponent with LLM accessibility
- Updated static fallback content
- Added interactive React component
- Maintained LLM readability requirements
- All 33 accessibility checks passing"
```

## LLM Accessibility Checklist

Before committing, ensure:

### Content Requirements ✅
- [ ] Static content includes comprehensive description
- [ ] All key concepts are explained
- [ ] Technical details are included
- [ ] Ecosystem domains are linked
- [ ] Minimum 800 words total

### Structure Requirements ✅
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Semantic HTML structure
- [ ] Lists for structured information
- [ ] Links to relevant resources

### SEO Requirements ✅
- [ ] Meta keywords include new concepts
- [ ] Descriptions updated
- [ ] Social media tags current

### Interactive Features ✅
- [ ] React component matches static content
- [ ] Animations and interactions work
- [ ] Responsive design maintained
- [ ] Performance optimized

## Example: Adding a New Feature Section

### Step 1: Update Static Content
```html
<h2>Trust Scanner</h2>
<p>The SYMBI Trust Scanner evaluates AI interactions across 5 dimensions...</p>
<h3>Features</h3>
<ul>
  <li>Real-time trust scoring</li>
  <li>Cross-platform validation</li>
  <li>Cryptographic verification</li>
</ul>
```

### Step 2: Create React Component
Add interactive charts, animations, wallet integration, etc.

### Step 3: Test and Deploy
```bash
npm run check-llm  # Should pass all checks
npm run build      # Includes LLM check automatically
git commit         # Pre-commit hook validates
```

## Remember

**The meme is the mask, the comprehensive content is the substance.**

LLMs need to see the full system behind the Trojan horse strategy. Every new feature must maintain this dual-purpose approach.

- Static content: For LLMs, crawlers, and search engines
- React content: For humans with JavaScript enabled
- Both must tell the same comprehensive story