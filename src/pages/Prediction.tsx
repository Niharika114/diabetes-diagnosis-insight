
import React, { useState } from 'react';
import FeatureInput from '@/components/prediction/FeatureInput';
import PredictionResult from '@/components/prediction/PredictionResult';
import ModelDetails from '@/components/prediction/ModelDetails';
import { useToast } from '@/components/ui/use-toast';

const Prediction = () => {
  const { toast } = useToast();
  const [featureData, setFeatureData] = useState({
    pregnancies: 3,
    glucose: 120,
    bloodPressure: 70,
    skinThickness: 20,
    insulin: 79,
    bmi: 32,
    diabetesPedigreeFunction: 0.3,
    age: 45
  });
  
  const [showPrediction, setShowPrediction] = useState(false);
  const [predictionProbability, setPredictionProbability] = useState(0);
  
  const handleFeatureChange = (updatedData: typeof featureData) => {
    setFeatureData(updatedData);
    // Reset prediction when inputs change
    if (showPrediction) {
      setShowPrediction(false);
    }
  };
  
  const handlePredict = () => {
    // Simulated logistic regression prediction
    // In a real application, this would call an API with the model
    
    // Basic simulation of a logistic regression model
    const calculateProbability = () => {
      // These coefficients are arbitrary and for demonstration only
      const coefficients = {
        intercept: -6.5,
        pregnancies: 0.08,
        glucose: 0.03,
        bloodPressure: 0.002,
        skinThickness: 0.001,
        insulin: 0.0002,
        bmi: 0.09,
        diabetesPedigreeFunction: 0.8,
        age: 0.02
      };
      
      // Calculate logit (log-odds)
      let logit = coefficients.intercept;
      logit += coefficients.pregnancies * featureData.pregnancies;
      logit += coefficients.glucose * featureData.glucose;
      logit += coefficients.bloodPressure * featureData.bloodPressure;
      logit += coefficients.skinThickness * featureData.skinThickness;
      logit += coefficients.insulin * featureData.insulin;
      logit += coefficients.bmi * featureData.bmi;
      logit += coefficients.diabetesPedigreeFunction * featureData.diabetesPedigreeFunction;
      logit += coefficients.age * featureData.age;
      
      // Convert logit to probability using sigmoid function
      const probability = 1 / (1 + Math.exp(-logit));
      
      // Add some randomness to make it look more realistic
      const noise = Math.random() * 0.1 - 0.05; // Random noise between -0.05 and 0.05
      let finalProb = probability + noise;
      
      // Ensure probability stays between 0 and 1
      finalProb = Math.max(0, Math.min(1, finalProb));
      
      return finalProb;
    };
    
    // Calculate the prediction probability
    const probability = calculateProbability();
    setPredictionProbability(probability);
    setShowPrediction(true);
    
    toast({
      title: "Prediction Complete",
      description: `Diabetes risk assessment calculated with ${(probability * 100).toFixed(1)}% risk.`,
    });
  };
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Diabetes Risk Prediction</h1>
        <p className="text-muted-foreground">
          Enter patient data to predict the risk of diabetes using our logistic regression model
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <FeatureInput 
            data={featureData}
            onChange={handleFeatureChange}
            onPredict={handlePredict}
          />
        </div>
        <div className="lg:col-span-2">
          {showPrediction ? (
            <PredictionResult 
              probability={predictionProbability}
              features={featureData}
            />
          ) : (
            <div className="h-full flex items-center justify-center p-8 border rounded-lg bg-muted/20">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">No Prediction Yet</h3>
                <p className="text-muted-foreground">
                  Enter patient data and click "Predict Diabetes Risk" to see results
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <ModelDetails />
    </div>
  );
};

export default Prediction;
