
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

// Course Pages
import PythonBasics from "./pages/courses/PythonBasics";
import PythonIntermediate from "./pages/courses/PythonIntermediate";
import PythonAdvanced from "./pages/courses/PythonAdvanced";
import WebDevelopment from "./pages/courses/WebDevelopment";
import DataScience from "./pages/courses/DataScience";

// Resource Pages
import Documentation from "./pages/resources/Documentation";
import Tutorials from "./pages/resources/Tutorials";
import CheatSheets from "./pages/resources/CheatSheets";
import Community from "./pages/resources/Community";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/python-basics" element={<PythonBasics />} />
          <Route path="/courses/python-intermediate" element={<PythonIntermediate />} />
          <Route path="/courses/python-advanced" element={<PythonAdvanced />} />
          <Route path="/courses/web-development" element={<WebDevelopment />} />
          <Route path="/courses/data-science" element={<DataScience />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/tutorials" element={<Tutorials />} />
          <Route path="/resources/cheat-sheets" element={<CheatSheets />} />
          <Route path="/resources/community" element={<Community />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
