
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  defaultCode?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ defaultCode = 'print("Hello, World!")' }) => {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const { toast } = useToast();

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  const executeCode = () => {
    setIsExecuting(true);
    setOutput('');
    
    // Simulate code execution (this would connect to a real Python interpreter in production)
    try {
      // Very simple simulation of Python execution for demonstration purposes
      let simulatedOutput = '';
      
      // Handle the print function
      const printRegex = /print\(["'](.+?)["']\)/g;
      let match;
      while ((match = printRegex.exec(code)) !== null) {
        simulatedOutput += match[1] + '\n';
      }
      
      // Simulate some basic variable assignments
      const variableAssignments: Record<string, any> = {};
      const assignmentRegex = /(\w+)\s*=\s*(.+)/g;
      let assignmentMatch;
      while ((assignmentMatch = assignmentRegex.exec(code)) !== null) {
        const varName = assignmentMatch[1];
        let varValue = assignmentMatch[2].trim();
        
        // Very basic evaluation of variable values
        if (varValue.startsWith('"') && varValue.endsWith('"')) {
          variableAssignments[varName] = varValue.slice(1, -1);
        } else if (!isNaN(Number(varValue))) {
          variableAssignments[varName] = Number(varValue);
        } else {
          variableAssignments[varName] = varValue;
        }
      }
      
      // Find print statements with variables
      const printVarRegex = /print\((\w+)\)/g;
      let varMatch;
      while ((varMatch = printVarRegex.exec(code)) !== null) {
        const varName = varMatch[1];
        if (varName in variableAssignments) {
          simulatedOutput += variableAssignments[varName] + '\n';
        } else {
          throw new Error(`NameError: name '${varName}' is not defined`);
        }
      }
      
      // If nothing was "printed", show a helpful message
      if (!simulatedOutput) {
        simulatedOutput = '# Code executed successfully, but no output was generated.\n# Try adding a print() statement to see the results.';
      }
      
      setOutput(simulatedOutput);
    } catch (error) {
      if (error instanceof Error) {
        setOutput(`Error: ${error.message}`);
      } else {
        setOutput('An unknown error occurred');
      }
    }
    
    setTimeout(() => {
      setIsExecuting(false);
      toast({
        title: "Code Executed",
        description: "Your code has been run in the simulator.",
      });
    }, 500);
  };

  return (
    <div className="rounded-md border overflow-hidden">
      <div className="bg-muted p-2 border-b flex items-center justify-between">
        <h3 className="font-medium">Python Editor</h3>
        <Button 
          size="sm" 
          onClick={executeCode} 
          disabled={isExecuting}
          className="gap-2"
        >
          <Play className="h-4 w-4" />
          Run Code
        </Button>
      </div>
      <div className="code-editor-container" style={{ minHeight: "200px" }}>
        <Editor
          height="200px"
          defaultLanguage="python"
          defaultValue={defaultCode}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            fontSize: 14,
            fontFamily: "'Fira Code', monospace",
            tabSize: 4,
            insertSpaces: true,
            automaticLayout: true,
          }}
          theme="vs-dark"
        />
      </div>
      {output && (
        <div className="border-t">
          <div className="bg-muted p-2 border-b">
            <h3 className="font-medium">Output</h3>
          </div>
          <pre className="p-4 font-mono text-sm whitespace-pre-wrap bg-background max-h-64 overflow-auto">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
