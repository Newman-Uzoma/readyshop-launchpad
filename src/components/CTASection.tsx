
import {
  ArrowRight,
  Check,
  MessageCircle,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WHATSAPP_URL =
  "https://wa.me/2349067418436?text=Hello%20ReadyShop%2C%20I%20would%20like%20to%20discuss%20your%20services.";

const EMAIL_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=uzomanewman989%40gmail.com&su=ReadyShop%20Service%20Enquiry";

const servicePoints = [
  "Explore available Shopify themes",
  "Discuss your store setup requirements",
  "Ask about a business website",
  "Confirm pricing and project scope",
];

const CTASection = () => {
  return (
    <section
      id="cta"
      aria-labelledby="readyshop-cta-title"
      className="border-b border-[#E8E2DB] bg-[#F3EEE7] px-6 py-20 text-[#292625] lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#8A6F52]">
            Your next step
          </p>

          <h2
            id="readyshop-cta-title"
            className="mb-6 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#292625] sm:text-4xl lg:text-5xl"
          >
            Ready to Build Your Online Presence?
          </h2>

          <p className="mb-8 text-base leading-8 text-[#625B55] sm:text-lg">
            Whether you need a Shopify theme, help setting up your storefront,
            or a simple business website, contact ReadyShop to discuss your
            requirements and find a suitable starting point.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-[#292625] text-white hover:bg-[#443A32]"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss Your Project
                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 h-5 w-5"
                />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#CFC0AF] bg-[#FAF9F7] text-[#292625] hover:bg-[#EEE5DB]"
            >
              <a
                href={EMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail
                  aria-hidden="true"
                  className="mr-2 h-5 w-5"
                />
                Email ReadyShop
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          <Card className="h-full rounded-[1.35rem] border-[#E2DAD2] bg-[#FAF9F7] shadow-none transition duration-300 hover:border-[#CFC0AF] hover:shadow-[0_18px_45px_rgba(41,38,37,0.06)]">
            <CardHeader className="p-6 pb-4 sm:p-7 sm:pb-4">
              <CardTitle className="font-serif text-2xl text-[#292625]">
                Let's Discuss Your Project
              </CardTitle>

              <CardDescription className="text-sm leading-7 text-[#776E66]">
                Tell us what you want to build so we can discuss availability,
                pricing, and the work involved before you commit.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 pt-2 sm:p-7 sm:pt-2">
              <div className="mb-6 space-y-4">
                {servicePoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 text-sm leading-6 text-[#625B55]"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-[#8A6F52]"
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="w-full bg-[#292625] text-white hover:bg-[#443A32]"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="mr-2 h-4 w-4"
                  />
                  Enquire on WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="h-full rounded-[1.35rem] border-[#E2DAD2] bg-[#FAF9F7] shadow-none transition duration-300 hover:border-[#CFC0AF] hover:shadow-[0_18px_45px_rgba(41,38,37,0.06)]">
            <CardHeader className="p-6 pb-4 sm:p-7 sm:pb-4">
              <CardTitle className="font-serif text-2xl text-[#292625]">
                What ReadyShop Offers
              </CardTitle>

              <CardDescription className="text-sm leading-7 text-[#776E66]">
                Choose the service that fits your current business needs.
                We'll confirm the details with you before work begins.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 pt-2 sm:p-7 sm:pt-2">
              <div className="mb-6 space-y-5">
                <div>
                  <h3 className="mb-1 font-semibold text-[#292625]">
                    Shopify themes
                  </h3>
                  <p className="text-sm leading-6 text-[#776E66]">
                    Explore original storefront designs. VELORA is still in
                    development and is not yet available for purchase.
                  </p>
                </div>

                <div>
                  <h3 className="mb-1 font-semibold text-[#292625]">
                    Store setup assistance
                  </h3>
                  <p className="text-sm leading-6 text-[#776E66]">
                    Discuss storefront configuration, branding, navigation,
                    and product listings within the agreed scope.
                  </p>
                </div>

                <div>
                  <h3 className="mb-1 font-semibold text-[#292625]">
                    Business websites
                  </h3>
                  <p className="text-sm leading-6 text-[#776E66]">
                    Discuss a simple website to present your business,
                    products, or services and help customers contact you.
                  </p>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full border-[#CFC0AF] bg-white text-[#292625] hover:bg-[#EEE5DB]"
              >
                <a
                  href={EMAIL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask About Our Services
                  <ArrowRight
                    aria-hidden="true"
                    className="ml-2 h-4 w-4"
                  />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-[#776E66]">
          Service availability, delivery timelines, and final pricing are
          confirmed with each customer before work begins. Shopify
          subscriptions, paid apps, and other third-party costs are separate
          unless explicitly included in an agreed project scope.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
