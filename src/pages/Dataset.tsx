
import React from 'react';
import DataTable from '@/components/dataset/DataTable';
import FeatureDescription from '@/components/dataset/FeatureDescription';
import DatasetStats from '@/components/dataset/DatasetStats';
import { diabetesData, datasetDescription, datasetStats } from '@/data/mockData';

const Dataset = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dataset Explorer</h1>
        <p className="text-muted-foreground">
          Explore the Pima Indians Diabetes Dataset used for training the prediction model
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <DataTable data={diabetesData} />
        </div>
        <div className="lg:col-span-1">
          <DatasetStats 
            totalRecords={datasetStats.totalRecords}
            missingValues={datasetStats.missingValues}
            diabeticPercentage={datasetStats.diabeticPercentage}
            nonDiabeticPercentage={datasetStats.nonDiabeticPercentage}
          />
        </div>
      </div>
      
      <FeatureDescription features={datasetDescription} />
      
      <div className="rounded-lg border p-6 bg-muted/40">
        <h2 className="text-xl font-semibold mb-4">About the Dataset</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            The Pima Indians Diabetes Dataset is a well-known dataset in machine learning and healthcare research. 
            It contains diagnostic measurements for females of Pima Indian heritage, along with a binary classification 
            indicating whether the patient developed diabetes within five years of the measurements.
          </p>
          <p>
            This dataset was collected by the National Institute of Diabetes and Digestive and Kidney Diseases, 
            and has been widely used to develop predictive models for diabetes diagnosis.
          </p>
          <p>
            <strong>Data Processing Notes:</strong> Zero values in columns like Glucose, Blood Pressure, Skin Thickness, 
            Insulin, and BMI are biologically implausible and represent missing data. These values were replaced with the 
            median of each respective column before training the model. Additionally, the dataset shows class imbalance 
            with more non-diabetic than diabetic cases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dataset;
