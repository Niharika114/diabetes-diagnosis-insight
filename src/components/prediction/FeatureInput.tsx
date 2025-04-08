
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { ArrowRight } from 'lucide-react';
import { referenceRanges } from '@/data/mockData';

interface FeatureInputData {
  pregnancies: number;
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  insulin: number;
  bmi: number;
  diabetesPedigreeFunction: number;
  age: number;
}

interface FeatureInputProps {
  data: FeatureInputData;
  onChange: (data: FeatureInputData) => void;
  onPredict: () => void;
  className?: string;
}

const FeatureInput: React.FC<FeatureInputProps> = ({ 
  data, 
  onChange, 
  onPredict, 
  className 
}) => {
  const handleChange = (field: keyof FeatureInputData, value: number) => {
    onChange({ ...data, [field]: value });
  };

  const getGlucoseColor = (value: number) => {
    const { normal, prediabetic, diabetic } = referenceRanges.glucose;
    if (value <= normal.max) return "text-green-600";
    if (value <= prediabetic.max) return "text-amber-600";
    return "text-red-600";
  };

  const getBMIColor = (value: number) => {
    const { underweight, normal, overweight, obese } = referenceRanges.bmi;
    if (value <= underweight.max) return "text-amber-600";
    if (value <= normal.max) return "text-green-600";
    if (value <= overweight.max) return "text-amber-600";
    return "text-red-600";
  };

  const getBPColor = (value: number) => {
    const { normal, elevated, high } = referenceRanges.bloodPressure;
    if (value <= normal.max) return "text-green-600";
    if (value <= elevated.max) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Enter Patient Data</CardTitle>
        <CardDescription>
          Input diagnostic measurements to predict diabetes risk
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="pregnancies">Pregnancies</Label>
              <div className="flex items-center gap-4">
                <Slider 
                  id="pregnancies"
                  value={[data.pregnancies]} 
                  min={0} 
                  max={20} 
                  step={1}
                  onValueChange={(value) => handleChange('pregnancies', value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={data.pregnancies}
                  onChange={(e) => handleChange('pregnancies', Number(e.target.value))}
                  className="w-16 feature-input"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Previous pregnancies (0-20)</p>
            </div>

            <div>
              <Label htmlFor="glucose" className="flex justify-between">
                <span>Glucose</span>
                <span className={getGlucoseColor(data.glucose)}>
                  {
                    data.glucose <= referenceRanges.glucose.normal.max ? "Normal" :
                    data.glucose <= referenceRanges.glucose.prediabetic.max ? "Prediabetic" : "Diabetic"
                  }
                </span>
              </Label>
              <div className="flex items-center gap-4">
                <Slider 
                  id="glucose"
                  value={[data.glucose]} 
                  min={0} 
                  max={250} 
                  step={1}
                  onValueChange={(value) => handleChange('glucose', value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={data.glucose}
                  onChange={(e) => handleChange('glucose', Number(e.target.value))}
                  className="w-16 feature-input"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Plasma glucose concentration (mg/dL)</p>
            </div>

            <div>
              <Label htmlFor="bloodPressure" className="flex justify-between">
                <span>Blood Pressure</span>
                <span className={getBPColor(data.bloodPressure)}>
                  {
                    data.bloodPressure <= referenceRanges.bloodPressure.normal.max ? "Normal" :
                    data.bloodPressure <= referenceRanges.bloodPressure.elevated.max ? "Elevated" : "High"
                  }
                </span>
              </Label>
              <div className="flex items-center gap-4">
                <Slider 
                  id="bloodPressure"
                  value={[data.bloodPressure]} 
                  min={0} 
                  max={140} 
                  step={1}
                  onValueChange={(value) => handleChange('bloodPressure', value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={data.bloodPressure}
                  onChange={(e) => handleChange('bloodPressure', Number(e.target.value))}
                  className="w-16 feature-input"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Diastolic blood pressure (mm Hg)</p>
            </div>

            <div>
              <Label htmlFor="skinThickness">Skin Thickness</Label>
              <div className="flex items-center gap-4">
                <Slider 
                  id="skinThickness"
                  value={[data.skinThickness]} 
                  min={0} 
                  max={100} 
                  step={1}
                  onValueChange={(value) => handleChange('skinThickness', value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={data.skinThickness}
                  onChange={(e) => handleChange('skinThickness', Number(e.target.value))}
                  className="w-16 feature-input"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Triceps skin fold thickness (mm)</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="insulin">Insulin</Label>
              <div className="flex items-center gap-4">
                <Slider 
                  id="insulin"
                  value={[data.insulin]} 
                  min={0} 
                  max={850} 
                  step={1}
                  onValueChange={(value) => handleChange('insulin', value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={data.insulin}
                  onChange={(e) => handleChange('insulin', Number(e.target.value))}
                  className="w-16 feature-input"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">2-Hour serum insulin (mu U/ml)</p>
            </div>

            <div>
              <Label htmlFor="bmi" className="flex justify-between">
                <span>BMI</span>
                <span className={getBMIColor(data.bmi)}>
                  {
                    data.bmi <= referenceRanges.bmi.underweight.max ? "Underweight" :
                    data.bmi <= referenceRanges.bmi.normal.max ? "Normal" :
                    data.bmi <= referenceRanges.bmi.overweight.max ? "Overweight" : "Obese"
                  }
                </span>
              </Label>
              <div className="flex items-center gap-4">
                <Slider 
                  id="bmi"
                  value={[data.bmi]} 
                  min={10} 
                  max={70} 
                  step={0.1}
                  onValueChange={(value) => handleChange('bmi', value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={data.bmi}
                  onChange={(e) => handleChange('bmi', Number(e.target.value))}
                  className="w-16 feature-input"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Body mass index (kg/m²)</p>
            </div>

            <div>
              <Label htmlFor="diabetesPedigreeFunction">Diabetes Pedigree Function</Label>
              <div className="flex items-center gap-4">
                <Slider 
                  id="diabetesPedigreeFunction"
                  value={[data.diabetesPedigreeFunction]} 
                  min={0.078} 
                  max={2.42} 
                  step={0.001}
                  onValueChange={(value) => handleChange('diabetesPedigreeFunction', value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={data.diabetesPedigreeFunction.toFixed(3)}
                  onChange={(e) => handleChange('diabetesPedigreeFunction', Number(e.target.value))}
                  className="w-16 feature-input"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Genetic score (0.078-2.42)</p>
            </div>

            <div>
              <Label htmlFor="age">Age</Label>
              <div className="flex items-center gap-4">
                <Slider 
                  id="age"
                  value={[data.age]} 
                  min={21} 
                  max={90} 
                  step={1}
                  onValueChange={(value) => handleChange('age', value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={data.age}
                  onChange={(e) => handleChange('age', Number(e.target.value))}
                  className="w-16 feature-input"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Patient age in years (21-90)</p>
            </div>
          </div>
        </div>

        <Button 
          onClick={onPredict} 
          className="w-full mt-6"
        >
          Predict Diabetes Risk
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureInput;
