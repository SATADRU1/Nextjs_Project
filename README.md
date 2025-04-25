# Birthday Wishes App

A cross-platform application built with Next.js and Capacitor that shows special birthday wishes for first-time visitors.

## Features

- Cross-platform compatibility (Web, Android, iOS)
- First-time user birthday cake animation with personalized greeting
- Local storage to track first-time visits
- Responsive design optimized for all devices
- Dark/light mode support

## Technologies Used

- Next.js 13.5 (React)
- Capacitor 5.5+
- Tailwind CSS
- Framer Motion for animations
- React Confetti for celebratory effects
- shadcn/ui components

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- For Android: Android Studio
- For iOS: Xcode (macOS only)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

### Building for Mobile

1. Build the Next.js project:

```bash
npm run build
```

2. Initialize Capacitor (first time only):

```bash
npm run cap-init
```

3. Add platforms:

```bash
# For Android
npm run cap-add-android

# For iOS
npm run cap-add-ios
```

4. Sync your web code to your native projects:

```bash
npm run cap-sync
```

5. Open in IDE:

```bash
# For Android
npm run cap-open-android

# For iOS
npm run cap-open-ios
```

## Project Structure

- `/app` - Next.js pages and layout
- `/components` - React components
- `/lib` - Utility functions and hooks
- `/public` - Static assets

## License

This project is licensed under the MIT License.