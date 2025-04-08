
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

interface Feature {
  feature: string;
  description: string;
  range: string;
  units: string;
  importance: string;
}

interface FeatureDescriptionProps {
  features: Feature[];
  className?: string;
}

const FeatureDescription: React.FC<FeatureDescriptionProps> = ({ features, className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Feature Descriptions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Range</TableHead>
                <TableHead>Units</TableHead>
                <TableHead>Importance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{feature.feature}</TableCell>
                  <TableCell>{feature.description}</TableCell>
                  <TableCell>{feature.range}</TableCell>
                  <TableCell>{feature.units}</TableCell>
                  <TableCell>{feature.importance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          <p>• <strong>Pregnancies</strong>: Indicates number of pregnancies, higher number slightly increases diabetes risk.</p>
          <p>• <strong>Glucose</strong>: Measures blood sugar level in oral glucose tolerance test. High values strongly suggest diabetes.</p>
          <p>• <strong>BMI</strong>: Values above 30 indicate obesity, a major risk factor for type 2 diabetes.</p>
          <p>• <strong>DiabetesPedigreeFunction</strong>: Scores family history of diabetes; higher values indicate stronger genetic predisposition.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureDescription;
