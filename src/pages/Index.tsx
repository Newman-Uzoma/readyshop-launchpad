import { useState } from "react";
import {
  ArrowRight,
  Check,
  Mail,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

import StoreShowcase from "@/components/StoreShowcase";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const WHATSAPP_URL =
  "https://wa.me/2349067418436?text=Hello%20ReadyShop%2C%20I%20am%20interested%20in%20your%20services.";

const EMAIL_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=uzomanewman989%40gmail.com&su=ReadyShop%20Service%20Enquiry";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToStores = () => {
    setMobileMenuOpen(false);
    document.getElementById("stores")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    setMobileMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navigationLinks = [
    { label: "Stores", href: "#stores" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7] text-[#292625]">
      {/* NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#E8E2DB]/80 bg-[#FAF9F7]/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="shrink-0 text-xl font-semibold tracking-[-0.02em]"
          >
            ReadyShop<span className="text-[#8A6F52]">.</span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#625B55] transition hover:text-[#292625]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={EMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm font-medium text-[#625B55] transition hover:text-[#292625] lg:block"
            >
              Email Us
            </a>

            <button
              type="button"
              onClick={scrollToStores}
              className="rounded-full bg-[#292625] px-3 py-2.5 text-xs font-medium text-white transition hover:bg-[#403A37] sm:px-5 sm:text-sm"
            >
              Explore Stores
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D8CEC2] text-[#292625] transition hover:bg-[#F3EEE7] md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation dropdown */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-[#E8E2DB] bg-[#FAF9F7] px-6 py-3 shadow-lg md:hidden"
          >
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block border-b border-[#E8E2DB] py-3.5 text-sm text-[#625B55] transition last:border-b-0 hover:text-[#292625]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <main>
        <section
          id="home"
          className="relative overflow-hidden border-b border-[#E8E2DB] bg-[#F3EEE7] pt-32"
        >
          <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-[#D8CEC2] bg-white/60 px-4 py-2">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#8A6F52]" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#625B55]">
                  Ready-made Shopify stores
                </span>
              </div>

              <h1 className="font-serif text-5xl leading-[1.05] tracking-[-0.035em] text-[#292625] sm:text-6xl lg:text-7xl">
                Start with a store
                <span className="block italic text-[#8A6F52]">
                  built to impress.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#625B55]">
                Explore professionally designed Shopify stores created for
                modern businesses. Choose a starting point and build your
                brand from there.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollToStores}
                  className="group inline-flex items-center justify-center rounded-full bg-[#292625] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#403A37]"
                >
                  Explore Stores
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-[#CFC5BA] bg-white/60 px-7 py-3.5 text-sm font-medium text-[#292625] transition hover:bg-white"
                >
                  How it works
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
                {[
                  "Shopify-ready designs",
                  "Responsive layouts",
                  "Built for customization",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center text-sm text-[#625B55]"
                  >
                    <Check className="mr-2 h-4 w-4 text-[#8A6F52]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* STORE MARKETPLACE VISUAL */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E3D6C8] blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#DED2C5] blur-3xl" />

              <div className="relative rounded-[2rem] border border-[#D8CEC2] bg-white p-7 shadow-[0_30px_80px_rgba(41,38,37,0.10)]">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#8A6F52]">
                      The ReadyShop Collection
                    </p>
                    <h2 className="mt-2 font-serif text-3xl text-[#292625]">
                      A store for every idea.
                    </h2>
                  </div>

                  <div className="rounded-full border border-[#E2DAD2] px-3 py-1.5 text-xs text-[#625B55]">
                    Shopify
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#F3EEE7] p-5">
                    <div className="mb-8 text-3xl">✦</div>
                    <p className="font-serif text-xl text-[#292625]">
                      Beauty
                    </p>
                    <p className="mt-1 text-sm text-[#77706A]">
                      Elegant storefronts
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#EEEAE5] p-5">
                    <div className="mb-8 text-3xl">◌</div>
                    <p className="font-serif text-xl text-[#292625]">
                      Fashion
                    </p>
                    <p className="mt-1 text-sm text-[#77706A]">
                      Modern collections
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#E9E4DD] p-5">
                    <div className="mb-8 text-3xl">⌂</div>
                    <p className="font-serif text-xl text-[#292625]">
                      Home
                    </p>
                    <p className="mt-1 text-sm text-[#77706A]">
                      Lifestyle brands
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F0ECE7] p-5">
                    <div className="mb-8 text-3xl">+</div>
                    <p className="font-serif text-xl text-[#292625]">
                      More
                    </p>
                    <p className="mt-1 text-sm text-[#77706A]">
                      More niches coming
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-2xl border border-[#E5DED6] px-5 py-4">
                  <div>
                    <p className="text-sm font-medium text-[#292625]">
                      Multiple industries
                    </p>
                    <p className="mt-1 text-xs text-[#77706A]">
                      One place to find your next store
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[#8A6F52]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STORES */}
        <div id="stores" className="scroll-mt-24">
          <StoreShowcase />
        </div>

        {/* FEATURES */}
        <div id="features" className="scroll-mt-24">
          <FeatureSection />
        </div>

        {/* PRICING */}
        <div id="pricing" className="scroll-mt-24">
          <PricingSection />
        </div>

        {/* TESTIMONIALS */}
        <TestimonialsSection />

        {/* CTA */}
        <CTASection />

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-[#E8E2DB] bg-[#F3EEE7] px-6 py-20 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8A6F52]">
              Get in touch
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#292625] sm:text-5xl">
              Let's build your next step.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-[#625B55]">
              Have a question about a Shopify theme, store setup, or a
              business website? Contact ReadyShop and tell us what you need.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#292625] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#403A37]"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact on WhatsApp
              </a>

              <a
                href={EMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#CFC5BA] bg-white px-6 py-3.5 text-sm font-medium text-[#292625] transition hover:bg-[#FAF9F7]"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email ReadyShop
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#E8E2DB] bg-[#292625] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <a
                href="/"
                className="text-xl font-semibold tracking-[-0.02em]"
              >
                ReadyShop<span className="text-[#C7A98A]">.</span>
              </a>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#C8C0BA]">
                Ready-made Shopify stores designed to give entrepreneurs a
                polished starting point for their next online business.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Explore</h3>
              <div className="mt-5 space-y-3">
                <a
                  href="#stores"
                  className="block text-sm text-[#C8C0BA] transition hover:text-white"
                >
                  Stores
                </a>
                <a
                  href="#features"
                  className="block text-sm text-[#C8C0BA] transition hover:text-white"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="block text-sm text-[#C8C0BA] transition hover:text-white"
                >
                  Pricing
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <div className="mt-5 space-y-3">
                <a
                  href="#contact"
                  className="block text-sm text-[#C8C0BA] transition hover:text-white"
                >
                  Contact
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#C8C0BA] transition hover:text-white"
                >
                  WhatsApp Support
                </a>
                <a
                  href={EMAIL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#C8C0BA] transition hover:text-white"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-[#AFA7A1] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 ReadyShop. All rights reserved.</p>
            <p>Built for entrepreneurs.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;