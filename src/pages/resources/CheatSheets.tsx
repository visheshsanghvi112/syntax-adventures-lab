
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheatSheets = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Programming Cheat Sheets</h1>
            <p className="text-lg text-muted-foreground">
              Quick reference guides to help you remember syntax, functions, and common patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Python Cheat Sheet",
                description: "Quick reference for Python syntax, built-in functions and common operations",
                format: "PDF",
                fileSize: "1.2 MB",
                pages: 4
              },
              {
                title: "Git Commands Cheat Sheet",
                description: "Essential Git commands for version control workflows",
                format: "PDF",
                fileSize: "0.8 MB",
                pages: 3
              },
              {
                title: "CSS Flexbox Cheat Sheet",
                description: "Visual guide to CSS flexbox properties and values",
                format: "PDF",
                fileSize: "1.5 MB",
                pages: 2
              },
              {
                title: "Regular Expressions Cheat Sheet",
                description: "Common regex patterns and syntax for pattern matching",
                format: "PDF",
                fileSize: "0.9 MB",
                pages: 3
              },
              {
                title: "SQL Commands Cheat Sheet",
                description: "Quick reference for common SQL queries and operations",
                format: "PDF",
                fileSize: "1.1 MB",
                pages: 4
              },
              {
                title: "JavaScript Array Methods",
                description: "Comprehensive list of array methods with examples",
                format: "PDF",
                fileSize: "1.3 MB",
                pages: 5
              },
              {
                title: "HTML5 Tags Cheat Sheet",
                description: "Complete list of HTML5 tags with descriptions",
                format: "PDF",
                fileSize: "1.0 MB",
                pages: 6
              },
              {
                title: "React Hooks Cheat Sheet",
                description: "Guide to React hooks with usage examples",
                format: "PDF",
                fileSize: "0.7 MB",
                pages: 3
              },
              {
                title: "Linux Command Line Cheat Sheet",
                description: "Common Linux terminal commands for developers",
                format: "PDF",
                fileSize: "1.4 MB",
                pages: 5
              }
            ].map((sheet, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <FileText className="h-6 w-6 text-primary" />
                    <div className="text-xs text-muted-foreground">
                      {sheet.format} • {sheet.fileSize} • {sheet.pages} pages
                    </div>
                  </div>
                  <CardTitle className="mt-2">{sheet.title}</CardTitle>
                  <CardDescription>{sheet.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-col space-y-2">
                  <Button variant="default" className="w-full" asChild>
                    <Link to="#" className="flex items-center justify-center gap-2">
                      <Download className="h-4 w-4" /> Download
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="#" className="flex items-center justify-center gap-2">
                      <Eye className="h-4 w-4" /> Preview
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-muted/40 p-6 rounded-lg">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">Need More Resources?</h2>
              <p className="text-muted-foreground mb-6">
                We're constantly adding new cheat sheets. If you have suggestions or would like to contribute,
                please let us know!
              </p>
              <Button variant="outline">Request a Cheat Sheet</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheatSheets;
