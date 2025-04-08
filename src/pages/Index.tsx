
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Activity, Dna, FileStack, HeartPulse, LayoutDashboard, BarChart3 } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-[90vh] flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row gap-8 py-12">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Diabetes Diagnosis <br />
            <span className="text-primary">Insight Tool</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Explore and predict diabetes risk using machine learning on the Pima Indians Diabetes Dataset.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => navigate('/prediction')}
            >
              <Activity className="h-5 w-5" />
              Try Prediction Tool
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2"
              onClick={() => navigate('/dashboard')}
            >
              <LayoutDashboard className="h-5 w-5" />
              View Dashboard
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-md border bg-background/50">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <HeartPulse className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">78% Accuracy</p>
                <p className="text-xs text-muted-foreground">Model performance</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-md border bg-background/50">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FileStack className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">768 Records</p>
                <p className="text-xs text-muted-foreground">Dataset size</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-md border bg-background/50">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">8 Features</p>
                <p className="text-xs text-muted-foreground">Diagnostic measures</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
          <div className="relative flex items-center justify-center w-full max-w-md aspect-square">
            <div className="absolute inset-0 border-4 border-dashed border-primary/40 rounded-full animate-spin-slow"></div>
            <div className="bg-white p-6 rounded-full shadow-xl z-10 flex items-center justify-center">
              <Dna className="h-24 w-24 text-primary" />
            </div>
            <div className="absolute top-0 right-0 bg-white p-3 rounded-full shadow-lg">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
                <HeartPulse className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="absolute bottom-10 left-0 bg-white p-3 rounded-full shadow-lg">
              <div className="h-12 w-12 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-12 px-4 bg-muted/30 rounded-lg border">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FileStack className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">1. Data Processing</h3>
            <p className="text-sm text-muted-foreground">
              The model is trained on the Pima Indians Diabetes Dataset with preprocessing to handle missing values.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">2. Model Training</h3>
            <p className="text-sm text-muted-foreground">
              A logistic regression model identifies patterns in patient data that correlate with diabetes diagnosis.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">3. Risk Prediction</h3>
            <p className="text-sm text-muted-foreground">
              Enter patient measurements to receive a diabetes risk assessment based on the trained model.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg text-center">
        <p className="text-amber-800 font-medium">
          Educational Tool Only - Not for Clinical Use
        </p>
        <p className="text-amber-700 text-sm">
          This application is designed for educational purposes to demonstrate machine learning in healthcare.
          It should not be used for actual medical diagnosis or treatment decisions.
        </p>
      </div>
    </div>
  );
};

export default Index;
