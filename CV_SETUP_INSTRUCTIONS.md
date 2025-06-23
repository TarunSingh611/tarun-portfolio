# CV Download Setup Instructions

## Current Setup

The CV download functionality is now working with the following files:

1. **`public/Tarun_Singh_CV.pdf`** - Text version of your CV (placeholder)
2. **`public/Tarun_Singh_CV.html`** - HTML version of your CV (styled and ready to print)
3. **Updated Hero component** - Now has proper download functionality with error handling

## How to Create a Proper PDF

### Option 1: Convert HTML to PDF
1. Open `public/Tarun_Singh_CV.html` in your browser
2. Press `Ctrl+P` (or `Cmd+P` on Mac) to open print dialog
3. Select "Save as PDF" as the destination
4. Save the file as `Tarun_Singh_CV.pdf` in the `public` folder
5. Replace the existing text file

### Option 2: Use Online Converters
1. Copy the content from `public/Tarun_Singh_CV.pdf`
2. Use online tools like:
   - [Google Docs](https://docs.google.com) - Paste content and export as PDF
   - [Canva](https://canva.com) - Create a professional CV design
   - [Resume.io](https://resume.io) - Use their CV builder
3. Download as PDF and save as `Tarun_Singh_CV.pdf` in the `public` folder

### Option 3: Use Professional CV Builders
1. [LinkedIn CV Builder](https://www.linkedin.com/learning/paths/become-a-software-developer)
2. [Resume.com](https://www.resume.com)
3. [Zety](https://zety.com)
4. [Canva](https://canva.com)

## How the Download Works

The download button now has three fallback options:

1. **Primary**: Downloads the PDF file directly
2. **Fallback 1**: If PDF is not available, opens the HTML version in a new tab
3. **Fallback 2**: If both fail, opens the HTML version as a final option

## Customization

### Update CV Content
Edit the content in either:
- `public/Tarun_Singh_CV.pdf` (text version)
- `public/Tarun_Singh_CV.html` (HTML version with styling)

### Update Contact Information
Make sure to update:
- Email address
- Phone number
- LinkedIn profile
- GitHub profile
- Location

### Update Experience
- Current role at DataNexify
- Previous experience
- Projects
- Skills
- Education

## Testing the Download

1. Start your development server: `npm run dev`
2. Go to the Hero section
3. Click the "Download CV" button
4. The file should download or open in a new tab

## Troubleshooting

### If download doesn't work:
1. Check that the files exist in the `public` folder
2. Check browser console for errors
3. Try the HTML version by visiting `/Tarun_Singh_CV.html` directly
4. Make sure your browser allows downloads

### If you want to track downloads:
Add analytics to the `handleCVDownload` function in `src/components/Hero.jsx`:

```javascript
const handleCVDownload = async () => {
  // Add analytics tracking here
  if (typeof gtag !== 'undefined') {
    gtag('event', 'download', {
      'event_category': 'cv',
      'event_label': 'hero_section'
    });
  }
  
  // ... rest of the function
};
```

## Professional CV Tips

1. **Keep it concise** - 1-2 pages maximum
2. **Use action verbs** - "Developed", "Implemented", "Led"
3. **Include metrics** - "Improved performance by 40%"
4. **Tailor to job** - Highlight relevant skills and experience
5. **Proofread** - No spelling or grammar errors
6. **Use consistent formatting** - Professional and clean design
7. **Include keywords** - Match job descriptions
8. **Update regularly** - Keep it current with latest experience 