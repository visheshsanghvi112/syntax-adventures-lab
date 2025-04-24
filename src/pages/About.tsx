import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Code, Users, Award, Monitor, BookCheck, Rocket, Medal, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Mission to Transform Coding Education</h1>
              <p className="text-lg mb-6 text-muted-foreground">
                Syntax Adventures Lab was founded with a single goal: make learning to code accessible, engaging, and effective for everyone — regardless of their background or experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/courses">Explore Courses</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                <div className="bg-primary rounded-md w-24 h-24 flex items-center justify-center">
                  <BookOpen className="text-white h-12 w-12" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-muted/50 rounded-full -z-10"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                The journey that led to creating the most comprehensive interactive coding education platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Syntax Adventures Lab was born out of frustration with existing coding education platforms. As experienced developers and educators, we saw a disconnect between theoretical knowledge and practical application in most learning resources.
                </p>
                <p className="mb-4">
                  We set out to create something different — a platform that integrates learning content with hands-on coding practice, enabling students to apply concepts immediately without switching between resources.
                </p>
                <p>
                  Our platform is designed to provide a smooth learning curve, taking students from basic syntax to advanced concepts through carefully crafted progressive modules. Each lesson builds upon the previous one, ensuring a solid foundation before introducing more complex ideas.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-muted rounded-lg p-6 flex items-center justify-center">
                  <Code className="h-16 w-16 text-primary/80" />
                </div>
                <div className="aspect-square bg-muted rounded-lg p-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary/80" />
                </div>
                <div className="aspect-square bg-muted rounded-lg p-6 flex items-center justify-center">
                  <Award className="h-16 w-16 text-primary/80" />
                </div>
                <div className="aspect-square bg-muted rounded-lg p-6 flex items-center justify-center">
                  <Monitor className="h-16 w-16 text-primary/80" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide our approach to teaching programming.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <BookCheck className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Learn by Doing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We believe that the best way to learn programming is through practice. Every concept is accompanied by interactive exercises and challenges.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <Rocket className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Progression-Based</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our courses follow a carefully designed learning path that takes students from basics to advanced topics at a comfortable pace.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <Medal className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Real-World Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>All our examples and projects are designed to reflect real-world programming scenarios and industry best practices.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <Heart className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Community First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We foster a supportive community where students can collaborate, share ideas, and learn from each other's experiences.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Coding Journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who are transforming their careers through our comprehensive programming courses.
            </p>
            <Button size="lg" asChild>
              <Link to="/courses">Explore Our Courses</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
