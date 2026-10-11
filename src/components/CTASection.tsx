
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, MessageCircle, Mail } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/2349067418436?text=Hello%20ReadyShop%2C%20I%20would%20like%20to%20discuss%20your%20services.";

const EMAIL_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=uzomanewman989%40gmail.com&su=ReadyShop%20Service%20Enquiry";

const CTASection = () => {
  const servicePoints = [
    "Explore available Shopify themes",
    "Discuss your store setup requirements",
    "Ask about a business website",
    "Confirm pricing and project scope",
  ];

  return (
    <section
      id="cta"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5efe7] text-[#292522]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#956b43] mb-4">
            Your next step
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Build Your Online Presence?
          </h2>

          <p className="text-lg md:text-xl text-[#62584f] mb-8">
            Whether you need a Shopify theme, help setting up your storefront,
            or a simple business website, ReadyShop can help you explore the
            right starting point for your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#292522] text-white hover:bg-[#443a32]"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#cfc2b4] bg-white text-[#292522] hover:bg-[#eee5db]"
            >
              <a href={EMAIL_URL} target="_blank" rel="noreferrer">
                <Mail className="mr-2 h-5 w-5" />
                Email ReadyShop
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-[#e2d7ca] bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-[#292522]">
                Let's Discuss Your Project
              </CardTitle>
              <CardDescription className="text-[#62584f]">
                Tell us what you want to build so we can discuss availability,
                pricing, and the work involved before you commit.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4 mb-6">
                {servicePoints.map((point) => (
                  <div key={point} className="flex items-start text-sm text-[#51483f]">
                    <Check className="h-4 w-4 text-[#956b43] mr-3 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="w-full bg-[#292522] text-white hover:bg-[#443a32]">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Enquire on WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-[#e2d7ca] bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-[#292522]">
                What ReadyShop Offers
              </CardTitle>
              <CardDescription className="text-[#62584f]">
                Choose the service that fits your current business needs.
                We'll confirm the details with you before work begins.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold text-[#292522]">Shopify themes</h3>
                  <p className="text-sm text-[#62584f]">
                    Explore original storefront designs. VELORA remains in development.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#292522]">Store setup assistance</h3>
                  <p className="text-sm text-[#62584f]">
                    Discuss storefront configuration, branding, navigation, and product listings.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#292522]">Business websites</h3>
                  <p className="text-sm text-[#62584f]">
                    Discuss a simple website to present your business, products, or services.
                  </p>
                </div>
              </div>

              <Button asChild variant="outline" className="w-full border-[#cfc2b4]">
                <a href={EMAIL_URL} target="_blank" rel="noreferrer">
                  Ask About Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <p className="mt-10 text-center text-sm text-[#62584f]">
          Service availability, delivery timelines, and final pricing are
          confirmed with each customer before work begins.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
