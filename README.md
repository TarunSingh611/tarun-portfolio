# 🚀 Tarun Singh - Full Stack Developer Portfolio

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/TarunSingh611/tarun-portfolio?style=for-the-badge&logo=github&color=yellow)
![GitHub forks](https://img.shields.io/github/forks/TarunSingh611/tarun-portfolio?style=for-the-badge&logo=github&color=blue)
![GitHub issues](https://img.shields.io/github/issues/TarunSingh611/tarun-portfolio?style=for-the-badge&logo=github&color=red)
![GitHub pull requests](https://img.shields.io/github/issues-pr/TarunSingh611/tarun-portfolio?style=for-the-badge&logo=github&color=green)
![GitHub license](https://img.shields.io/github/license/TarunSingh611/tarun-portfolio?style=for-the-badge&logo=github&color=orange)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Portfolio-00D4AA?style=for-the-badge&logo=vercel&logoColor=white)](https://tarunsinghrajput.netlify.app)
[![Documentation](https://img.shields.io/badge/Documentation-README-007ACC?style=for-the-badge&logo=read-the-docs&logoColor=white)](#)
[![Contributing](https://img.shields.io/badge/Contributing-Welcome-6A4C93?style=for-the-badge&logo=github&logoColor=white)](#contributing)

</div>

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.4.0-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-14.2.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)

</div>

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=TarunSingh611&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=58A6FF&text_color=C9D1D9&icon_color=58A6FF&hide=contribs,issues)
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=TarunSingh611&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=58A6FF&text_color=C9D1D9)
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=TarunSingh611&theme=radical&hide_border=true&background=0D1117&stroke=58A6FF&ring=58A6FF&fire=58A6FF&currStreakNum=C9D1D9&sideNums=C9D1D9&currStreakLabel=C9D1D9&sideLabels=C9D1D9&dates=C9D1D9)

</div>

<div align="center">

![Profile Views](https://komarev.com/ghpvc/?username=TarunSingh611&style=for-the-badge&color=58A6FF)
![Repository Views](https://img.shields.io/badge/Repository%20Views-1k+-00D4AA?style=for-the-badge&logo=github&logoColor=white)

</div>

---

## 📋 **Project Overview**

A modern, interactive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with cutting-edge technologies and featuring gamification elements, 3D backgrounds, and responsive design.

### 🌟 **Key Features**

- **📱 Responsive Design** - Optimized for all devices and screen sizes
- **⚡ Performance Optimized** - Next.js 16 with App Router and React 19
- **🎯 Interactive Elements** - Smooth animations with Framer Motion
- **📄 Dynamic CV Generation** - Real-time PDF generation with portfolio data
- **🔗 Contact Integration** - Functional contact form with email notifications
- **🌙 Dark/Light Theme** - Adaptive theme system

---

## 🛠️ **Technology Stack**

| Category | Technologies |
|----------|-------------|
| **Frontend Framework** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS, CSS Modules |
| **State Management** | React Context, Custom Hooks |
| **Form Handling** | React Hook Form, Validation |
| **PDF Generation** | jsPDF, html2canvas |
| **Email Service** | Nodemailer, API Routes |
| **Deployment** | Vercel, Netlify |
| **Development** | ESLint, Prettier, Git |

---

## 🚀 **Quick Start**

### Prerequisites

- Node.js 24 (Active LTS, required)
- npm 10+ (or yarn)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/TarunSingh611/tarun-portfolio.git

# Navigate to project directory
cd tarun-portfolio

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587

# Portfolio Data URL (optional)
# Portfolio data is now loaded from local JSON file: public/assests/portfolio.json
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev

# Open http://localhost:3000 in your browser
```

### Build & Deploy

```bash
# Build for production
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start

# Deploy to Vercel
vercel --prod
```

---

## 📁 **Project Structure**

```
tarun-portfolio/
├── 📁 public/
│   ├── 📁 images/
│   │   ├── 📁 profile/          # Profile images
│   │   └── 📁 projects/         # Project screenshots
│   └── 📁 assests/
│       └── portfolio.json       # Portfolio data
├── 📁 src/
│   ├── 📁 app/                  # Next.js App Router
│   │   ├── 📁 api/              # API routes
│   │   ├── 📁 fonts/            # Custom fonts
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.jsx             # Home page
│   ├── 📁 components/           # React components
│   │   ├── 3DBackground.jsx     # Three.js background
│   │   ├── About.jsx            # About section
│   │   ├── ContactForm.jsx      # Contact form
│   │   ├── Hero.jsx             # Hero section
│   │   ├── Navbar.jsx           # Navigation
│   │   ├── Projects.jsx         # Projects showcase
│   │   ├── Skills.jsx           # Skills section
│   │   └── Timeline.jsx         # Experience timeline
│   ├── 📁 framework/            # Backend utilities
│   │   └── nodeMail.js          # Email service
│   └── 📁 lib/                  # Utility functions
│       ├── cvGenerator.js       # PDF generation
│       └── utils.js             # Helper functions
├── package.json                 # Dependencies
├── tailwind.config.ts          # Tailwind configuration
├── next.config.mjs             # Next.js configuration
└── README.md                   # Project documentation
```



## 🎨 **Design Features**

### **3D Background System**
- Interactive mouse tracking
- Performance-optimized rendering
- Responsive canvas sizing

### **Animation System**
- Framer Motion integration
- Smooth page transitions
- Staggered element animations
- Parallax scrolling effects
- Micro-interactions

### **Responsive Design**
- Mobile-first approach
- Adaptive layouts
- Touch-friendly interactions
- Optimized for all screen sizes
- Progressive enhancement

---

## 📧 **Contact Integration**

The portfolio includes a fully functional contact system:

### **Features**
- Real-time form validation
- Email notifications
- Spam protection
- Success/error feedback
- Mobile-optimized interface

### **Email Service**
- Nodemailer integration
- Gmail SMTP support
- HTML email templates
- File attachment support
- Rate limiting

---

## 🚀 **Deployment**

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### **Netlify**
```bash
# Build the project
npm run build

# Deploy to Netlify
# Connect your GitHub repository to Netlify
# Set build command: npm run build
# Set publish directory: .next
```

### **Environment Setup**
- Configure email service credentials
- Set up portfolio data URL
- Configure custom domain (optional)
- Enable analytics (optional)

---

## 🔧 **Configuration**

### **Portfolio Data**
The portfolio data is loaded from a JSON file that can be customized:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your-email@example.com",
    "website": "https://your-website.com"
  },
  "aboutMe": {
    "summary": "Your professional summary",
    "professionalSummary": ["Point 1", "Point 2"]
  },
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "techStack": ["Tech1", "Tech2"],
      "image": "/images/projects/project.png",
      "link": "https://project-url.com"
    }
  ]
}
```

### **Customization**
- Update `public/assests/portfolio.json` with your data
- Modify component styles in `src/components/`
- Customize animations in Framer Motion
- Adjust 3D background parameters

### **Data Updates & Caching Strategy**
- **API Data - No Caching**: All API endpoints have zero caching to ensure fresh data
- **Static Assets - 1 Hour Cache**: Images and fonts are cached for 1 hour for performance
- **Instant Updates**: Changes to `portfolio.json` will reflect immediately on the site
- **Cache Busting**: Timestamp parameters are added to prevent browser caching
- **Service Worker Removed**: No service worker interference with data updates
- **Comprehensive Headers**: Multiple cache control headers ensure no caching for API data

For detailed caching strategy, see [CACHING_STRATEGY.md](./CACHING_STRATEGY.md)

---

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

### **Fork & Clone**
```bash
# Fork the repository
# Clone your fork
git clone https://github.com/your-username/tarun-portfolio.git
cd tarun-portfolio

# Add upstream remote
git remote add upstream https://github.com/TarunSingh611/tarun-portfolio.git
```

### **Development Workflow**
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: add your feature description"

# Push to your fork
git push origin feature/your-feature-name

# Create Pull Request
```

### **Guidelines**
- Follow the existing code style
- Add tests for new features
- Update documentation
- Ensure responsive design
- Test on multiple devices
- Follow semantic commit messages

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🗺️ **Roadmap**

### **Phase 1 - Core Features** ✅
- [x] Responsive portfolio design
- [x] 3D background system
- [x] Gamification elements
- [x] Contact form integration
- [x] CV generation

### **Phase 2 - Enhancements** 🚧
- [ ] Blog integration
- [ ] Portfolio analytics
- [ ] Multi-language support
- [ ] Advanced animations
- [ ] SEO optimization

### **Phase 3 - Advanced Features** 📋
- [ ] Real-time collaboration
- [ ] Portfolio themes
- [ ] Advanced 3D scenes
- [ ] Performance monitoring
- [ ] A/B testing

---

## 📞 **Support**

### **Get Help**
- 📧 **Email**: thakurtarun936@gmail.com
- 💬 **LinkedIn**: [Tarun Singh](https://www.linkedin.com/in/tarunsinghrajput/)
- 🐦 **Twitter**: [@tarun__sr](https://x.com/tarun__sr)
- 📱 **Phone**: +91 7006072897

### **Report Issues**
- 🐛 [Bug Reports](https://github.com/TarunSingh611/tarun-portfolio/issues)
- 💡 [Feature Requests](https://github.com/TarunSingh611/tarun-portfolio/issues)
- 📖 [Documentation](https://github.com/TarunSingh611/tarun-portfolio/wiki)

---

## 🙏 **Acknowledgments**

- **Next.js Team** - For the amazing framework
- **Vercel** - For seamless deployment
- **Framer Motion** - For smooth animations
- **Three.js** - For 3D graphics
- **Tailwind CSS** - For utility-first styling
- **GitHub Community** - For inspiration and support

---

## 📊 **Project Statistics**

<div align="center">

![Repository Size](https://img.shields.io/github/repo-size/TarunSingh611/tarun-portfolio?style=for-the-badge&logo=github&color=blue)
![Code Size](https://img.shields.io/github/languages/code-size/TarunSingh611/tarun-portfolio?style=for-the-badge&logo=github&color=green)
![Last Commit](https://img.shields.io/github/last-commit/TarunSingh611/tarun-portfolio?style=for-the-badge&logo=github&color=orange)
![Commit Activity](https://img.shields.io/github/commit-activity/m/TarunSingh611/tarun-portfolio?style=for-the-badge&logo=github&color=purple)

</div>

---

<div align="center">

**Made with ❤️ by [Tarun Singh](https://github.com/TarunSingh611)**

[![Portfolio](https://img.shields.io/badge/Portfolio-View%20Live-00D4AA?style=for-the-badge&logo=vercel&logoColor=white)](https://tarunsinghrajput.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TarunSingh611)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/tarunsinghrajput)

</div>
