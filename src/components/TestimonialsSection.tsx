
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Palette,
  Settings,
  Globe,
  MessageCircle,
  ShoppingBag,
  CheckCircle,
} from "lucide-react";

const benefits = [
  {
    icon: Palette,
    title: "Shopify Theme Options",
    description:
      "Explore original storefront designs created for different business niches. Each theme's availability will be clearly stated.",
  },
  {
    icon: Settings,
    title: "Store Setup Assistance",
    description:
      "Get help configuring your Shopify storefront, including navigation, branding, homepage sections, and product listings within the agreed scope.",
  },
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Choose a simple website to introduce your business, present your services, and help potential customers contact you.",
  },
  {
    icon: ShoppingBag,
    title: "A Clear Starting Point",
    description:
      "Start with an existing design instead of beginning your storefront or business website from a blank page.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description:
      "Discuss your project, ask questions, and confirm the work required before agreeing to a service.",
  },
  {
    icon: CheckCircle,
    title: "Clear Project Scope",
    description:
      "Understand what your selected service includes, what it costs, and which subscriptions or third-party expenses are separate.",
  },
];

const highlights = [
  "Shopify themes",
  "Store setup services",
  "Business websites",
  "Direct enquiries",
];

const TestimonialsSection = () => {
  return (
    <section
      id="why-readyshop"
      className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            Get to Know ReadyShop
          </Badge>

          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            A Practical Starting Point for Your Online Business
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
            ReadyShop helps entrepreneurs explore Shopify themes, get
            storefront setup assistance, and build simple business websites.
            Find an option that fits your needs and discuss your project
            with us before getting started.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-xl border border-slate-200 bg-white p-5 text-center"
            >
              <p className="font-semibold text-slate-800">{highlight}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <Card
                key={benefit.title}
                className="border-slate-200 transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                    <Icon
                      className="h-6 w-6 text-slate-700"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm leading-relaxed text-slate-500">
            Have questions? Contact ReadyShop to discuss your requirements,
            confirm availability, and agree on the project scope before
            placing an order.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
