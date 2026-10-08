import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Smartphone, CreditCard, Shield, ArrowRight, Check } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "API-First Integration",
      description: "Seamless integration with Shopify's Admin API for instant store setup and configuration",
      benefits: [
        "Automated product import",
        "Theme customization",
        "App installation",
        "Domain configuration"
      ],
      badge: "Technical Excellence"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Every store is optimized for mobile commerce with responsive design and fast loading",
      benefits: [
        "Progressive Web App (PWA)",
        "Touch-optimized interface",
        "Offline functionality",
        "App-like experience"
      ],
      badge: "User Experience"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Payment Gateway Ready",
      description: "Pre-configured payment processing with multiple gateway options and fraud protection",
      benefits: [
        "Stripe, PayPal, Apple Pay",
        "International payments",
        "Fraud detection",
        "PCI compliance"
      ],
      badge: "E-commerce Ready"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with SSL certificates, data encryption, and regular backups",
      benefits: [
        "SSL certificates included",
        "Data encryption",
        "Regular security updates",
        "GDPR compliance"
      ],
      badge: "Security First"
    }
  ];

  const apiFeatures = [
    "Real-time inventory sync",
    "Automated order management",
    "Customer data integration",
    "Analytics and reporting",
    "Multi-channel selling",
    "Third-party app integration"
  ];

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            ⚡ Powerful Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our pre-built stores come with advanced features and integrations that would typically 
            take months to develop and cost thousands of dollars.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-slate-600">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* API Integration Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Seamless API Integration
              </h3>
              <p className="text-lg text-blue-100 mb-6">
                Our advanced API integration ensures your store is connected to all the tools and 
                services you need from day one. No technical setup required.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {apiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">// Automatic store setup</div>
                <div className="text-blue-300">const store = await createStore(&#123;</div>
                <div className="text-slate-300 ml-4">template: "fashion-elite",</div>
                <div className="text-slate-300 ml-4">domain: "yourbrand.com",</div>
                <div className="text-slate-300 ml-4">customization: options</div>
                <div className="text-blue-300">&#125;);</div>
                <div className="text-green-400 mt-2">// Store ready in minutes! ⚡</div>
              </div>
            </div>
          </div>
        </div>

        {/* Customization Options */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl">Unlimited Customization</CardTitle>
              <CardDescription className="text-base">
                Every aspect of your store can be customized to match your brand and business needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">Design Customization</h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li className="flex items-center"><Check className="h-3 w-3 text-green-500 mr-2" />Colors & Typography</li>
                    <li className="flex items-center"><Check className="h-3 w-3 text-green-500 mr-2" />Logo & Branding</li>
                    <li className="flex items-center"><Check className="h-3 w-3 text-green-500 mr-2" />Layout Options</li>
                    <li className="flex items-center"><Check className="h-3 w-3 text-green-500 mr-2" />Custom Pages</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">Feature Configuration</h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li className="flex items-center"><Check className="h-3 w-3 text-green-500 mr-2" />Product Catalogs</li>
                    <li className="flex items-center"><Check className="h-3 w-3 text-green-500 mr-2" />Shipping Options</li>
                    <li className="flex items-center"><Check className="h-3 w-3 text-green-500 mr-2" />Tax Configuration</li>
                    <li className="flex items-center"><Check className="h-3 w-3 text-green-500 mr-2" />Multi-language</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle>24/7 Support</CardTitle>
              <CardDescription>
                Get expert help whenever you need it
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Live chat support
                </div>
                <div className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Video tutorials
                </div>
                <div className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Technical documentation
                </div>
                <div className="flex items-center text-sm">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Community forum
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
