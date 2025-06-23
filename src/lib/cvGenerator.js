// CV Generation Utility
// Uses CDN data to generate dynamic CVs

export const generateCVFromData = (portfolioData) => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return {
    personal: portfolioData.personal,
    aboutMe: portfolioData.aboutMe,
    experiences: portfolioData.experiences,
    education: portfolioData.education,
    skills: portfolioData.skills,
    projects: portfolioData.projects,
    contacts: portfolioData.contacts,
    generatedDate: currentDate
  };
};

export const generateCVText = (cvData) => {
  return `${cvData.personal.name} - ${cvData.personal.title}
Generated on: ${cvData.generatedDate}

CONTACT INFORMATION
Email: ${cvData.personal.email}
LinkedIn: ${cvData.personal.linkedin}
GitHub: ${cvData.personal.github}
Twitter: ${cvData.personal.twitter}
Instagram: ${cvData.personal.instagram}
Location: ${cvData.personal.location}
Website: ${cvData.personal.website}

PROFESSIONAL SUMMARY
${cvData.aboutMe.summary}

TECHNICAL SKILLS
Languages: ${cvData.skills.languages.join(', ')}
Frameworks: ${cvData.skills.frameworks.join(', ')}
Libraries: ${cvData.skills.libraries.join(', ')}
Databases: ${cvData.skills.databases.join(', ')}
Tools: ${cvData.skills.tools.join(', ')}
Platforms: ${cvData.skills.platforms.join(', ')}

EXPERIENCE

${cvData.experiences.map(exp => `${exp.company} (${exp.period})
${exp.title}
Location: ${exp.location}
${exp.description.map(desc => `• ${desc}`).join('\n')}
`).join('\n')}

EDUCATION
${cvData.education.map(edu => `${edu.degree}
${edu.institution} - ${edu.location}
${edu.period}
`).join('\n')}

PROJECTS
${cvData.projects.map(project => `• ${project.title}
  ${project.description}
  Tech Stack: ${project.techStack.join(', ')}
  ${project.link ? `Link: ${project.link}` : ''}
`).join('\n')}

ADDITIONAL CONTACT
Phone: ${cvData.contacts.mobileNumber}
Address: ${cvData.contacts.address}

---
This CV was automatically generated from my portfolio data.
Visit: ${cvData.personal.website}
Last Updated: ${cvData.generatedDate}`;
};

export const generateCVHTML = (cvData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 15px; background: white; font-size: 11px; line-height: 1.3;">
      <div style="text-align: center; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-bottom: 15px;">
        <h1 style="font-size: 24px; font-weight: bold; color: #667eea; margin: 0 0 5px 0;">${cvData.personal.name}</h1>
        <h2 style="font-size: 16px; color: #666; margin: 0 0 8px 0;">${cvData.personal.title}</h2>
        <p style="font-size: 10px; color: #888; margin: 0;">Generated on: ${cvData.generatedDate}</p>
      </div>

      <div style="margin-bottom: 15px;">
        <h3 style="font-size: 14px; font-weight: bold; color: #667eea; border-bottom: 1px solid #667eea; padding-bottom: 3px; margin-bottom: 8px;">CONTACT INFORMATION</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px; font-size: 10px;">
          <div>📧 ${cvData.personal.email}</div>
          <div>🔗 ${cvData.personal.linkedin}</div>
          <div>💻 ${cvData.personal.github}</div>
          <div>🐦 ${cvData.personal.twitter}</div>
          <div>📷 ${cvData.personal.instagram}</div>
          <div>📍 ${cvData.personal.location}</div>
          <div>📱 ${cvData.contacts.mobileNumber}</div>
          <div>🌐 ${cvData.personal.website}</div>
        </div>
      </div>

      <div style="margin-bottom: 15px;">
        <h3 style="font-size: 14px; font-weight: bold; color: #667eea; border-bottom: 1px solid #667eea; padding-bottom: 3px; margin-bottom: 8px;">PROFESSIONAL SUMMARY</h3>
        <p style="font-size: 10px; line-height: 1.4; margin: 0;">${cvData.aboutMe.summary}</p>
      </div>

      <div style="margin-bottom: 15px;">
        <h3 style="font-size: 14px; font-weight: bold; color: #667eea; border-bottom: 1px solid #667eea; padding-bottom: 3px; margin-bottom: 8px;">TECHNICAL SKILLS</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div>
            <h4 style="font-size: 12px; font-weight: bold; color: #333; margin: 0 0 4px 0;">Languages</h4>
            <p style="font-size: 10px; margin: 0;">${cvData.skills.languages.join(', ')}</p>
          </div>
          <div>
            <h4 style="font-size: 12px; font-weight: bold; color: #333; margin: 0 0 4px 0;">Frameworks</h4>
            <p style="font-size: 10px; margin: 0;">${cvData.skills.frameworks.join(', ')}</p>
          </div>
          <div>
            <h4 style="font-size: 12px; font-weight: bold; color: #333; margin: 0 0 4px 0;">Libraries</h4>
            <p style="font-size: 10px; margin: 0;">${cvData.skills.libraries.join(', ')}</p>
          </div>
          <div>
            <h4 style="font-size: 12px; font-weight: bold; color: #333; margin: 0 0 4px 0;">Databases</h4>
            <p style="font-size: 10px; margin: 0;">${cvData.skills.databases.join(', ')}</p>
          </div>
          <div>
            <h4 style="font-size: 12px; font-weight: bold; color: #333; margin: 0 0 4px 0;">Tools</h4>
            <p style="font-size: 10px; margin: 0;">${cvData.skills.tools.join(', ')}</p>
          </div>
          <div>
            <h4 style="font-size: 12px; font-weight: bold; color: #333; margin: 0 0 4px 0;">Platforms</h4>
            <p style="font-size: 10px; margin: 0;">${cvData.skills.platforms.join(', ')}</p>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 15px;">
        <h3 style="font-size: 14px; font-weight: bold; color: #667eea; border-bottom: 1px solid #667eea; padding-bottom: 3px; margin-bottom: 8px;">EXPERIENCE</h3>
        ${cvData.experiences.map(exp => `
          <div style="margin-bottom: 10px;">
            <div style="font-weight: bold; color: #333; font-size: 12px;">${exp.company}</div>
            <div style="color: #666; font-style: italic; font-size: 10px; margin-bottom: 3px;">${exp.period} | ${exp.title} | ${exp.location}</div>
            <ul style="margin: 3px 0; padding-left: 15px; font-size: 10px;">
              ${exp.description.map(desc => `<li style="margin-bottom: 2px;">${desc}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div style="margin-bottom: 15px;">
        <h3 style="font-size: 14px; font-weight: bold; color: #667eea; border-bottom: 1px solid #667eea; padding-bottom: 3px; margin-bottom: 8px;">EDUCATION</h3>
        ${cvData.education.map(edu => `
          <div style="margin-bottom: 8px;">
            <div style="font-weight: bold; color: #333; font-size: 11px;">${edu.degree}</div>
            <div style="color: #666; font-size: 10px;">${edu.institution} - ${edu.location}</div>
            <div style="color: #888; font-size: 9px;">${edu.period}</div>
          </div>
        `).join('')}
      </div>

      <div style="margin-bottom: 15px;">
        <h3 style="font-size: 14px; font-weight: bold; color: #667eea; border-bottom: 1px solid #667eea; padding-bottom: 3px; margin-bottom: 8px;">PROJECTS</h3>
        ${cvData.projects.map(project => `
          <div style="margin-bottom: 10px;">
            <div style="font-weight: bold; color: #333; font-size: 11px;">• ${project.title}</div>
            <div style="font-size: 10px; color: #666; margin-left: 10px; margin-bottom: 3px;">${project.description}</div>
            <div style="font-size: 9px; color: #888; margin-left: 10px; margin-bottom: 2px;"><strong>Tech Stack:</strong> ${project.techStack.join(', ')}</div>
            ${project.link ? `<div style="font-size: 9px; color: #667eea; margin-left: 10px;"><strong>Link:</strong> ${project.link}</div>` : ''}
          </div>
        `).join('')}
      </div>

      <div style="margin-bottom: 15px;">
        <h3 style="font-size: 14px; font-weight: bold; color: #667eea; border-bottom: 1px solid #667eea; padding-bottom: 3px; margin-bottom: 8px;">ADDITIONAL CONTACT</h3>
        <div style="font-size: 10px;">
          <div>📱 Phone: ${cvData.contacts.mobileNumber}</div>
          <div>📍 Address: ${cvData.contacts.address}</div>
        </div>
      </div>

      <div style="border-top: 1px solid #eee; padding-top: 8px; margin-top: 15px; text-align: center; font-size: 8px; color: #888;">
        <p style="margin: 0;">This CV was automatically generated from my portfolio data.</p>
        <p style="margin: 3px 0 0 0;">Visit: ${cvData.personal.website}</p>
        <p style="margin: 3px 0 0 0;">Last Updated: ${cvData.generatedDate}</p>
      </div>
    </div>
  `;
};

export const downloadCV = async (portfolioData) => {
  try {
    // Generate CV content dynamically using CDN data
    const cvData = generateCVFromData(portfolioData);
    
    // Create a temporary HTML element for PDF generation
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = generateCVHTML(cvData);
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '0';
    tempDiv.style.width = '800px';
    tempDiv.style.backgroundColor = 'white';
    tempDiv.style.padding = '20px';
    tempDiv.style.fontFamily = 'Arial, sans-serif';
    tempDiv.style.fontSize = '11px';
    tempDiv.style.lineHeight = '1.3';
    tempDiv.style.color = '#333';
    
    document.body.appendChild(tempDiv);
    
    // Import jsPDF and html2canvas dynamically
    const [jsPDF, html2canvas] = await Promise.all([
      import('jspdf'),
      import('html2canvas')
    ]);
    
    const { default: jsPDFClass } = jsPDF;
    const { default: html2canvasClass } = html2canvas;
    
    // Convert HTML to canvas
    const canvas = await html2canvasClass(tempDiv, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });
    
    // Remove temporary element
    document.body.removeChild(tempDiv);
    
    // Create PDF
    const pdf = new jsPDFClass('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    let heightLeft = imgHeight;
    let position = 0;
    
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;
    
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }
    
    // Download PDF
    pdf.save(`${cvData.personal.name.replace(/\s+/g, '_')}_CV.pdf`);
    
    console.log('CV PDF generated and downloaded successfully');
    return { success: true, message: 'CV downloaded successfully' };
  } catch (error) {
    console.error('Error generating CV PDF:', error);
    
    // Fallback to text version
    try {
      const cvData = generateCVFromData(portfolioData);
      const textContent = generateCVText(cvData);
      const blob = new Blob([textContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${cvData.personal.name.replace(/\s+/g, '_')}_CV.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      console.log('CV text version downloaded as fallback');
      return { success: true, message: 'CV text version downloaded' };
    } catch (fallbackError) {
      console.error('Fallback also failed:', fallbackError);
      // Final fallback to HTML version
      window.open('/Tarun_Singh_CV.html', '_blank');
      return { success: false, message: 'Opening HTML version as fallback' };
    }
  }
}; 