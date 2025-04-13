
# 🧠 Diabetes Prediction App

A modern web application that predicts whether a person is likely to have diabetes using a machine learning model trained on the **Pima Indians Diabetes Dataset**. The app combines the power of data science with a sleek, responsive user interface.

---


## 🧰 Technologies Used

### ⚙️ Machine Learning
- **Python (scikit-learn)**: To build and train the diabetes prediction model.
- **Logistic Regression**, **Decision Trees**, **Random Forests**: Supervised learning algorithms used to compare model performance.
- **Pandas**, **NumPy**: Data manipulation.
- **Matplotlib**, **Seaborn**: Data visualization (optional).

### 🖥️ Frontend Stack
This project is built with:

- **[Vite](https://vitejs.dev/)** – Lightning-fast development server and bundler
- **[React](https://reactjs.org/)** – UI library
- **[TypeScript](https://www.typescriptlang.org/)** – Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.dev/)** – Modern UI components built with Radix UI and Tailwind

---

## 📦 Project Structure

```
├── backend/                    # ML model and API (if applicable)
│   ├── model.pkl
│   └── app.py (Flask/FastAPI)
├── frontend/                   # React + Vite + Tailwind frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   └── index.html
├── README.md
├── requirements.txt (backend)
└── package.json (frontend)
```

---

## 📊 Dataset

- **Name**: Pima Indians Diabetes Dataset  
- **Source**: [Kaggle](https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database)  
- **Features**: Pregnancies, Glucose, Blood Pressure, Skin Thickness, Insulin, BMI, Age, etc.

---

## 🧠 Model Training (Backend)

> You can find the training notebook or script in the `/backend` folder.

Steps involved:
1. Load and preprocess the dataset
2. Train ML models (Logistic Regression, Decision Tree, Random Forest)
3. Evaluate using accuracy, precision, recall, F1-score
4. Save the best-performing model (`model.pkl`)

---

## 🧑‍💻 How to Run This Project

### 1. Clone the repo
```bash
git clone https://github.com/your-username/diabetes-prediction-app.git
cd diabetes-prediction-app
```

### 2. Run the Backend (Python API)
```bash
cd backend
pip install -r requirements.txt
python app.py  # Flask or FastAPI server
```

### 3. Run the Frontend (React App)
```bash
cd frontend
npm install
npm run dev
```

---

## 📷 Screenshots


![Screenshot 2025-04-13 181144](https://github.com/user-attachments/assets/2a536394-fc99-406b-ad45-ad187275da8e)
![Screenshot 2025-04-13 181236](https://github.com/user-attachments/assets/2d79c0b8-f03d-4ab5-90e6-8d5cc27c149f)
![Screenshot 2025-04-13 181722](https://github.com/user-attachments/assets/78b4af66-6bb2-40b6-a2f1-eb4229bf3779)





---

## ✨ Features

- Input form for health metrics
- Predicts diabetes likelihood using ML model
- Clean, responsive UI with dark mode
- Fast, type-safe frontend using Vite + React + TS + shadcn-ui

---

## 📌 Future Improvements

- Add more advanced models (XGBoost, LightGBM)
- Connect to a database to store predictions
- Deploy frontend + backend using Vercel / Render / Docker

---

## 🤝 Acknowledgements

- [Pima Indians Diabetes Dataset](https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database)
- [shadcn/ui](https://ui.shadcn.dev/)
- [scikit-learn](https://scikit-learn.org/)`
