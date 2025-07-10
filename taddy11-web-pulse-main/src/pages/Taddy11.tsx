import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Shield, Users, Trophy, Smartphone, CheckCircle, Play } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Skill-Based Gaming",
    description: "Pure skill-based rummy that rewards strategic thinking and card mastery"
  },
  {
    icon: Shield,
    title: "Secure & Fair",
    description: "Advanced security protocols ensure fair play and secure transactions"
  },
  {
    icon: Users,
    title: "Real Players",
    description: "Compete against real players in exciting tournaments and challenges"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Seamless gaming experience across all devices and platforms"
  }
];

const Taddy11 = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">Taddy11</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the ultimate skill-based rummy game with real-money tournaments, 
                fair gameplay, and exciting rewards. Join thousands of players in India's 
                most trusted rummy platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="lg" className="flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Play Now (Coming Soon)</span>
                </Button>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-muted-foreground">4.8/5 Rating</span>
                </div>
                <div className="text-muted-foreground">1000+ Beta Players</div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-card rounded-3xl p-8 shadow-tech transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-hero rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-glow">
                    <span className="text-white text-4xl font-bold">T11</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Taddy11</h3>
                  <p className="text-muted-foreground mb-6">Skill-Based Rummy Game</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-primary">₹10L+</div>
                      <div className="text-muted-foreground">Prize Pool</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-muted-foreground">Tournaments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">Taddy11</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of skill, strategy, and excitement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="text-center hover:shadow-tech transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How to Play</h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to start your rummy journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Download & Register</h3>
              <p className="text-muted-foreground">
                Download the Taddy11 app and create your account with just a few simple steps
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Choose Your Game</h3>
              <p className="text-muted-foreground">
                Select from various rummy formats and tournaments that match your skill level
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Play & Win</h3>
              <p className="text-muted-foreground">
                Use your skills to win exciting cash prizes and climb the leaderboards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-hero rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-8">Taddy11 by the Numbers</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-lg opacity-90">Active Players</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">₹10L+</div>
                <div className="text-lg opacity-90">Monthly Prizes</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.8★</div>
                <div className="text-lg opacity-90">User Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg opacity-90">Tournaments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Game Features</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Taddy11 offers a comprehensive rummy experience with features designed 
                for both beginners and professional players.
              </p>
              
              <div className="space-y-4">
                {[
                  "Multiple rummy variants (Points, Pool, Deals)",
                  "Real-time multiplayer gameplay",
                  "Secure payment gateway integration",
                  "Advanced anti-fraud protection",
                  "Daily tournaments and challenges",
                  "Instant withdrawals and deposits",
                  "24/7 customer support",
                  "Practice tables for beginners"
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-card rounded-2xl p-8 shadow-tech">
              <h3 className="text-2xl font-bold mb-6 text-center">Download Taddy11</h3>
              <p className="text-muted-foreground text-center mb-6">
                Join the excitement and start playing skill-based rummy today!
              </p>
              
              <div className="space-y-4">
                <Button className="w-full" variant="hero" size="lg" disabled>
                  <Smartphone className="h-5 w-5 mr-2" />
                  Download for Android (Coming Soon)
                </Button>
                <Button className="w-full" variant="outline" size="lg" disabled>
                  <Smartphone className="h-5 w-5 mr-2" />
                  Download for iOS (Coming Soon)
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground text-center mt-4">
                * Currently in beta testing. Public release coming soon!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Taddy11?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be among the first to experience India's most exciting skill-based rummy platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Join Beta Program
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Contact for Partnership
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Taddy11;