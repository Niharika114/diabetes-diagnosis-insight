
"""
Simple Linear Regression Model for Advertising vs. Sales Analysis
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Set random seed for reproducibility
np.random.seed(42)

# Generate synthetic data
def generate_advertising_sales_data(n_samples=100):
    """Generate synthetic data for advertising spend vs sales."""
    advertising_spend = np.random.uniform(10, 300, n_samples)  # Spend between $10-$300
    # Create a linear relationship with some added noise
    # For each $1 spent on advertising, gain ~$2 in sales, with a base of $50
    sales = 50 + 2 * advertising_spend + np.random.normal(0, 30, n_samples)
    return pd.DataFrame({
        'Advertising_Spend': advertising_spend,
        'Sales': sales
    })

# Create the dataset
data = generate_advertising_sales_data(100)
print("Generated dataset sample:")
print(data.head())
print("\nData statistics:")
print(data.describe())

# Visualize the raw data
plt.figure(figsize=(10, 6))
plt.scatter(data['Advertising_Spend'], data['Sales'], alpha=0.7, color='blue')
plt.title('Sales vs. Advertising Spend')
plt.xlabel('Advertising Spend ($)')
plt.ylabel('Sales ($)')
plt.grid(True, alpha=0.3)
plt.savefig('sales_vs_advertising_raw.png')  # Save the plot
plt.close()

# Prepare data for modeling
X = data[['Advertising_Spend']]  # Features (independent variable)
y = data['Sales']                # Target (dependent variable)

# Split the data into training and testing sets (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
print(f"\nTraining set size: {X_train.shape[0]} samples")
print(f"Testing set size: {X_test.shape[0]} samples")

# Create and train the linear regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Retrieve model coefficients
intercept = model.intercept_
coefficient = model.coef_[0]
print(f"\nModel equation: Sales = {intercept:.2f} + {coefficient:.2f} × Advertising_Spend")

# Make predictions
y_train_pred = model.predict(X_train)
y_test_pred = model.predict(X_test)

# Evaluate the model
train_mse = mean_squared_error(y_train, y_train_pred)
train_rmse = np.sqrt(train_mse)
train_r2 = r2_score(y_train, y_train_pred)

test_mse = mean_squared_error(y_test, y_test_pred)
test_rmse = np.sqrt(test_mse)
test_r2 = r2_score(y_test, y_test_pred)

print("\nModel Evaluation Metrics:")
print(f"Training set - MSE: {train_mse:.2f}, RMSE: {train_rmse:.2f}, R²: {train_r2:.4f}")
print(f"Testing set  - MSE: {test_mse:.2f}, RMSE: {test_rmse:.2f}, R²: {test_r2:.4f}")

# Visualize the regression results
plt.figure(figsize=(12, 7))

# Plot original data points
plt.scatter(X_test, y_test, color='blue', alpha=0.7, label='Actual Sales')

# Sort X_test values for a smooth line plot
X_line = np.linspace(X.min(), X.max(), 100).reshape(-1, 1)
y_line = model.predict(X_line)
plt.plot(X_line, y_line, color='red', linewidth=2, label='Regression Line')

# Add confidence interval (approximation)
y_line_std = np.sqrt(np.sum((y_test - y_test_pred) ** 2) / (len(y_test) - 2))
plt.fill_between(
    X_line.ravel(),
    y_line.ravel() - 1.96 * y_line_std,
    y_line.ravel() + 1.96 * y_line_std,
    color='gray', alpha=0.2, label='95% Confidence Interval'
)

plt.title('Simple Linear Regression: Sales vs. Advertising Spend')
plt.xlabel('Advertising Spend ($)')
plt.ylabel('Sales ($)')
plt.grid(True, alpha=0.3)
plt.legend()
plt.savefig('sales_vs_advertising_regression.png')  # Save the plot
plt.close()

# Make example predictions for specific advertising spend values
example_spends = [50, 100, 150, 200]
predictions = model.predict(np.array(example_spends).reshape(-1, 1))

print("\nExample Predictions:")
for spend, pred in zip(example_spends, predictions):
    print(f"If Advertising Spend is ${spend:.2f}, predicted Sales: ${pred:.2f}")

# Business Interpretation
print("\nBusiness Interpretation:")
print(f"Intercept (β₀): ${intercept:.2f} - Expected sales with zero advertising")
print(f"Coefficient (β₁): {coefficient:.2f} - For every $1 increase in advertising, sales increase by ${coefficient:.2f}")

if coefficient > 0:
    roi = (coefficient - 1) / 1 * 100
    print(f"ROI: {roi:.2f}% - Every $1 spent on advertising generates ${coefficient:.2f} in sales")
    if roi > 0:
        print("Advertising appears profitable as ROI is positive")
    else:
        print("Advertising does not appear profitable as ROI is negative")
else:
    print("Advertising does not appear to have a positive effect on sales")

print(f"R² value: {test_r2:.4f} - This means approximately {test_r2*100:.2f}% of the variation in sales")
print("can be explained by the variation in advertising spend.")

# Assumptions check
print("\nRegression Assumptions Check (Basic):")

# Residuals for test set
residuals = y_test - y_test_pred

# Linearity & Homoscedasticity check (residuals vs. fitted values)
plt.figure(figsize=(10, 6))
plt.scatter(y_test_pred, residuals, alpha=0.7)
plt.axhline(y=0, color='r', linestyle='-')
plt.title('Residuals vs. Fitted Values (Check for Linearity & Homoscedasticity)')
plt.xlabel('Fitted Values')
plt.ylabel('Residuals')
plt.grid(True, alpha=0.3)
plt.savefig('residuals_vs_fitted.png')  # Save the plot
plt.close()

# Normality of residuals check
plt.figure(figsize=(10, 6))
plt.hist(residuals, bins=15, alpha=0.7, color='blue')
plt.title('Histogram of Residuals (Check for Normality)')
plt.xlabel('Residual Value')
plt.ylabel('Frequency')
plt.grid(True, alpha=0.3)
plt.savefig('residuals_histogram.png')  # Save the plot
plt.close()

print("Basic assumption checks completed and saved as images.")
print("Note: For a complete analysis, additional statistical tests would be recommended.")

# Let's add a prediction function for future use
def predict_sales(advertising_spend, model=model):
    """
    Predict sales based on advertising spend.
    
    Parameters:
    advertising_spend (float): Amount spent on advertising in dollars
    model: Trained linear regression model
    
    Returns:
    float: Predicted sales amount
    """
    return model.predict(np.array([[advertising_spend]]))[0]

print("\nPrediction function is ready to use!")
print("Example: predict_sales(250) = $", predict_sales(250))
