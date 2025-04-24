
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const Playground = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">Code Playground</h1>
        
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="python">
              <TabsList className="mb-4">
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="html">HTML/CSS</TabsTrigger>
              </TabsList>
              
              <TabsContent value="python" className="space-y-4">
                <div className="bg-muted p-4 rounded-md min-h-[300px]">
                  <pre><code># Your Python code here</code></pre>
                </div>
                <Button>Run Code</Button>
              </TabsContent>
              
              {/* Add other TabsContent for JavaScript and HTML/CSS */}
            </Tabs>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Playground;
