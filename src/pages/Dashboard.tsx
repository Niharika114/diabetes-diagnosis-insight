
import React from 'react';
import StatCard from '@/components/dashboard/StatCard';
import FeatureImportanceChart from '@/components/dashboard/FeatureImportanceChart';
import ConfusionMatrix from '@/components/dashboard/ConfusionMatrix';
import DataDistributionChart from '@/components/dashboard/DataDistributionChart';
import { 
  Activity, 
  BarChart3, 
  UserRound, 
  LineChart,
  HeartPulse,
  Scale,
  Dna
} from 'lucide-react';
import { 
  datasetStats, 
  modelPerformance,
  featureDistribution
} from '@/data/mockData';

const Dashboard = () => {
  // Transform feature distribution data for the charts
  const prepareChartData = (feature: string) => {
    const data = featureDistribution.find(d => d.feature === feature);
    if (!data) return [];
    
    return data.diabetic.map((item, index) => ({
      range: item.range,
      diabetic: item.count,
      nonDiabetic: data.nonDiabetic[index].count
    }));
  };
  
  const glucoseData = prepareChartData('Glucose');
  const bmiData = prepareChartData('BMI');
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of diabetes prediction model and dataset insights
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Model Accuracy"
          value={`${(modelPerformance.accuracy * 100).toFixed(1)}%`}
          description="Overall prediction accuracy on test set"
          icon={<Activity />}
          trend={{ value: 3.2, isPositive: true }}
        />
        <StatCard
          title="Dataset Size"
          value={datasetStats.totalRecords}
          description="Total records in the dataset"
          icon={<BarChart3 />}
        />
        <StatCard
          title="Diabetes Rate"
          value={`${datasetStats.diabeticPercentage}%`}
          description="Percentage of diabetic patients"
          icon={<UserRound />}
        />
        <StatCard
          title="AUC Score"
          value={modelPerformance.auc.toFixed(2)}
          description="Area Under ROC Curve"
          icon={<LineChart />}
          trend={{ value: 2.8, isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FeatureImportanceChart data={datasetStats.featureImpactOnModel} />
        <ConfusionMatrix data={modelPerformance.confusionMatrix} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataDistributionChart 
          title="Glucose Level Distribution" 
          data={glucoseData} 
        />
        <DataDistributionChart 
          title="BMI Distribution" 
          data={bmiData} 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 flex items-center">
          <div className="mr-4 bg-blue-100 p-2 rounded-full">
            <HeartPulse className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium">Average Glucose</h3>
            <p className="text-xl font-bold">121 mg/dL</p>
            <p className="text-xs text-muted-foreground">Above 126 mg/dL indicates diabetes</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 flex items-center">
          <div className="mr-4 bg-blue-100 p-2 rounded-full">
            <Scale className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium">Average BMI</h3>
            <p className="text-xl font-bold">32.4 kg/m²</p>
            <p className="text-xs text-muted-foreground">Above 30 kg/m² indicates obesity</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 flex items-center">
          <div className="mr-4 bg-blue-100 p-2 rounded-full">
            <Dna className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium">Genetic Factor</h3>
            <p className="text-xl font-bold">0.472</p>
            <p className="text-xs text-muted-foreground">Average diabetes pedigree function</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
