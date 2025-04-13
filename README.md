💡 Why I Built This

This project started as a personal challenge to bridge the gap between machine learning and modern frontend development. I wanted to create an intuitive and visually appealing tool that could make predictive healthcare more approachable. By combining a Python-based ML model with a sleek React + Tailwind UI, I was able to build something that’s both smart and user-friendly.

🧪 What I Learned

- Integrated a trained ML model into a real-world frontend using a Python API
- Built reusable UI components with shadcn/ui and Tailwind CSS
- Understood the trade-offs between different classification algorithms
- Improved accessibility and responsiveness using Headless UI patterns

🧩 Custom Components

- `DiabetesForm`: A dynamic input form with real-time validation using React Hook Form
- `PredictionCard`: Displays model predictions with conditional styling based on risk level
- `DarkModeToggle`: Built using Radix primitives and styled with shadcn/ui

🏗️ Under the Hood

- The backend exposes a simple `/predict` endpoint that receives patient data and returns a prediction.
- The ML model was trained using Random Forest with hyperparameter tuning via GridSearchCV.
- The frontend validates user input and handles API communication using Axios.
- Vite + TypeScript ensures fast reloads and type safety throughout development.

> ⚠️ Note: While the Pima Indians Diabetes Dataset is publicly available and often used in ML tutorials, all code, UI design, and model experimentation in this project were implemented from scratch by me.
