
import React from 'react';
import { Activity, Database, Braces } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <Activity className="mr-2 h-4 w-4" /> },
    { name: 'Dataset', path: '/dataset', icon: <Database className="mr-2 h-4 w-4" /> },
    { name: 'Prediction', path: '/prediction', icon: <Braces className="mr-2 h-4 w-4" /> }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <div className="mr-4 flex">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">Diabetes Diagnosis Insight</span>
          </div>
        </div>
        <nav className="flex flex-1 items-center justify-center sm:justify-end space-x-1 md:space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant={location.pathname === item.path ? "default" : "ghost"}
              size="sm"
              onClick={() => navigate(item.path)}
              className={cn(
                "h-9",
                location.pathname === item.path ? "" : "text-muted-foreground"
              )}
            >
              {item.icon}
              {item.name}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
