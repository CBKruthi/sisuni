import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="bg-gradient-hero bg-clip-text text-transparent">Sisuni Tech</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a passionate team of technologists dedicated to building innovative 
              solutions that transform businesses and create meaningful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2024, Sisuni Tech Pvt Ltd emerged from a vision to bridge the gap 
                between traditional business practices and cutting-edge technology. Our journey 
                began with a simple belief: that every business deserves access to world-class 
                digital solutions.
              </p>
              <p className="text-muted-foreground mb-6">
                Starting as a small team of passionate developers and cybersecurity experts, 
                we have grown into a comprehensive technology partner, serving clients across 
                various industries with innovative web applications, robust security solutions, 
                and intelligent automation systems.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to be the creators of Taddy11, our flagship gaming product 
                that showcases our commitment to excellence and innovation in the digital entertainment space.
              </p>
            </div>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-tech">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2024</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Foundation</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="text-center hover:shadow-tech transition-all duration-300">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To empower businesses with innovative technology solutions that drive growth, 
                  enhance security, and create exceptional user experiences in the digital age.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center hover:shadow-tech transition-all duration-300">
              <CardHeader>
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To be India's leading technology partner, recognized for delivering 
                  world-class digital solutions and pioneering the future of interactive entertainment.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="text-center hover:shadow-tech transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Innovation, integrity, excellence, and client success. We believe in 
                  building lasting relationships through trust, transparency, and exceptional service.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-xl text-muted-foreground">
              Our unique approach to technology and client relationships
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">End-to-End Solutions</h3>
                  <p className="text-muted-foreground">
                    From concept to deployment, we handle every aspect of your digital transformation journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Security First</h3>
                  <p className="text-muted-foreground">
                    Every solution we build incorporates best-in-class security practices and cybersecurity expertise.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation Driven</h3>
                  <p className="text-muted-foreground">
                    We stay ahead of technology trends to provide you with cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card rounded-2xl p-8 shadow-tech">
              <h3 className="text-2xl font-bold mb-6 text-center">Ready to Work With Us?</h3>
              <p className="text-muted-foreground text-center mb-6">
                Join hundreds of satisfied clients who trust Sisuni Tech with their digital transformation.
              </p>
              <div className="text-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Start Your Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;