
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Check,
  ArrowRight,
  Palette,
  ShoppingBag,
  Globe,
  Search,
  MapPin,
  Mail,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "2349067418436";
const CONTACT_EMAIL = "uzomanewman989@gmail.com";

const createWhatsAppLink = (serviceName: string) => {
  const message = `Hello ReadyShop, I am interested in your ${serviceName} service. Please tell me more about the price, availability, and next steps.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const createEmailLink = (serviceName: string) => {
  const subject = `Enquiry about ${serviceName}`;

  const body = `Hello ReadyShop,

I am interested in your ${serviceName} service. Please tell me more about the process, availability, and next steps.

Thank you.`;

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    CONTACT_EMAIL
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const mainServices = [
  {
    name: "Shopify Theme Only",
    price: "$79",
    description:
      "An original ReadyShop Shopify theme for business owners who want to configure their own online store.",
    icon: ShoppingBag,
    badge: "DIY option",
    features: [
      "An eligible ReadyShop theme",
      "Theme files and included features",
      "Mobile-responsive design, where supported",
      "Theme documentation, where provided",
      "You configure your own Shopify store",
    ],
    note:
      "Themes still in development, including VELORA, are not available for purchase yet. Shopify subscriptions, paid apps, and other third-party costs are separate.",
  },
  {
    name: "Theme + Store Setup",
    price: "$249",
    description:
      "Get an eligible ReadyShop theme and assistance configuring your Shopify storefront.",
    icon: Palette,
    badge: "Popular service",
    features: [
      "An eligible ReadyShop theme included",
      "Theme installation and configuration",
      "Homepage and section customization",
      "Navigation and menu setup",
      "Basic branding configuration",
      "Setup of up to 10 products using customer-provided details",
    ],
    note:
      "Theme availability must be confirmed before ordering. Custom backend development, paid apps, Shopify subscriptions, and payment-provider fees are excluded.",
  },
  {
    name: "Business Website",
    price: "From $149",
    description:
      "A professional website for a small business that needs an online presence without a full Shopify store.",
    icon: Globe,
    badge: "For small businesses",
    features: [
      "One-page website starting at $149",
      "Two-page website option at $249",
      "Mobile-friendly layout",
      "Business information and contact details",
      "Links to an existing shop or checkout",
      "Portfolio, About, or Services content options",
    ],
    note:
      "Hosting, domain registration, email subscriptions, payment processing, and other third-party services are separate. Custom backend development is not included.",
  },
];

const supportingServices = [
  {
    name: "Basic SEO Setup",
    price: "$49–$99",
    description:
      "Improve the basic search presentation of an existing website.",
    icon: Search,
    features: [
      "Page titles and meta descriptions",
      "Image alt text for agreed pages",
      "Basic indexing guidance",
    ],
    note:
      "Search engine rankings and indexing timelines cannot be guaranteed.",
  },
  {
    name: "Google Business Profile Setup",
    price: "$79",
    description:
      "Setup assistance for eligible businesses that can appear on Google Search and Maps.",
    icon: MapPin,
    features: [
      "Profile creation or claiming guidance",
      "Business details and opening hours",
      "Website link and photo guidance",
      "Help with Google's verification process",
    ],
    note:
      "Eligibility and verification are determined by Google. Approval and rankings cannot be guaranteed.",
  },
  {
    name: "Business Email & Domain Assistance",
    price: "$49",
    description:
      "Help connect a business domain and configure professional email.",
    icon: Mail,
    features: [
      "Domain connection assistance",
      "Email provider configuration guidance",
      "Basic setup checks",
    ],
    note:
      "Domain registration, email hosting, and provider subscriptions are separate costs.",
  },
];

const PricingSection = () => {
  return (
    <section
      aria-labelledby="pricing-section-title"
      className="bg-[#faf7f2] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-[#d8c5ad] bg-white text-[#76563d]"
          >
            Straightforward Pricing
          </Badge>

          <h2
            id="pricing-section-title"
            className="mb-4 text-3xl font-bold tracking-tight text-[#35271f] md:text-4xl"
          >
            The Right Starting Point for Your Business
          </h2>

          <p className="text-lg leading-7 text-[#74675d]">
            Choose an eligible Shopify theme, get help setting up your
            storefront, or build a professional business website. Additional
            services are available when you need them.
          </p>

          <p className="mt-4 text-sm leading-6 text-[#87786c]">
            Prices are introductory estimates in US dollars. Confirm the
            service scope, theme availability, and final quote with ReadyShop
            before placing an order.
          </p>
        </div>

        {/* MAIN SERVICES */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#35271f]">
              Our Main Services
            </h3>

            <p className="mt-2 text-[#74675d]">
              Practical solutions for entrepreneurs and growing businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {mainServices.map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.name}
                  className={`flex h-full flex-col border-[#e8ded2] bg-white shadow-sm transition-shadow hover:shadow-lg ${
                    service.name === "Theme + Store Setup"
                      ? "ring-1 ring-[#98704e]"
                      : ""
                  }`}
                >
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex items-center justify-between gap-2">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3ece3] text-[#76563d]">
                        <Icon
                          aria-hidden="true"
                          className="h-5 w-5"
                        />
                      </div>

                      <Badge
                        variant="outline"
                        className="border-[#e4d6c6] text-[#76563d]"
                      >
                        {service.badge}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl text-[#35271f]">
                      {service.name}
                    </CardTitle>

                    <CardDescription className="min-h-[72px] text-sm leading-6 text-[#74675d]">
                      {service.description}
                    </CardDescription>

                    <div className="pt-3">
                      <span className="text-3xl font-bold tracking-tight text-[#35271f]">
                        {service.price}
                      </span>

                      <p className="mt-1 text-sm text-[#87786c]">
                        {service.name === "Business Website"
                          ? "One-time project estimate"
                          : "Proposed one-time price"}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col">
                    <div className="mb-6 space-y-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 text-sm text-[#5f534a]"
                        >
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#8b6b4f]"
                          />

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <p className="mb-5 mt-auto text-xs leading-5 text-[#87786c]">
                      {service.note}
                    </p>

                    <div className="space-y-3">
                      <Button
                        asChild
                        className="w-full bg-[#76563d] text-white hover:bg-[#5d422e]"
                      >
                        <a
                          href={createWhatsAppLink(service.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle
                            aria-hidden="true"
                            className="mr-2 h-4 w-4"
                          />

                          Enquire on WhatsApp

                          <ArrowRight
                            aria-hidden="true"
                            className="ml-2 h-4 w-4"
                          />
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-[#d8c5ad] text-[#76563d] hover:bg-[#f3ece3]"
                      >
                        <a
                          href={createEmailLink(service.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Mail
                            aria-hidden="true"
                            className="mr-2 h-4 w-4"
                          />

                          Enquire by Email
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ADDITIONAL SERVICES */}
        <div>
          <div className="mb-8">
            <Badge
              variant="outline"
              className="mb-3 border-[#d8c5ad] text-[#76563d]"
            >
              Additional Services
            </Badge>

            <h3 className="text-2xl font-bold text-[#35271f]">
              Small Services. Extra Support.
            </h3>

            <p className="mt-2 max-w-2xl leading-7 text-[#74675d]">
              Need a little extra help? These optional services can help your
              business establish a more professional online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {supportingServices.map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.name}
                  className="flex h-full flex-col border-[#e8ded2] bg-white shadow-sm"
                >
                  <CardHeader>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f3ece3] text-[#76563d]">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5"
                      />
                    </div>

                    <CardTitle className="text-lg text-[#35271f]">
                      {service.name}
                    </CardTitle>

                    <div className="pt-1 text-2xl font-bold text-[#76563d]">
                      {service.price}
                    </div>

                    <CardDescription className="leading-6 text-[#74675d]">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col">
                    <div className="mb-5 space-y-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 text-sm text-[#5f534a]"
                        >
                          <Check
                            aria-hidden="true"
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#8b6b4f]"
                          />

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <p className="mb-5 mt-auto text-xs leading-5 text-[#87786c]">
                      {service.note}
                    </p>

                    <div className="space-y-3">
                      <Button
                        asChild
                        className="w-full bg-[#76563d] text-white hover:bg-[#5d422e]"
                      >
                        <a
                          href={createWhatsAppLink(service.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle
                            aria-hidden="true"
                            className="mr-2 h-4 w-4"
                          />

                          Ask on WhatsApp

                          <ArrowRight
                            aria-hidden="true"
                            className="ml-2 h-4 w-4"
                          />
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-[#d8c5ad] text-[#76563d] hover:bg-[#f3ece3]"
                      >
                        <a
                          href={createEmailLink(service.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Mail
                            aria-hidden="true"
                            className="mr-2 h-4 w-4"
                          />

                          Ask by Email
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* PRICING NOTE */}
        <div className="mt-12 rounded-2xl border border-[#e8ded2] bg-white p-6 text-center">
          <h3 className="mb-2 text-lg font-semibold text-[#35271f]">
            Clear Scope. No Surprises.
          </h3>

          <p className="mx-auto max-w-3xl text-sm leading-6 text-[#74675d]">
            Prices are in US dollars and are introductory estimates, not
            guaranteed final quotes. Final pricing depends on the agreed
            scope. Shopify subscriptions, domain registration, paid apps,
            email subscriptions, hosting, and other third-party costs are
            separate where applicable. ReadyShop does not include custom
            backend development in these packages. Search rankings and Google
            Business Profile verification cannot be guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;