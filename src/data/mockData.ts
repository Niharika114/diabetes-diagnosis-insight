
// Mock data representing the diabetes dataset

export type DiabetesDataItem = {
  id: number;
  pregnancies: number;
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  insulin: number;
  bmi: number;
  diabetesPedigreeFunction: number;
  age: number;
  outcome: number;
};

export const datasetDescription = [
  {
    feature: "Pregnancies",
    description: "Number of times pregnant",
    range: "0-17",
    units: "count",
    importance: "Moderate correlation with diabetes"
  },
  {
    feature: "Glucose",
    description: "Plasma glucose concentration (2 hours in an oral glucose tolerance test)",
    range: "0-199",
    units: "mg/dL",
    importance: "Strong predictor of diabetes"
  },
  {
    feature: "BloodPressure",
    description: "Diastolic blood pressure",
    range: "0-122",
    units: "mm Hg",
    importance: "Weak to moderate predictor"
  },
  {
    feature: "SkinThickness",
    description: "Triceps skin fold thickness",
    range: "0-99",
    units: "mm",
    importance: "Moderate predictor"
  },
  {
    feature: "Insulin",
    description: "2-Hour serum insulin",
    range: "0-846",
    units: "mu U/ml",
    importance: "Moderate predictor"
  },
  {
    feature: "BMI",
    description: "Body mass index",
    range: "0-67.1",
    units: "kg/m²",
    importance: "Strong predictor of diabetes"
  },
  {
    feature: "DiabetesPedigreeFunction",
    description: "Diabetes pedigree function (genetic influence)",
    range: "0.078-2.42",
    units: "score",
    importance: "Moderate predictor"
  },
  {
    feature: "Age",
    description: "Age",
    range: "21-81",
    units: "years",
    importance: "Moderate to strong predictor"
  },
  {
    feature: "Outcome",
    description: "Class variable (0 or 1)",
    range: "0-1",
    units: "binary",
    importance: "Target variable (0=No diabetes, 1=Diabetes)"
  }
];

export const diabetesData: DiabetesDataItem[] = [
  {
    id: 1,
    pregnancies: 6,
    glucose: 148,
    bloodPressure: 72,
    skinThickness: 35,
    insulin: 0,
    bmi: 33.6,
    diabetesPedigreeFunction: 0.627,
    age: 50,
    outcome: 1
  },
  {
    id: 2,
    pregnancies: 1,
    glucose: 85,
    bloodPressure: 66,
    skinThickness: 29,
    insulin: 0,
    bmi: 26.6,
    diabetesPedigreeFunction: 0.351,
    age: 31,
    outcome: 0
  },
  {
    id: 3,
    pregnancies: 8,
    glucose: 183,
    bloodPressure: 64,
    skinThickness: 0,
    insulin: 0,
    bmi: 23.3,
    diabetesPedigreeFunction: 0.672,
    age: 32,
    outcome: 1
  },
  {
    id: 4,
    pregnancies: 1,
    glucose: 89,
    bloodPressure: 66,
    skinThickness: 23,
    insulin: 94,
    bmi: 28.1,
    diabetesPedigreeFunction: 0.167,
    age: 21,
    outcome: 0
  },
  {
    id: 5,
    pregnancies: 0,
    glucose: 137,
    bloodPressure: 40,
    skinThickness: 35,
    insulin: 168,
    bmi: 43.1,
    diabetesPedigreeFunction: 2.288,
    age: 33,
    outcome: 1
  },
  {
    id: 6,
    pregnancies: 5,
    glucose: 116,
    bloodPressure: 74,
    skinThickness: 0,
    insulin: 0,
    bmi: 25.6,
    diabetesPedigreeFunction: 0.201,
    age: 30,
    outcome: 0
  },
  {
    id: 7,
    pregnancies: 3,
    glucose: 78,
    bloodPressure: 50,
    skinThickness: 32,
    insulin: 88,
    bmi: 31.0,
    diabetesPedigreeFunction: 0.248,
    age: 26,
    outcome: 1
  },
  {
    id: 8,
    pregnancies: 10,
    glucose: 115,
    bloodPressure: 0,
    skinThickness: 0,
    insulin: 0,
    bmi: 35.3,
    diabetesPedigreeFunction: 0.134,
    age: 29,
    outcome: 0
  },
  {
    id: 9,
    pregnancies: 2,
    glucose: 197,
    bloodPressure: 70,
    skinThickness: 45,
    insulin: 543,
    bmi: 30.5,
    diabetesPedigreeFunction: 0.158,
    age: 53,
    outcome: 1
  },
  {
    id: 10,
    pregnancies: 8,
    glucose: 125,
    bloodPressure: 96,
    skinThickness: 0,
    insulin: 0,
    bmi: 0.0,
    diabetesPedigreeFunction: 0.232,
    age: 54,
    outcome: 1
  }
];

export const datasetStats = {
  totalRecords: 768,
  missingValues: {
    glucose: 5,
    bloodPressure: 35,
    skinThickness: 227,
    insulin: 374,
    bmi: 11
  },
  diabeticPercentage: 34.9,
  nonDiabeticPercentage: 65.1,
  featureImpactOnModel: [
    { name: "Glucose", importance: 0.29 },
    { name: "BMI", importance: 0.18 },
    { name: "Age", importance: 0.16 },
    { name: "DiabetesPedigreeFunction", importance: 0.12 },
    { name: "Pregnancies", importance: 0.11 },
    { name: "BloodPressure", importance: 0.07 },
    { name: "SkinThickness", importance: 0.05 },
    { name: "Insulin", importance: 0.02 }
  ]
};

export const modelPerformance = {
  accuracy: 0.78,
  precision: 0.71,
  recall: 0.58,
  f1Score: 0.64,
  confusionMatrix: {
    truePositive: 45,
    falsePositive: 18,
    trueNegative: 106,
    falseNegative: 32
  },
  auc: 0.83
};

// Feature distribution stats for visualizations
export const featureDistribution = [
  {
    feature: "Pregnancies",
    diabetic: [
      { range: "0-2", count: 85 },
      { range: "3-6", count: 102 },
      { range: "7-10", count: 56 },
      { range: "11+", count: 25 }
    ],
    nonDiabetic: [
      { range: "0-2", count: 195 },
      { range: "3-6", count: 175 },
      { range: "7-10", count: 110 },
      { range: "11+", count: 20 }
    ]
  },
  {
    feature: "Glucose",
    diabetic: [
      { range: "0-99", count: 15 },
      { range: "100-125", count: 75 },
      { range: "126-150", count: 95 },
      { range: "151+", count: 83 }
    ],
    nonDiabetic: [
      { range: "0-99", count: 178 },
      { range: "100-125", count: 245 },
      { range: "126-150", count: 65 },
      { range: "151+", count: 12 }
    ]
  },
  {
    feature: "BMI",
    diabetic: [
      { range: "0-24.9", count: 34 },
      { range: "25-29.9", count: 68 },
      { range: "30-34.9", count: 82 },
      { range: "35+", count: 84 }
    ],
    nonDiabetic: [
      { range: "0-24.9", count: 145 },
      { range: "25-29.9", count: 175 },
      { range: "30-34.9", count: 122 },
      { range: "35+", count: 58 }
    ]
  }
];

// Reference values for features
export const referenceRanges = {
  glucose: {
    normal: { min: 70, max: 99 },
    prediabetic: { min: 100, max: 125 },
    diabetic: { min: 126, max: 200 }
  },
  bloodPressure: {
    normal: { min: 0, max: 80 },
    elevated: { min: 81, max: 89 },
    high: { min: 90, max: 140 }
  },
  bmi: {
    underweight: { min: 0, max: 18.5 },
    normal: { min: 18.6, max: 24.9 },
    overweight: { min: 25, max: 29.9 },
    obese: { min: 30, max: 100 }
  }
};
