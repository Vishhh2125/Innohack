import React from 'react';
import { Link } from "react-router-dom";
import { MessageCircle, Calendar, Stethoscope, Shield, Clock, Users } from "lucide-react";

// Import UI components
import { Button } from "../ui/button.jsx";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const features = [
  {
    icon: MessageCircle,
    title: "AI Symptom Checker",
    description: "Get instant, intelligent health guidance from our AI assistant powered by medical expertise.",
    action: "Start Chat",
    href: "/chat",
    color: "text-primary"
  },
  {
    icon: Calendar,
    title: "Book Doctor Appointments",
    description: "Schedule appointments with qualified healthcare professionals at your convenience.",
    action: "Book Now",
    href: "/appointments",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Secure Messaging",
    description: "Communicate privately with your healthcare providers through our encrypted platform.",
    action: "Learn More",
    href: "#",
    color: "text-accent"
  }
];

const stats = [
  { icon: Users, value: "50K+", label: "Patients Helped" },
  { icon: Stethoscope, value: "1,200+", label: "Medical Professionals" },
  { icon: Clock, value: "24/7", label: "AI Support" },
];

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light to-muted">
      {/* Hero Section */}
      <section className="px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your Health,{" "}
            <span className="text-primary">Reimagined</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Instant support and expert care, right at your fingertips. 
            Experience healthcare that adapts to your needs with AI-powered insights and professional guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chat">
              <Button 
                size="lg" 
                className="btn-action px-8 py-4 text-lg font-semibold"
              >
                Get Started
              </Button>
            </Link>
            <Link to="/appointments">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary-light"
              >
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-light rounded-xl mb-4">
                    <StatIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive Care Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how our platform transforms your healthcare experience with cutting-edge technology and human expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                // Card (was: <Card>)
                <div key={index} className="card-gentle border-0 p-2">
                  {/* CardHeader (was: <CardHeader>) */}
                  <div className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-light to-secondary-light rounded-2xl mb-4 mx-auto">
                      <FeatureIcon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    {/* CardTitle (was: <CardTitle>) */}
                    <div className="text-xl font-semibold mb-2">{feature.title}</div>
                    {/* CardDescription (was: <CardDescription>) */}
                    <div className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </div>
                  </div>
                  {/* CardContent (was: <CardContent>) */}
                  <div className="pt-0">
                    <Link to={feature.href}>
                      <Button className="w-full btn-healing font-medium">
                        {feature.action}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who trust our platform for their healthcare needs. 
            Start your journey to better health today.
          </p>
          <Link to="/chat">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-neutral-light"
            >
              Start Your Health Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;