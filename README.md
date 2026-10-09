# KageRyo Developer Website

My personal website, explore more new things here ❤️

- **Link**: https://kageryo.coderyo.com/

## Local development

This project uses Node.js 24.19.0, managed with `mise`.

```sh
mise install
npm ci
npm run dev
```

The development server is available at http://localhost:3000. Before opening a
pull request, run `npm test`, `npm run lint`, and `npm run build`.

Pull requests to `main` run the same lint, test, accessibility, and build checks
in the CI workflow with read-only permissions. Only pushes to `main` deploy the
site to GitHub Pages.

The accessibility check additionally requires the Chromium system libraries;
on Debian/Ubuntu, install them with `npx playwright install --with-deps chromium`.

## Contact Me

If you have any questions or suggestions, feel free to contact me through the following ways:

- [Submit an Issue](https://github.com/KageRyo/kageryo-website/issues)
- Email: kageryo@coderyo.com

## License

The content of this project page is licensed under `CC-BY4`, which allows free reproduction, redistribution, or use, including but not limited to commercial purposes, as long as the author is credited. The source code is licensed under `MIT`.
