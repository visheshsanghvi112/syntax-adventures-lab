
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { User, BookOpen, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

const Header = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignInClick = () => {
    toast({
      title: "Coming Soon!",
      description: "User accounts will be available in a future update.",
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="w-full border-b border-border sticky top-0 bg-background z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-md w-8 h-8 flex items-center justify-center">
              <BookOpen className="text-white h-5 w-5" />
            </div>
            <h1 className="text-xl font-bold">Syntax Adventures Lab</h1>
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            
            {mobileMenuOpen && (
              <div className="fixed inset-0 top-16 bg-background z-40 p-4">
                <nav className="flex flex-col gap-4">
                  <Link to="/" className="text-lg font-medium px-4 py-3 hover:bg-muted rounded-md" onClick={toggleMobileMenu}>Home</Link>
                  <Link to="/courses" className="text-lg font-medium px-4 py-3 hover:bg-muted rounded-md" onClick={toggleMobileMenu}>Courses</Link>
                  <Link to="/resources" className="text-lg font-medium px-4 py-3 hover:bg-muted rounded-md" onClick={toggleMobileMenu}>Resources</Link>
                  <Link to="/about" className="text-lg font-medium px-4 py-3 hover:bg-muted rounded-md" onClick={toggleMobileMenu}>About</Link>
                  <div className="border-t border-border my-2"></div>
                  <Button className="w-full" onClick={handleSignInClick}>
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <Link to="/courses" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                          <BookOpen className="h-6 w-6 mb-2" />
                          <div className="mb-2 mt-4 text-lg font-medium">All Courses</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explore our comprehensive collection of programming courses
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/courses/python" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Python</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            From basics to advanced concepts and libraries
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/courses/web-development" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Web Development</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            HTML, CSS, JavaScript and modern frameworks
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/courses/data-science" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Data Science</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Data analysis, visualization, and machine learning
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/resources" className={navigationMenuTriggerStyle()}>
                    Resources
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className={navigationMenuTriggerStyle()}>
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button variant="ghost" onClick={handleSignInClick}>
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
