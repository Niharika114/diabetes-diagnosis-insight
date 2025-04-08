
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DiabetesDataItem } from '@/data/mockData';

interface DataTableProps {
  data: DiabetesDataItem[];
  className?: string;
}

const DataTable: React.FC<DataTableProps> = ({ data, className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Pima Indians Diabetes Dataset</CardTitle>
        <CardDescription>
          First 10 records from the dataset (of {768} total records)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Pregnancies</TableHead>
                <TableHead>Glucose</TableHead>
                <TableHead>Blood Pressure</TableHead>
                <TableHead>Skin Thickness</TableHead>
                <TableHead>Insulin</TableHead>
                <TableHead>BMI</TableHead>
                <TableHead>DPF</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Outcome</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.pregnancies}</TableCell>
                  <TableCell>{row.glucose}</TableCell>
                  <TableCell>{row.bloodPressure}</TableCell>
                  <TableCell>{row.skinThickness}</TableCell>
                  <TableCell>{row.insulin}</TableCell>
                  <TableCell>{row.bmi.toFixed(1)}</TableCell>
                  <TableCell>{row.diabetesPedigreeFunction.toFixed(3)}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      row.outcome === 1 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-green-100 text-green-800'
                    }`}>
                      {row.outcome === 1 ? 'Diabetic' : 'Non-diabetic'}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          <p>• The dataset contains medical records for 768 female patients of Pima Indian heritage.</p>
          <p>• Zero values in some columns (Glucose, Blood Pressure, Skin Thickness, Insulin, BMI) indicate missing data.</p>
          <p>• DPF = Diabetes Pedigree Function (genetic score).</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataTable;
