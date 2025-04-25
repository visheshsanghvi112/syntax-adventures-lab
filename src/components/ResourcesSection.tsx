
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, BookOpen, FileText } from 'lucide-react';
import { Resource } from '@/types/course';

interface ResourcesSectionProps {
  resources: Resource[];
  title?: string;
  description?: string;
}

const ResourcesSection = ({ 
  resources, 
  title = "Additional Resources", 
  description = "Explore these resources to deepen your understanding of the topics covered."
}: ResourcesSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {resources.map((resource, index) => (
            <a 
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors flex items-center gap-3"
            >
              <div className="bg-primary/10 rounded-md p-2 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{resource.title}</h4>
                <p className="text-sm text-muted-foreground truncate">{resource.url}</p>
              </div>
              <div className="text-muted-foreground">
                <ExternalLink className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;
