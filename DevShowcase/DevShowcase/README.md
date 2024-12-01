# DevShowcase - Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This application showcases your professional work, skills, and contact information with a beautiful, user-friendly interface.

![DevShowcase Preview](preview.png)

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion for smooth, professional animations
- **Project Showcase**: Filterable project gallery with categories
- **Skills Section**: Visual representation of technical skills and competencies
- **Modern UI**: Clean and professional design inspired by modern web applications
- **Contact Section**: Easy-to-use contact information and social links

## 🚀 Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Vite

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/devshowcase.git
   ```

2. Navigate to the project directory:
   ```bash
   cd devshowcase
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## 🛠️ Configuration

### Customizing Content

1. Edit your personal information in `src/components/WebPortfolio.tsx`
2. Update your projects in `src/components/MyProjects.tsx`
3. Modify your skills in `src/components/Skills.tsx`

### Styling

- The project uses Tailwind CSS for styling
- Custom styles can be added in `src/index.css`
- Theme configuration is in `tailwind.config.js`

## 🌐 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to your preferred hosting platform.

## 📝 Project Structure

```
devshowcase/
├── src/
│   ├── components/          # React components
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html             # HTML template
└── package.json           # Project dependencies and scripts
```

## 🔒 Dark Mode Persistence

The application uses localStorage to persist the user's theme preference across sessions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)
- Email: your.email@example.com

## ⭐ Show your support

Give a ⭐️ if you like this project!