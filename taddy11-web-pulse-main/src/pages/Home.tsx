import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, CheckCircle, Users } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      
      {/* Taddy11 Highlight Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Meet <span className="bg-gradient-hero bg-clip-text text-transparent">Taddy11</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Our flagship product - a skill-based rummy game that combines traditional 
                card game excitement with modern technology and real-money rewards.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Skill-based gameplay</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Real-money tournaments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Secure & fair gaming</span>
                </div>
              </div>
              <Button variant="hero" size="lg" asChild>
                <Link to="/taddy11">
                  Learn More About Taddy11
                </Link>
              </Button>
            </div>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-tech">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-hero rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">T11</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Taddy11</h3>
                <p className="text-muted-foreground mb-6">Coming Soon to App Stores</p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground">Beta Players</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4.8★</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">Sisuni Tech</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-tech transition-all duration-300">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Skilled professionals with years of experience in cutting-edge technologies
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-tech transition-all duration-300">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rigorous testing and quality control ensure reliable, secure solutions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-tech transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Client-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dedicated support and personalized solutions tailored to your needs
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;