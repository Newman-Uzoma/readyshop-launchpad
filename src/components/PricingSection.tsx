
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: 1999,
      originalPrice: 2999,
      description: "Perfect for new businesses getting started",
      badge: "Most Popular",
      popular: true,
      features: [
        "Choose from 10+ premium templates",
        "Basic customization included",
        "Mobile-responsive design",
        "Payment gateway setup",
        "SSL certificate included",
        "30 days of support",
        "Basic SEO optimization",
        "Social media integration"
      ],
      notIncluded: [
        "Advanced customization",
        "Priority support",
        "Custom development"
      ]
    },
    {
      name: "Professional",
      price: 3999,
      originalPrice: 5999,
      description: "For growing businesses that need more features",
      badge: "Best Value",
      popular: false,
      features: [
        "Everything in Starter",
        "Advanced customization options",
        "Custom branding & design",
        "Advanced analytics setup",
        "Email marketing integration",
        "90 days of priority support",
        "Advanced SEO optimization",
        "Multi-language support",
        "Inventory management setup",
        "Customer review system"
      ],
      notIncluded: [
        "Custom development work",
        "Dedicated account manager"
      ]
    },
    {
      name: "Enterprise",
      price: 7999,
      originalPrice: 12999,
      description: "For established businesses needing premium features",
      badge: "Premium",
      popular: false,
      features: [
        "Everything in Professional",
        "Completely custom design",
        "Advanced API integrations",
        "Custom app development",
        "Dedicated account manager",
        "1 year of priority support",
        "Advanced security features",
        "Performance optimization",
        "Multi-store management",
        "White-label solutions",
        "Training & onboarding",
        "Migration assistance"
      ],
      notIncluded: []
    }
  ];

  const addOns = [
    {
      name: "Express Setup",
      price: 499,
      description: "Get your store live in 24 hours"
    },
    {
      name: "Content Creation",
      price: 999,
      description: "Professional product descriptions and content"
    },
    {
      name: "Advanced Analytics",
      price: 299,
      description: "Google Analytics 4 and enhanced ecommerce tracking"
    },
    {
      name: "Marketing Automation",
      price: 799,
      description: "Email sequences and abandoned cart recovery"
    }
  ];

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            💰 Transparent Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            One-time payment, lifetime value. No hidden fees, no monthly subscriptions. 
            Get a professional Shopify store that pays for itself.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-blue-500 shadow-lg scale-105' 
                  : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium">
                  {plan.badge}
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <div className="flex justify-center mb-4">
                  {!plan.popular && (
                    <Badge variant="outline" className="text-xs">
                      {plan.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base mt-2">{plan.description}</CardDescription>
                
                <div className="mt-6">
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                  </div>
                  <div className="flex items-center justify-center mt-1">
                    <span className="text-lg text-slate-500 line-through mr-2">${plan.originalPrice}</span>
                    <Badge variant="destructive" className="text-xs">
                      Save ${plan.originalPrice - plan.price}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 mt-2">One-time payment</p>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-semibold text-slate-900 mt-6">Not included:</h4>
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start text-sm">
                            <div className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0">
                              <div className="h-2 w-2 bg-slate-300 rounded-full mt-1"></div>
                            </div>
                            <span className="text-slate-500">{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Optional Add-ons
            </h3>
            <p className="text-slate-600">
              Enhance your store with these professional services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center border-slate-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">+${addon.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">{addon.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">
                30-Day Money-Back Guarantee
              </CardTitle>
              <CardDescription className="text-green-700 text-base">
                Not satisfied with your store? Get a full refund within 30 days, no questions asked.
                We're confident you'll love your new Shopify store.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
