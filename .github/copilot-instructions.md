# Copilot Instructions for NobleWave Open Data

## Project Overview
- This is a static web project for browsing and displaying educational video resources (Qaida Collection) in multiple languages.
- The main UI is defined in `index.html` and styled with `styles.css`. Data structure and navigation logic are in `dataStructure.js` and inline scripts in `index.html`.
- Video metadata is stored in JSON files under `projects/qaida/videos/{lang}/video.json`.

## Architecture & Data Flow
- The project structure is defined in `dataStructure.js` as a nested object (`projectStructure`).
- The UI dynamically renders project, category, and file cards based on this structure.
- When a user selects a JSON file, its contents are fetched and displayed in a modal overlay.
- Video URLs are constructed by concatenating `src` and `videoId` fields from the JSON data.

## Key Patterns & Conventions
- All navigation and data loading is handled client-side (no backend).
- To add new projects or categories, extend the `projectStructure` object in `dataStructure.js` and add corresponding JSON files.
- JSON files must be arrays of objects with at least `title`, `videoId`, and `src` fields.
- UI cards use emoji icons as defined in the data structure.
- The breadcrumb navigation is updated on every view change for context.

## Developer Workflows
- No build step: edit HTML, JS, and JSON files directly.
- To test, open `index.html` in a browser. For local file access, use a local server (e.g., `npx serve .` or Python's `python -m http.server`).
- No automated tests or CI/CD are present.

## Extending & Integrating
- To add a new language or video set, create a new JSON file and update `dataStructure.js`.
- All data is static; no external APIs or dynamic dependencies are used.
- For new UI features, update the inline script in `index.html`.

## Key Files & Directories
- `index.html`: Main UI and logic
- `dataStructure.js`: Project/category/file definitions
- `projects/qaida/videos/`: JSON data files (per language)
- `styles.css`: Styling

## Example: Adding a New Video Language
1. Add a new JSON file under `projects/qaida/videos/{newlang}/video.json`.
2. Add an entry for the new language in the `jsonFiles` array in `dataStructure.js`.

---
For questions or improvements, follow the patterns in the existing code and update this file as needed.
