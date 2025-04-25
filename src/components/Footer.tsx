
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Github, Twitter, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-border mt-auto bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary rounded-md w-8 h-8 flex items-center justify-center">
                <BookOpen className="text-white h-5 w-5" />
              </div>
              <span className="text-xl font-bold">Syntax Adventures Lab</span>
            </div>
            <p className="text-muted-foreground">
              An interactive platform for learning programming languages and computer science concepts.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/visheshsanghvi112" className="text-muted-foreground hover:text-foreground" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.visheshsanghvi.me/" className="text-muted-foreground hover:text-foreground" aria-label="Portfolio">
                <Code className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Learning Paths</h3>
            <ul className="space-y-2">
              <li><Link to="/courses/python-fundamentals" className="text-muted-foreground hover:text-foreground">Python Fundamentals</Link></li>
              <li><Link to="/courses/web-development" className="text-muted-foreground hover:text-foreground">Web Development</Link></li>
              <li><Link to="/courses/data-science" className="text-muted-foreground hover:text-foreground">Data Science</Link></li>
              <li><Link to="/courses/machine-learning" className="text-muted-foreground hover:text-foreground">Machine Learning</Link></li>
              <li><Link to="/courses/algorithms" className="text-muted-foreground hover:text-foreground">Algorithms & Data Structures</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/documentation" className="text-muted-foreground hover:text-foreground">Documentation</Link></li>
              <li><Link to="/resources/tutorials" className="text-muted-foreground hover:text-foreground">Tutorials</Link></li>
              <li><Link to="/resources/challenges" className="text-muted-foreground hover:text-foreground">Code Challenges</Link></li>
              <li><Link to="/resources/community" className="text-muted-foreground hover:text-foreground">Community Forum</Link></li>
              <li><Link to="/resources/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Syntax Adventures Lab. All rights reserved by <a href="https://www.visheshsanghvi.me/" className="hover:text-primary transition-colors">Vishesh Sanghvi</a>.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
