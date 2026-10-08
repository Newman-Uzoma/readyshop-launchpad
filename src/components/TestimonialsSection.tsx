
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, EcoBeauty",
      company: "Beauty & Skincare",
      quote: "StoreBuilder Pro saved us 6 months of development time. Our store launched in 3 days and we made our first $10k in the first month. The API integration is seamless!",
      results: "250% increase in conversion rate",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, TechGear Hub",
      company: "Electronics Retail",
      quote: "The customization options are incredible. We got exactly what we needed without the technical headaches. Customer support is outstanding - they helped us every step of the way.",
      results: "$50k revenue in first quarter",
      avatar: "MR"
    },
    {
      name: "Emily Thompson",
      role: "Owner, Artisan Crafts",
      company: "Handmade Goods",
      quote: "As a non-technical person, I was worried about setting up an online store. StoreBuilder Pro made it so easy. Everything just works, and the mobile experience is fantastic.",
      results: "Expanded to 3 new markets",
      avatar: "ET"
    },
    {
      name: "David Kim",
      role: "Marketing Director, FitLife",
      company: "Health & Wellness",
      quote: "The pre-built integrations saved us thousands in development costs. The subscription management features work perfectly for our business model. Highly recommend!",
      results: "300+ active subscribers",
      avatar: "DK"
    },
    {
      name: "Lisa Park",
      role: "Founder, Pet Essentials",
      company: "Pet Supplies",
      quote: "We tried building our own store first - what a mistake! StoreBuilder Pro delivered in days what would have taken us months. The payment processing is rock solid.",
      results: "40% repeat customer rate",
      avatar: "LP"
    },
    {
      name: "James Wilson",
      role: "Owner, Home Solutions",
      company: "Home & Garden",
      quote: "The room planner integration is a game-changer for our business. Customers love visualizing products in their space before buying. Sales have tripled since launch.",
      results: "200% increase in average order",
      avatar: "JW"
    }
  ];

  const stats = [
    { value: "500+", label: "Stores Launched" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "$2M+", label: "Revenue Generated" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            ⭐ Customer Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join hundreds of successful business owners who chose StoreBuilder Pro 
            to launch and grow their online stores.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-xs text-slate-500">{testimonial.company}</div>
                  </div>
                </div>
                
                <blockquote className="text-slate-700 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                  📈 {testimonial.results}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-sm border border-slate-200">
            <div className="flex -space-x-2">
              {['SC', 'MR', 'ET', 'DK', 'LP'].map((initial, index) => (
                <Avatar key={index} className="h-8 w-8 border-2 border-white">
                  <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs">
                    {initial}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">500+ entrepreneurs</span> trust StoreBuilder Pro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
