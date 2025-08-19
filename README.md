# ⚡ Vite Pixel Starter Template

A production-grade Vite + React + TypeScript + Tailwind CSS starter template built by [Jonathan Keefe](https://github.com/jon8897). Includes clean architecture, reusable UI components, dark mode support, and full GitHub integration.

---

## 🚀 Features

- ⚡️ Lightning-fast Vite dev/build setup
- 🧱 50+ pre-built ShadCN-style UI components
- 🌗 Dark/light theme context (Tailwind-based)
- 🧰 ESLint + Prettier pre-configured
- 📁 Clean folder structure (docs, components, contexts, etc.)
- ✅ GitHub Actions CI/CD (`.github/workflows/deploy.yml`)
- 🐛 Issue templates and PR templates ready to go
- 🔒 Fully documented and secured (see [SECURITY.md](/SECURITY.md))

---

## 🧠 Tech Stack

- [Vite](https://vitejs.dev/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN/UI](https://ui.shadcn.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

## 🗂️ Project Structure

vite-starter-template/

├── public/                        # Static assets

├── src/

│   ├── components/ui/             # Reusable UI components

│   ├── contexts/                  # Theme context

│   ├── App.tsx                    # App wrapper

│   └── main.tsx                   # Entry point

├── docs/

│   └── architecture.md            # App structure notes

├── .github/

│   ├── ISSUE_TEMPLATE/

│   │   └── bug_report.md          # Issue report template

│   ├── workflows/deploy.yml       # GitHub Actions workflow

│   └── PULL_REQUEST_TEMPLATE.md   # Pull request template

├── tailwind.config.ts

├── vite.config.ts

└── tsconfig.json

```

## 🛠️ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview

```

---

## 📦 Available Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Build production-ready assets |
| `npm run preview` | Serve built project locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run format` | Format code via Prettier |

---

## 🧾 Documentation

- 📚 [Architecture Overview](/docs/architecture.md)
- 🐞 [Bug Report Template](/.github/ISSUE_TEMPLATE/bug_report.md)
- 🔃 [Pull Request Template](/.github/PULL_REQUEST_TEMPLATE.md)
- 🛡️ [Security Policy](/SECURITY.md)
- 👨‍👩‍👧 [Code of Conduct](/CODE_OF_CONDUCT.md)

---

## 🔐 Security

If you discover a vulnerability, please follow the instructions in [SECURITY.md](/SECURITY.md) to report it.

---

## 🤝 Contributing

Pull requests and issues are welcome! Please review our [Code of Conduct](/CODE_OF_CONDUCT.md) and open a GitHub issue before submitting significant changes.

---

## 📄 License

This project is open source and available under the [MIT License](/LICENSE).


Built with ❤️ by [Jonathan Keefe](https://github.com/jon8897)