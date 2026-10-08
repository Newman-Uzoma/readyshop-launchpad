
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Smartphone } from "lucide-react";

const CTASection = () => {
  const urgencyFeatures = [
    "Limited-time 40% discount",
    "Free setup consultation",
    "24-hour launch guarantee",
    "30-day money-back guarantee"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            🚀 Launch Special - Limited Time
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Launch Your
            <span className="block">Dream Store?</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join successful entrepreneurs who chose StoreBuilder Pro to launch their online business. 
            Get started today and see results within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Start Building Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              Schedule Demo
              <Smartphone className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Urgency Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {urgencyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center justify-center sm:justify-start text-blue-100">
                <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Free Consultation */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Free Strategy Consultation</CardTitle>
              <CardDescription className="text-blue-100">
                Not sure which template is right for you? Get expert advice from our team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-400 mr-2" />
                    Business model assessment
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-400 mr-2" />
                    Template recommendation
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-400 mr-2" />
                    Customization planning
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-400 mr-2" />
                    Launch timeline discussion
                  </div>
                </div>
                <Button variant="secondary" className="w-full">
                  Book Free Call
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Migration Service */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Store Migration Service</CardTitle>
              <CardDescription className="text-blue-100">
                Already have a store? We'll migrate it to a better template seamlessly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-400 mr-2" />
                    Product data migration
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-400 mr-2" />
                    Customer data transfer
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-400 mr-2" />
                    SEO preservation
                  </div>
                  <div className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-400 mr-2" />
                    Zero downtime transition
                  </div>
                </div>
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final Push */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full font-semibold text-sm mb-6">
            ⏰ Special Pricing Ends in 48 Hours
          </div>
          <p className="text-lg text-blue-100 mb-6">
            Don't let your competition get ahead. Start building your professional store today.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300 font-bold text-lg px-12 py-4"
          >
            Claim Your Store Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
