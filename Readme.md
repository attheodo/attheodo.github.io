# attheo.do

Personal website built with Jekyll and hosted on GitHub Pages.

## Project structure
- `assets/` static assets (CSS, images)
- `src/styles/` Tailwind source files
- `_includes/`, `_layouts/`, `_posts/` Jekyll content

## Local setup

### Prerequisites

I personally use [chruby](https://github.com/postmodern/chruby) to manage Ruby versions. Make sure you have it installed, then switch to the correct Ruby:

```bash
chruby ruby-3.4.1
```

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

Make sure you're using the right Ruby version first:

```bash
chruby ruby-3.4.1
jekyll serve
```

Open `http://localhost:4000`. The site auto-regenerates on file changes.
