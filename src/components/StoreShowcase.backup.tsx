
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, Image as ImageIcon } from "lucide-react";

const StoreShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const stores = [
    {
      id: 1,
      name: "Fashion Elite",
      category: "fashion",
      price: 2999,
      description: "Premium fashion store with advanced filtering and AR try-on",
      features: ["AR Try-On", "Size Guide", "Wishlist", "Reviews"],
      image: "/placeholder.svg",
      demo: "https://fashion-demo.storebuilder.pro",
      popular: true
    },
    {
      id: 2,
      name: "TechHub Store",
      category: "electronics",
      price: 3499,
      description: "Electronics store with product comparison and tech specs",
      features: ["Product Compare", "Tech Specs", "Warranty Info", "Live Chat"],
      image: "/placeholder.svg",
      demo: "https://tech-demo.storebuilder.pro"
    },
    {
      id: 3,
      name: "Wellness Haven",
      category: "health",
      price: 2799,
      description: "Health & wellness store with subscription management",
      features: ["Subscriptions", "Health Tracker", "Expert Advice", "Community"],
      image: "/placeholder.svg",
      demo: "https://wellness-demo.storebuilder.pro"
    },
    {
      id: 4,
      name: "Artisan Marketplace",
      category: "handmade",
      price: 2499,
      description: "Handmade goods store with artist profiles and custom orders",
      features: ["Artist Profiles", "Custom Orders", "Gift Wrapping", "Authenticity"],
      image: "/placeholder.svg",
      demo: "https://artisan-demo.storebuilder.pro"
    },
    {
      id: 5,
      name: "Pet Paradise",
      category: "pets",
      price: 2199,
      description: "Pet supplies store with pet care guides and vet consultation",
      features: ["Pet Profiles", "Care Guides", "Vet Chat", "Auto-Delivery"],
      image: "/placeholder.svg",
      demo: "https://pet-demo.storebuilder.pro"
    },
    {
      id: 6,
      name: "Home & Garden Pro",
      category: "home",
      price: 2899,
      description: "Home improvement store with room planner and project guides",
      features: ["Room Planner", "Project Guides", "Installation Service", "Samples"],
      image: "/placeholder.svg",
      demo: "https://home-demo.storebuilder.pro"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Stores', count: stores.length },
    { id: 'fashion', name: 'Fashion', count: stores.filter(s => s.category === 'fashion').length },
    { id: 'electronics', name: 'Electronics', count: stores.filter(s => s.category === 'electronics').length },
    { id: 'health', name: 'Health & Wellness', count: stores.filter(s => s.category === 'health').length },
    { id: 'handmade', name: 'Handmade', count: stores.filter(s => s.category === 'handmade').length },
    { id: 'pets', name: 'Pets', count: stores.filter(s => s.category === 'pets').length },
    { id: 'home', name: 'Home & Garden', count: stores.filter(s => s.category === 'home').length }
  ];

  const filteredStores = selectedCategory === 'all' 
    ? stores 
    : stores.filter(store => store.category === selectedCategory);

  return (
    <section id="stores" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Premium Store Templates
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our collection of professionally designed, conversion-optimized Shopify stores.
            Each template includes advanced features and can be customized to match your brand.
          </p>
        </div>

        {/* Category Filter */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 h-auto p-1">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-xs sm:text-sm px-2 py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {category.name}
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStores.map((store) => (
                <Card key={store.id} className="group hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden">
                  {store.popular && (
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium">
                      🔥 Most Popular
                    </div>
                  )}
                  
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <ImageIcon className="h-12 w-12 text-slate-400" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button 
                          variant="secondary" 
                          size="sm"
                          onClick={() => window.open(store.demo, '_blank')}
                        >
                          View Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{store.name}</CardTitle>
                        <CardDescription className="mt-2">{store.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">${store.price}</div>
                        <div className="text-sm text-slate-500">one-time</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">Key Features:</h4>
                        <div className="space-y-1">
                          {store.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-slate-600">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          onClick={() => window.open(store.demo, '_blank')}
                        >
                          Buy Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="default"
                          onClick={() => window.open(store.demo, '_blank')}
                        >
                          Demo
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Custom Store CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl">Need Something Custom?</CardTitle>
              <CardDescription className="text-lg">
                Let our team create a completely custom Shopify store tailored to your specific business needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Request Custom Store
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoreShowcase;
