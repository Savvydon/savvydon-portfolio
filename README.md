# Savvydon Portfolio

A stunning, modern portfolio website built with **React**, **React Bootstrap**, and **Framer Motion** animations.

## 🚀 Features

- **Dark, modern aesthetic** with animated gradient orbs
- **Smooth scroll animations** with Framer Motion
- **Animated typing effect** in the hero section
- **Skill progress bars** with scroll-triggered animations
- **Project filtering** by category (All, Web Apps, Tools, Systems)
- **GitHub stats** with count-up animations
- **Fully responsive** for mobile, tablet, and desktop
- **Contact form** with submission feedback

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| React Bootstrap | UI Components & Grid System |
| Framer Motion | Animations & Scroll Reveals |
| React Icons | Icon Library |
| React Typed | Typing Animation |
| React CountUp | Number Animations |

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Savvydon/savvydon-portfolio.git
cd savvydon-portfolio

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📁 Project Structure

```
savvydon-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BackgroundEffects.js
│   │   ├── NavbarComponent.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Stats.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── styles/
│   │   └── custom.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Customization

### Update Personal Info
Edit the components to add your real:
- Email address
- LinkedIn profile
- Twitter handle
- Personal photo (replace the avatar placeholder in `About.js`)

### Add More Projects
Edit `src/components/Projects.js` and add to the `projectsData` array:

```javascript
{
  id: 8,
  title: 'Your New Project',
  description: 'Project description...',
  tags: ['React', 'Node.js'],
  category: 'web', // 'web', 'tool', or 'system'
  icon: <FaYourIcon />,
  github: 'https://github.com/Savvydon/your-repo',
  live: 'https://your-live-url.com', // or null
  stats: { type: 'Live', status: 'Active' }
}
```

### Change Colors
Edit CSS variables in `src/styles/custom.css`:

```css
:root {
  --accent: #6366f1;        /* Primary accent color */
  --accent-light: #818cf8;  /* Light accent */
  --bg-primary: #0a0a0f;    /* Background */
  --bg-card: #1a1a2e;       /* Card background */
}
```

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the `build` folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm install -g gh-pages
# Add to package.json scripts:
// "homepage": "https://savvydon.github.io/savvydon-portfolio",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build"
npm run deploy
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ by **Savvydon**
