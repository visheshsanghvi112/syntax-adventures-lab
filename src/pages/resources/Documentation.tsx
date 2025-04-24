
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Programming Documentation</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive reference guides and documentation for various programming languages and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Python Documentation",
                description: "Official Python language reference and library documentation",
                url: "https://docs.python.org/3/",
                topics: ["Built-in Functions", "Standard Library", "Language Reference"]
              },
              {
                title: "JavaScript MDN Docs",
                description: "Mozilla Developer Network's comprehensive JavaScript documentation",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                topics: ["Language Basics", "DOM API", "Web APIs"]
              },
              // Add more documentation resources
            ].map((doc, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5" />
                    {doc.title}
                  </CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {doc.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href={doc.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      View Documentation
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
