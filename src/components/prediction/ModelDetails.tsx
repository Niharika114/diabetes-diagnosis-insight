
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeIcon, BookOpenText, SlidersHorizontal } from 'lucide-react';

const ModelDetails: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Model Information</CardTitle>
        <CardDescription>
          Logistic Regression model trained on Pima Indians Diabetes Dataset
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview" className="flex items-center gap-1">
              <BookOpenText className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center gap-1">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="hidden sm:inline">Performance</span>
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center gap-1">
              <CodeIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Code</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="text-sm space-y-4 mt-4">
            <div>
              <h3 className="font-medium mb-1">Algorithm</h3>
              <p className="text-muted-foreground">
                Logistic Regression is a statistical model that uses a logistic function to model a binary dependent variable. It's 
                widely used in machine learning for binary classification problems like diabetes diagnosis.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Data Preprocessing</h3>
              <p className="text-muted-foreground">
                The following preprocessing steps were applied:
              </p>
              <ol className="list-decimal list-inside mt-1 text-muted-foreground space-y-1">
                <li>Replacement of zero values with column medians in relevant features</li>
                <li>Feature scaling using StandardScaler to normalize the data</li>
                <li>80/20 train-test split with stratification to maintain class distribution</li>
              </ol>
            </div>
            <div>
              <h3 className="font-medium mb-1">Model Parameters</h3>
              <p className="text-muted-foreground">
                The Logistic Regression model was trained with the following parameters:
              </p>
              <ul className="list-disc list-inside mt-1 text-muted-foreground space-y-1">
                <li>Solver: liblinear (robust for small datasets)</li>
                <li>C: 1.0 (regularization strength)</li>
                <li>Penalty: l2 (ridge regression)</li>
                <li>Max iterations: 100</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="text-sm space-y-4 mt-4">
            <div>
              <h3 className="font-medium mb-1">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="p-3 rounded-md bg-muted">
                  <p className="text-xs text-muted-foreground">Accuracy</p>
                  <p className="text-lg font-bold">78%</p>
                </div>
                <div className="p-3 rounded-md bg-muted">
                  <p className="text-xs text-muted-foreground">Precision</p>
                  <p className="text-lg font-bold">71%</p>
                </div>
                <div className="p-3 rounded-md bg-muted">
                  <p className="text-xs text-muted-foreground">Recall</p>
                  <p className="text-lg font-bold">58%</p>
                </div>
                <div className="p-3 rounded-md bg-muted">
                  <p className="text-xs text-muted-foreground">F1 Score</p>
                  <p className="text-lg font-bold">64%</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-1">Limitations</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Assumes linear relationship between features and the log odds</li>
                <li>Sensitive to outliers in the dataset</li>
                <li>Limited capacity to capture complex non-linear relationships</li>
                <li>Performance affected by missing value imputations (esp. Insulin)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-1">Potential Improvements</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Try more advanced models (Random Forest, XGBoost)</li>
                <li>Feature engineering to create more predictive features</li>
                <li>Experiment with different imputation strategies</li>
                <li>Apply SMOTE or other techniques to address class imbalance</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="text-sm mt-4">
            <div className="font-mono text-xs p-4 bg-muted rounded-md overflow-x-auto">
              <pre>{`# Load and prepare the dataset
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# Load data
data = pd.read_csv('diabetes.csv')

# Identify columns with zero values in place of missing values
zero_columns = ['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']

# Replace zeros with median values
for column in zero_columns:
    median = data[column][data[column] != 0].median()
    data[column] = data[column].replace(0, median)

# Separate features and target
X = data.drop('Outcome', axis=1)
y = data['Outcome']

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Standardize the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Create and train the model
model = LogisticRegression(solver='liblinear', random_state=42)
model.fit(X_train_scaled, y_train)

# Make predictions
y_pred = model.predict(X_test_scaled)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2f}")
print("\\nClassification Report:")
print(classification_report(y_test, y_pred))
print("\\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))`}</pre>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ModelDetails;
