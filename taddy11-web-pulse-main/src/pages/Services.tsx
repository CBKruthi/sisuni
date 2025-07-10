import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Shield, Cpu, Brain, CheckCircle, ArrowDown } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Application Development",
    description: "Full-stack web applications built with modern technologies",
    features: [
      "React.js & Node.js Development",
      "Responsive & Mobile-First Design",
      "Database Integration (MongoDB, PostgreSQL)",
      "API Development & Integration",
      "Cloud Deployment (AWS, Vercel, Hostinger)",
      "Performance Optimization"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity Projects & Solutions",
    description: "Comprehensive security solutions to protect your digital assets",
    features: [
      "Security Audits & Penetration Testing",
      "Network Security Implementation",
      "Data Encryption & Protection",
      "Compliance Management (GDPR, ISO 27001)",
      "Incident Response Planning",
      "Security Awareness Training"
    ],
    technologies: ["Firewall", "VPN", "SIEM", "Encryption", "Threat Detection"],
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Cpu,
    title: "IoT-based Projects & Automation",
    description: "Smart automation systems that connect and optimize processes",
    features: [
      "Smart Home & Office Automation",
      "Industrial IoT Solutions",
      "Sensor Integration & Monitoring",
      "Real-time Data Analytics",
      "Mobile App Control Interfaces",
      "Cloud-based Device Management"
    ],
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "LoRaWAN", "Cloud IoT"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Brain,
    title: "AI and Machine Learning Services",
    description: "Intelligent solutions that learn and adapt to enhance efficiency",
    features: [
      "Predictive Analytics & Forecasting",
      "Natural Language Processing",
      "Computer Vision Applications",
      "Recommendation Systems",
      "Chatbots & Virtual Assistants",
      "Machine Learning Model Development"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Scikit-learn"],
    gradient: "from-purple-500 to-indigo-500"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to transform your business 
              and accelerate your digital journey
            </p>
            <div className="animate-bounce">
              <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-glow`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-xl text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">
                      Get a Quote
                    </Link>
                  </Button>
                </div>

                {/* Visual Card */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="bg-gradient-card shadow-tech hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                    <CardHeader className="text-center pb-8">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                        <service.icon className="h-10 w-10 text-white" />
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-4">
                        <div className="text-3xl font-bold text-primary">100+</div>
                        <div className="text-muted-foreground">Projects Completed</div>
                        <div className="text-3xl font-bold text-primary">99%</div>
                        <div className="text-muted-foreground">Success Rate</div>
                        <div className="text-3xl font-bold text-primary">24/7</div>
                        <div className="text-muted-foreground">Support Available</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional value through our comprehensive approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-tech transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Quality Assured</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rigorous testing and quality control processes ensure reliable, 
                  bug-free solutions that exceed expectations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-tech transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Scalable Solutions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built to grow with your business, our solutions can handle 
                  increased load and evolving requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-tech transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Ongoing Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Continuous monitoring, maintenance, and support to ensure 
                  optimal performance and security.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and find the perfect solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">
                  Get Free Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;