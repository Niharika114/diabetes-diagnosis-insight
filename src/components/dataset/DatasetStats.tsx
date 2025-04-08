
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AlertCircle } from 'lucide-react';

interface MissingValues {
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  insulin: number;
  bmi: number;
}

interface DatasetStatsProps {
  totalRecords: number;
  missingValues: MissingValues;
  diabeticPercentage: number;
  nonDiabeticPercentage: number;
  className?: string;
}

const DatasetStats: React.FC<DatasetStatsProps> = ({
  totalRecords,
  missingValues,
  diabeticPercentage,
  nonDiabeticPercentage,
  className
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Dataset Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2">Class Distribution</h3>
            <div className="flex justify-between mb-1 text-xs">
              <span>Non-diabetic ({nonDiabeticPercentage}%)</span>
              <span>Diabetic ({diabeticPercentage}%)</span>
            </div>
            <div className="flex h-2 rounded overflow-hidden">
              <div 
                className="bg-green-500" 
                style={{ width: `${nonDiabeticPercentage}%` }}
              ></div>
              <div 
                className="bg-red-500" 
                style={{ width: `${diabeticPercentage}%` }}
              ></div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Total: {totalRecords} records - Class imbalance detected (more non-diabetic samples)
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-1 text-sm font-medium mb-2">
              <AlertCircle className="h-4 w-4 text-amber-500" />
              <span>Missing Values (Zeros)</span>
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1 text-xs">
                  <span>Glucose</span>
                  <span>{missingValues.glucose} records ({((missingValues.glucose/totalRecords)*100).toFixed(1)}%)</span>
                </div>
                <Progress value={(missingValues.glucose/totalRecords)*100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-xs">
                  <span>Blood Pressure</span>
                  <span>{missingValues.bloodPressure} records ({((missingValues.bloodPressure/totalRecords)*100).toFixed(1)}%)</span>
                </div>
                <Progress value={(missingValues.bloodPressure/totalRecords)*100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-xs">
                  <span>Skin Thickness</span>
                  <span>{missingValues.skinThickness} records ({((missingValues.skinThickness/totalRecords)*100).toFixed(1)}%)</span>
                </div>
                <Progress value={(missingValues.skinThickness/totalRecords)*100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-xs">
                  <span>Insulin</span>
                  <span>{missingValues.insulin} records ({((missingValues.insulin/totalRecords)*100).toFixed(1)}%)</span>
                </div>
                <Progress value={(missingValues.insulin/totalRecords)*100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-xs">
                  <span>BMI</span>
                  <span>{missingValues.bmi} records ({((missingValues.bmi/totalRecords)*100).toFixed(1)}%)</span>
                </div>
                <Progress value={(missingValues.bmi/totalRecords)*100} className="h-2" />
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Zero values in these columns are biologically implausible and treated as missing data.
              These were imputed with the median value for each column before model training.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DatasetStats;
