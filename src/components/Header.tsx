
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { User, BookOpen } from 'lucide-react';

const Header = () => {
  const { toast } = useToast();

  const handleSignInClick = () => {
    toast({
      title: "Coming Soon!",
      description: "User accounts will be available in a future update.",
    });
  };

  return (
    <header className="w-full border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary rounded-md w-8 h-8 flex items-center justify-center">
            <BookOpen className="text-white h-5 w-5" />
          </div>
          <h1 className="text-xl font-bold">Syntax Adventures Lab</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={handleSignInClick}>
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
