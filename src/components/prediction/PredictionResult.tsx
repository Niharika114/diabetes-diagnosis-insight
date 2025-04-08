
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  AlertTriangle, 
  CheckCircle2, 
  AlertCircle, 
  Info 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface PredictionResultProps {
  probability: number;
  features: Record<string, number>;
  className?: string;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ 
  probability, 
  features, 
  className 
}) => {
  // Get the key factors (simplified approach)
  const keyFactors = () => {
    const factors = [];
    
    if (features.glucose > 125) {
      factors.push({
        name: 'Glucose', 
        value: `${features.glucose} mg/dL`, 
        severity: features.glucose > 140 ? 'high' : 'medium',
        description: 'Elevated blood glucose level'
      });
    }
    
    if (features.bmi > 30) {
      factors.push({
        name: 'BMI', 
        value: `${features.bmi.toFixed(1)} kg/m²`, 
        severity: features.bmi > 35 ? 'high' : 'medium',
        description: 'Elevated body mass index'
      });
    }
    
    if (features.age > 45) {
      factors.push({
        name: 'Age', 
        value: `${features.age} years`, 
        severity: features.age > 60 ? 'high' : 'medium',
        description: 'Increased age risk factor'
      });
    }
    
    if (features.diabetesPedigreeFunction > 0.8) {
      factors.push({
        name: 'Diabetes Pedigree Function', 
        value: `${features.diabetesPedigreeFunction.toFixed(3)}`, 
        severity: features.diabetesPedigreeFunction > 1.0 ? 'high' : 'medium',
        description: 'Genetic predisposition to diabetes'
      });
    }
    
    return factors.slice(0, 3); // Return top 3 factors
  };
  
  const factors = keyFactors();
  
  return (
    <Card className={cn(
      "overflow-hidden",
      probability > 0.7 ? "border-red-400" : 
      probability > 0.4 ? "border-amber-400" : 
      "border-green-400",
      className
    )}>
      <div className={cn(
        "h-2",
        probability > 0.7 ? "bg-red-500" : 
        probability > 0.4 ? "bg-amber-500" : 
        "bg-green-500"
      )} />
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Prediction Result</span>
          {probability > 0.7 ? (
            <AlertTriangle className="h-5 w-5 text-red-500" />
          ) : probability > 0.4 ? (
            <AlertCircle className="h-5 w-5 text-amber-500" />
          ) : (
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Diabetes Risk</span>
            <span className="text-sm font-medium">{(probability * 100).toFixed(1)}%</span>
          </div>
          <Progress value={probability * 100} className="h-3" />
          
          <div className="mt-3 p-3 rounded-md text-sm font-medium text-center border">
            {probability > 0.7 ? (
              <span className="text-red-600">High Risk of Diabetes</span>
            ) : probability > 0.4 ? (
              <span className="text-amber-600">Moderate Risk of Diabetes</span>
            ) : (
              <span className="text-green-600">Low Risk of Diabetes</span>
            )}
          </div>
        </div>
        
        {factors.length > 0 && (
          <div>
            <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
              <Info className="h-4 w-4" />
              <span>Key Risk Factors</span>
            </h3>
            <div className="space-y-2">
              {factors.map((factor, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-md border">
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      factor.severity === 'high' ? "bg-red-500" : "bg-amber-500"
                    )} />
                    <span className="text-sm">{factor.name}</span>
                  </div>
                  <span className="text-sm font-medium">{factor.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="bg-muted/50 px-6 py-3 text-xs text-muted-foreground">
        <div className="space-y-1 w-full">
          <p className="flex items-center gap-1">
            <AlertTriangle className="h-3 w-3 text-amber-500" />
            <span>This prediction is for educational purposes only and should not be used for clinical diagnosis.</span>
          </p>
          <p>Consult a healthcare professional for proper medical advice and diagnosis.</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PredictionResult;
