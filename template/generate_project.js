const fs = require('fs');
const path = require('path');
const projects = require('./project_data');

function generateProjectPage(projectData, outputPath) {
    // Read the template
    const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

    // Replace placeholders with actual content
    let content = template
        .replace(/PROJECT_TITLE/g, projectData.title)
        .replace('PROJECT_DESCRIPTION', projectData.description)
        .replace('PROJECT_IMAGE', projectData.image)
        .replace('PROJECT_OVERVIEW', projectData.overview)
        .replace('DEVELOPMENT_PROCESS', projectData.developmentProcess);

    // Generate tech stack items
    const techStackItems = projectData.techStack
        .map(tech => `<span class="tech-item">${tech}</span>`)
        .join('\n                ');
    content = content.replace('<!-- TECH_STACK_ITEMS -->', techStackItems);

    // Generate features
    const features = projectData.features
        .map(feature => `
                <li>${feature.title}
                    <ul class="features-list">
                        ${feature.items.map(item => `<li>${item}</li>`).join('\n                        ')}
                    </ul>
                </li>`)
        .join('\n');
    content = content.replace('<!-- KEY_FEATURES -->', features);

    // Generate gallery images
    const galleryImages = projectData.gallery
        .map(img => `<img src="../assets/images/${img.src}" alt="${img.alt}">`)
        .join('\n                ');
    content = content.replace('<!-- GALLERY_IMAGES -->', galleryImages);

    // Generate impact results
    const impactResults = projectData.impactResults
        .map(result => `<li>${result}</li>`)
        .join('\n                ');
    content = content.replace('<!-- IMPACT_RESULTS -->', impactResults);

    if (projectData.psNote) {
        const psNoteSection = `
        <div class="project-section">
            <p><b>P.S.</b> ${projectData.psNote}</p>
        </div>`;
        content = content.replace('<!-- PS_NOTE_SECTION -->', psNoteSection);
    } else {
        content = content.replace('<!-- PS_NOTE_SECTION -->', '');
    }

    // Write the generated content to the output file
    fs.writeFileSync(outputPath, content);
}

const outputDir = path.join(__dirname, '../projects'); // Change 'dist' to your target folder
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
// Generate pages for all projects
Object.entries(projects).forEach(([projectId, projectData]) => {
    const outputPath = path.join(outputDir, `${projectId}.html`);
    generateProjectPage(projectData, outputPath);
    console.log(`Generated ${outputPath}`);
});

