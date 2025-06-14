# Project Pages Generator

This directory contains a template and generator for creating consistent project pages for the portfolio website.

## Structure

- `template.html`: The base template for all project pages
- `generate_project.js`: Node.js script to generate project pages from the template
- `README.md`: This documentation file

## How to Use

1. Create a new project data object in `generate_project.js` or create a new JavaScript file with your project data:

```javascript
const projectData = {
    title: 'Your Project Title',
    description: 'Brief project description',
    image: 'project-image.jpg',
    overview: 'Detailed project overview...',
    techStack: [
        'Flutter',
        'Dart',
        // Add more technologies...
    ],
    features: [
        {
            title: 'Feature Category',
            items: [
                'Feature item 1',
                'Feature item 2',
                // Add more features...
            ]
        }
    ],
    gallery: [
        {
            src: 'image1.jpg',
            alt: 'Image description'
        }
        // Add more gallery images...
    ],
    developmentProcess: 'Description of the development process...',
    impactResults: [
        'Impact result 1',
        'Impact result 2',
        // Add more results...
    ]
};
```

2. Run the generator script:

```bash
node generate_project.js
```

3. The script will generate a new HTML file with your project content.

## Template Structure

The template includes the following sections:

1. Project Header
   - Title
   - Description
   - Optional GitHub/Demo links

2. Project Overview
   - Main project image
   - Detailed description

3. Tech Stack
   - List of technologies used

4. Key Features
   - Categorized list of features
   - Nested feature items

5. Project Gallery
   - Grid of project images

6. Development Process
   - Description of the development approach
   - Challenges and solutions

7. Impact & Results
   - List of project outcomes and achievements

## Styling

The template uses CSS variables for consistent theming:

```css
:root {
    --primary: #02569B;
    --accent: #13B9FD;
    --bg: #f5f5f5;
    --text: #333;
    --card-bg: white;
}
```

You can modify these variables to change the color scheme of all project pages.

## Responsive Design

The template is fully responsive and includes media queries for mobile devices. The layout will automatically adjust based on screen size. 