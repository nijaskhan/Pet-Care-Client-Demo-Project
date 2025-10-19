# React + Tailwind CSS Project (Create React App)

A modern React application built with Create React App and styled with Tailwind CSS.

## Features

- ⚛️ **React 18** - Latest React with hooks and modern patterns
- 🏗️ **Create React App** - Reliable build toolchain with Babel
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📱 **Responsive Design** - Mobile-first responsive design
- 🧪 **Testing** - Jest and React Testing Library included
- 🔧 **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 14 or higher recommended).

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App (one-way operation)

## Project Structure

```
├── public/                 # Static assets
│   ├── index.html         # HTML template
│   └── manifest.json      # PWA manifest
├── src/
│   ├── App.js             # Main App component
│   ├── App.css            # App-specific styles
│   ├── index.js           # Application entry point
│   └── index.css          # Global styles with Tailwind imports
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## Customization

### Tailwind CSS

The Tailwind configuration is in `tailwind.config.js`. You can customize:
- Colors, fonts, and spacing
- Breakpoints and container sizes
- Plugins and utilities

### Adding Components

Create new components in the `src/components/` directory and import them in your App component.

## Learn More

- [React Documentation](https://react.dev/)
- [Create React App Documentation](https://create-react-app.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## License

MIT