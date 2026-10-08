import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  ArrowRight,
  Check,
  Image as ImageIcon,
  Clock,
} from "lucide-react";

const StoreShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const stores = [
    {
      id: 0,
      name: "VELORA",
      category: "beauty",
      price: 2999,
      description:
        "Premium beauty and self-care Shopify store designed with an elegant, luxury-focused shopping experience.",
      features: [
        "Premium Beauty Design",
        "Responsive Mobile Layout",
        "Product Showcase",
        "Shopify Theme",
      ],
      image: "/velora-hero 1.png",
      demo: "#",
      comingSoon: true,
      popular: true,
    },

    {
      id: 1,
      name: "Fashion Elite",
      category: "fashion",
      price: 2999,
      description:
        "Premium fashion store with advanced filtering and AR try-on",
      features: ["AR Try-On", "Size Guide", "Wishlist", "Reviews"],
      image: "/placeholder.svg",
      demo: "https://fashion-demo.storebuilder.pro",
      popular: false,
    },

    {
      id: 2,
      name: "TechHub Store",
      category: "electronics",
      price: 3499,
      description:
        "Electronics store with product comparison and tech specs",
      features: [
        "Product Compare",
        "Tech Specs",
        "Warranty Info",
        "Live Chat",
      ],
      image: "/placeholder.svg",
      demo: "https://tech-demo.storebuilder.pro",
    },

    {
      id: 3,
      name: "Wellness Haven",
      category: "health",
      price: 2799,
      description:
        "Health & wellness store with subscription management",
      features: [
        "Subscriptions",
        "Health Tracker",
        "Expert Advice",
        "Community",
      ],
      image: "/placeholder.svg",
      demo: "https://wellness-demo.storebuilder.pro",
    },

    {
      id: 4,
      name: "Artisan Marketplace",
      category: "handmade",
      price: 2499,
      description:
        "Handmade goods store with artist profiles and custom orders",
      features: [
        "Artist Profiles",
        "Custom Orders",
        "Gift Wrapping",
        "Authenticity",
      ],
      image: "/placeholder.svg",
      demo: "https://artisan-demo.storebuilder.pro",
    },

    {
      id: 5,
      name: "Pet Paradise",
      category: "pets",
      price: 2199,
      description:
        "Pet supplies store with pet care guides and vet consultation",
      features: [
        "Pet Profiles",
        "Care Guides",
        "Vet Chat",
        "Auto-Delivery",
      ],
      image: "/placeholder.svg",
      demo: "https://pet-demo.storebuilder.pro",
    },

    {
      id: 6,
      name: "Home & Garden Pro",
      category: "home",
      price: 2899,
      description:
        "Home improvement store with room planner and project guides",
      features: [
        "Room Planner",
        "Project Guides",
        "Installation Service",
        "Samples",
      ],
      image: "/placeholder.svg",
      demo: "https://home-demo.storebuilder.pro",
    },
  ];

  const categories = [
    {
      id: "all",
      name: "All Stores",
      count: stores.length,
    },
    {
      id: "beauty",
      name: "Beauty",
      count: stores.filter((s) => s.category === "beauty").length,
    },
    {
      id: "fashion",
      name: "Fashion",
      count: stores.filter((s) => s.category === "fashion").length,
    },
    {
      id: "electronics",
      name: "Electronics",
      count: stores.filter((s) => s.category === "electronics").length,
    },
    {
      id: "health",
      name: "Health & Wellness",
      count: stores.filter((s) => s.category === "health").length,
    },
    {
      id: "handmade",
      name: "Handmade",
      count: stores.filter((s) => s.category === "handmade").length,
    },
    {
      id: "pets",
      name: "Pets",
      count: stores.filter((s) => s.category === "pets").length,
    },
    {
      id: "home",
      name: "Home & Garden",
      count: stores.filter((s) => s.category === "home").length,
    },
  ];

  const filteredStores =
    selectedCategory === "all"
      ? stores
      : stores.filter((store) => store.category === selectedCategory);

  const handleDemo = (store: typeof stores[number]) => {
    if (store.comingSoon) return;

    window.open(store.demo, "_blank");
  };

  return (
    <section
      id="stores"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Premium Store Templates
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our collection of professionally designed,
            conversion-optimized Shopify stores. Each template is built
            to give your business a polished online presence.
          </p>
        </div>

        {/* Category Filter */}
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="mb-12"
        >
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 h-auto p-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-xs sm:text-sm px-2 py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {category.name}

                <Badge
                  variant="secondary"
                  className="ml-1 text-xs"
                >
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent
            value={selectedCategory}
            className="mt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredStores.map((store) => {
                const isVelora = store.name === "VELORA";

                return (
                  <Card
                    key={store.id}
                    className={
                      isVelora
                        ? "group overflow-hidden border-[#D8CEC2] bg-[#F8F4EE] shadow-lg hover:shadow-2xl transition-all duration-500"
                        : "group hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden"
                    }
                  >

                    {/* Featured Store */}
                    {store.popular && (
                      <div className="bg-[#292625] text-[#F5F0E9] text-center py-3 text-sm tracking-[0.18em] uppercase font-medium">
                        <span className="mr-2">✦</span>
                        Featured Store
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <div
                        className={
                          isVelora
                            ? "aspect-video bg-[#E9DED1] flex items-center justify-center"
                            : "aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center"
                        }
                      >

                        {store.image !== "/placeholder.svg" ? (
                          <img
                            src={store.image}
                            alt={store.name + " store preview"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <ImageIcon className="h-12 w-12 text-slate-400" />
                        )}

                        {/* Hover Overlay */}
                        <div
                          className={
                            isVelora
                              ? "absolute inset-0 bg-[#292625]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                              : "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                          }
                        >

                          {store.comingSoon ? (
                            <Button
                              variant="secondary"
                              size="sm"
                              disabled
                              className="bg-[#F5F0E9] text-[#292625] border-0"
                            >
                              <Clock className="mr-2 h-4 w-4" />
                              Coming Soon
                            </Button>
                          ) : (
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => handleDemo(store)}
                            >
                              View Live Demo
                            </Button>
                          )}

                        </div>
                      </div>
                    </div>

                    {/* Store Information */}
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4">

                        <div>
                          <CardTitle
                            className={
                              isVelora
                                ? "text-2xl font-normal tracking-wide text-[#292625] font-serif"
                                : "text-xl"
                            }
                          >
                            {store.name}
                          </CardTitle>

                          {isVelora && (
                            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8B7D70]">
                              Beauty · Self-Care · Shopify
                            </p>
                          )}

                          <CardDescription
                            className={
                              isVelora
                                ? "mt-3 text-[#665C55] leading-relaxed"
                                : "mt-2"
                            }
                          >
                            {store.description}
                          </CardDescription>
                        </div>

                        <div className="text-right flex-shrink-0">
                          {isVelora ? (
                            <>
                              <div className="text-sm font-medium uppercase tracking-wider text-[#8B7D70]">
                                Coming
                              </div>

                              <div className="text-sm font-medium uppercase tracking-wider text-[#8B7D70]">
                                Soon
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="text-2xl font-bold text-blue-600">
                                ${store.price}
                              </div>

                              <div className="text-sm text-slate-500">
                                one-time
                              </div>
                            </>
                          )}
                        </div>

                      </div>
                    </CardHeader>

                    {/* Features */}
                    <CardContent>
                      <div className="space-y-4">

                        <div>
                          <h4
                            className={
                              isVelora
                                ? "font-medium text-[#292625] mb-3"
                                : "font-medium text-slate-900 mb-2"
                            }
                          >
                            Key Features:
                          </h4>

                          <div className="space-y-2">
                            {store.features.map((feature, index) => (
                              <div
                                key={index}
                                className={
                                  isVelora
                                    ? "flex items-center text-sm text-[#665C55]"
                                    : "flex items-center text-sm text-slate-600"
                                }
                              >
                                <Check
                                  className={
                                    isVelora
                                      ? "h-4 w-4 text-[#8B7D70] mr-2 flex-shrink-0"
                                      : "h-4 w-4 text-green-500 mr-2 flex-shrink-0"
                                  }
                                />

                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-2 pt-4">

                          {store.comingSoon ? (
                            <Button
                              disabled
                              className="flex-1 bg-[#DED3C8] text-[#665C55] hover:bg-[#DED3C8] cursor-not-allowed"
                            >
                              <Clock className="mr-2 h-4 w-4" />
                              Coming Soon
                            </Button>
                          ) : (
                            <Button
                              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                              onClick={() => handleDemo(store)}
                            >
                              Buy Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          )}

                          {!store.comingSoon && (
                            <Button
                              variant="outline"
                              size="default"
                              onClick={() => handleDemo(store)}
                            >
                              Demo
                            </Button>
                          )}

                        </div>

                      </div>
                    </CardContent>

                  </Card>
                );
              })}

            </div>
          </TabsContent>
        </Tabs>

        {/* Custom Store CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">

            <CardHeader>
              <CardTitle className="text-2xl">
                Need Something Custom?
              </CardTitle>

              <CardDescription className="text-lg">
                Let our team create a completely custom Shopify store
                tailored to your specific business needs.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
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