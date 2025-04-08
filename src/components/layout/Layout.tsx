
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <footer className="border-t py-4 bg-muted/40">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Diabetes Diagnosis Insight Tool - Educational Use Only</p>
          <p>© {new Date().getFullYear()} - Not for clinical use</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
