# 📚 Online Library Store

An online library store built with **React + Vite**, where users can browse books, view details, and manage their cart.

---

## 🔗 Links

- **GitHub Repository:** [https://github.com/Aditya-MC/online_library](https://github.com/Aditya-MC/online_library)
- **Live Demo:** [https://Aditya-MC.github.io/online_library/](https://Aditya-MC.github.io/online_library/)

---

## 🚀 Features

- Browse a collection of books
- View detailed book information
- Add books to the cart
- Responsive design

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **Tailwind CSS** 
- **JavaScript (ES6+)**
- **GitHub Pages** for deployment

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aditya-MC/online_library.git
   cd online_library
   
2. **Install dependencies**

npm install


3. **Run the development server**

npm run dev


The app will be available at http://localhost:5173/

🌐 Deployment (GitHub Pages)

Add this to vite.config.js:

export default defineConfig({
  base: '/<your-repo-name>/',
  plugins: [react()],
})


Add the following to package.json:

"homepage": "https://<your-username>.github.io/<your-repo-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}


Deploy the site:

git add .
git commit -m "Setup GitHub Pages deploy"
git push
npm run deploy

Author:
Aditya-MC