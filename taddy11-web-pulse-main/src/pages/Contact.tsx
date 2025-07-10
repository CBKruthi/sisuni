import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, we'll just show a success message
    // In a real implementation, this would connect to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get in <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with innovative technology solutions? 
              Let's discuss your project and bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    We're here to help you succeed. Reach out through any of these channels 
                    and we'll respond as quickly as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-muted-foreground">contact@sisuni.tech</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">India</p>
                      <p className="text-sm text-muted-foreground">Serving clients globally</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday</p>
                      <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-card rounded-lg p-6 shadow-card">
                  <h3 className="font-semibold mb-2">Careers</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Interested in joining our team? Send your resume to:
                  </p>
                  <p className="text-primary font-medium">careers@sisuni.tech</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-tech">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, requirements, or any questions you have..."
                        required
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> This is a demo contact form. To enable actual email 
                      functionality, you'll need to connect to a backend service like Supabase 
                      using the green button in the top-right corner of Lovable.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Can We Help You With?</h2>
            <p className="text-xl text-muted-foreground">
              Choose the service that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-tech transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Custom web applications and websites
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-tech transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Cybersecurity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Security audits and protection solutions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-tech transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">IoT Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Smart automation and IoT projects
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-tech transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">AI & ML</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Machine learning and AI solutions
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does a typical project take?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Project timelines vary based on complexity. Simple websites take 2-4 weeks, 
                  while complex web applications can take 2-6 months. We'll provide a detailed 
                  timeline during our initial consultation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide ongoing support?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Yes! We offer comprehensive support packages including maintenance, security 
                  updates, and feature enhancements. Our support is available 24/7 for critical issues.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can you work with our existing systems?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Absolutely. We specialize in integrating with existing systems and can help 
                  modernize your current infrastructure while maintaining compatibility with 
                  your business processes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's included in your cybersecurity services?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our cybersecurity services include security audits, penetration testing, 
                  firewall configuration, data encryption, compliance management, and ongoing 
                  monitoring to protect against threats.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;