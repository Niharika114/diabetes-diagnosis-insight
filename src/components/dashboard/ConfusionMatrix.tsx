
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ConfusionMatrixProps {
  data: {
    truePositive: number;
    falsePositive: number;
    trueNegative: number;
    falseNegative: number;
  };
  className?: string;
}

const ConfusionMatrix: React.FC<ConfusionMatrixProps> = ({ data, className }) => {
  const { truePositive, falsePositive, trueNegative, falseNegative } = data;
  const total = truePositive + falsePositive + trueNegative + falseNegative;
  
  const formatPercentage = (value: number) => {
    return ((value / total) * 100).toFixed(1) + '%';
  };
  
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Confusion Matrix</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 text-center">
          <div className="col-span-1"></div>
          <div className="font-medium">Predicted Negative</div>
          <div className="font-medium">Predicted Positive</div>
          
          <div className="font-medium">Actual Negative</div>
          <div className={cn(
            "p-4 m-1 flex flex-col items-center justify-center",
            "bg-success bg-opacity-20 border border-success rounded-md"
          )}>
            <span className="text-lg font-bold">{trueNegative}</span>
            <span className="text-xs text-muted-foreground">({formatPercentage(trueNegative)})</span>
            <span className="text-xs mt-1">True Negative</span>
          </div>
          <div className={cn(
            "p-4 m-1 flex flex-col items-center justify-center",
            "bg-destructive bg-opacity-20 border border-destructive rounded-md"
          )}>
            <span className="text-lg font-bold">{falsePositive}</span>
            <span className="text-xs text-muted-foreground">({formatPercentage(falsePositive)})</span>
            <span className="text-xs mt-1">False Positive</span>
          </div>
          
          <div className="font-medium">Actual Positive</div>
          <div className={cn(
            "p-4 m-1 flex flex-col items-center justify-center",
            "bg-destructive bg-opacity-20 border border-destructive rounded-md"
          )}>
            <span className="text-lg font-bold">{falseNegative}</span>
            <span className="text-xs text-muted-foreground">({formatPercentage(falseNegative)})</span>
            <span className="text-xs mt-1">False Negative</span>
          </div>
          <div className={cn(
            "p-4 m-1 flex flex-col items-center justify-center",
            "bg-success bg-opacity-20 border border-success rounded-md"
          )}>
            <span className="text-lg font-bold">{truePositive}</span>
            <span className="text-xs text-muted-foreground">({formatPercentage(truePositive)})</span>
            <span className="text-xs mt-1">True Positive</span>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-muted-foreground">
          <p>• <strong>True Positive</strong>: Correctly predicted diabetic patients</p>
          <p>• <strong>True Negative</strong>: Correctly predicted non-diabetic patients</p>
          <p>• <strong>False Positive</strong>: Incorrectly predicted diabetic (Type I error)</p>
          <p>• <strong>False Negative</strong>: Incorrectly predicted non-diabetic (Type II error)</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConfusionMatrix;
