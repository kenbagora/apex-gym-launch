

# Apex Iron Gym — Landing Page

## Design System
- **Background**: Deep charcoal (#1A1A1A, #111111)
- **Accent**: Electric Lime (#CCFF00) for buttons, borders, glows, highlights
- **Typography**: Bold, heavy sans-serif (Inter/system), uppercase headings
- **Mode**: Dark only, high-contrast sections

## Sections

### 1. Hero Section
- Full-viewport hero with massive "TRANSFORM YOUR LIMITS" heading
- Subtle lime glow text shadow on the heading
- "Book Free Trial" CTA button with lime background, pulsing glow animation
- Dark overlay background (placeholder for future gym image)

### 2. Animated Stats Bar
- Three columns: "24/7 Access", "Pro Trainers", "Modern Equipment"
- Each with a Lucide icon (Clock, Users, Dumbbell)
- Fade-in animation on scroll using Intersection Observer

### 3. Interactive Membership Cards
- Three tiers: Basic ($29/mo), Pro ($59/mo), Elite ($99/mo)
- Feature lists per tier
- Hover effect: lime green border glow + slight scale-up
- "Pro" card highlighted as most popular

### 4. Trainer Section
- 3-column grid with placeholder avatar images
- Names and specialties: Powerlifting, Yoga, HIIT
- Subtle lime accent on specialty badges

### 5. Lead Capture Form
- Fields: Name, Phone, Fitness Goal (dropdown: Weight Loss, Muscle Gain, General Fitness, Flexibility)
- Lime "Get Started" submit button
- Toast confirmation on submit

### 6. Floating WhatsApp Button
- Fixed bottom-right floating green WhatsApp icon
- "Chat with us" tooltip on hover
- Links to `https://wa.me/` placeholder number

## Technical Notes
- Single-page, no backend needed — form stores nothing (just shows toast)
- All animations via Tailwind + custom keyframes
- Fully responsive (mobile-first)

