# attheo.do

Personal website built with Jekyll and hosted on GitHub Pages.

## Project structure
- `assets/` static assets (CSS, images)
- `src/styles/` Tailwind source files
- `_includes/`, `_layouts/`, `_posts/` Jekyll content

## Local setup
### Jekyll
```bash
gem install jekyll
```

### Tailwind CSS
```bash
npm install
```

Build CSS once:
```bash
npm run build:css
```

Watch CSS during development:
```bash
npm run dev:css
```

### Serve the site
```bash
jekyll serve
```

Open `http://localhost:4000`.
