
import { useState } from "react";

import {
  ArrowRight,
  Check,
  Clock,
  Sparkles,
  Shirt,
  Laptop,
  HeartPulse,
  Palette,
  PawPrint,
  House,
  ShoppingBag,
} from "lucide-react";

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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const stores = [
  {
    id: "velora",
    name: "VELORA",
    category: "beauty",
    categoryLabel: "Beauty & Self-Care",
    description:
      "An elegant beauty and self-care Shopify theme with a warm, editorial visual direction.",
    image: "/velora-hero 1.png",
    icon: Sparkles,
    status: "In development",
    featured: true,
    direction: [
      "Premium beauty aesthetic",
      "Responsive storefront design",
      "Product collection layouts",
    ],
    background: "bg-[#F3E8DC]",
    iconColor: "text-[#8A6F52]",
  },
  {
    id: "fashion",
    name: "Fashion Store",
    category: "fashion",
    categoryLabel: "Fashion & Apparel",
    description:
      "A planned storefront concept for clothing brands, fashion collections, and accessories.",
    image: null,
    icon: Shirt,
    status: "Planned concept",
    featured: false,
    direction: [
      "Editorial fashion presentation",
      "Collection-focused layout",
      "Brand-led visual direction",
    ],
    background: "bg-[#EEE8E1]",
    iconColor: "text-[#756354]",
  },
  {
    id: "tech",
    name: "Electronics Store",
    category: "electronics",
    categoryLabel: "Electronics & Technology",
    description:
      "A planned store concept for technology products, electronics, and accessories.",
    image: null,
    icon: Laptop,
    status: "Planned concept",
    featured: false,
    direction: [
      "Product-focused presentation",
      "Clear product categories",
      "Modern visual direction",
    ],
    background: "bg-[#E7EBEF]",
    iconColor: "text-[#536779]",
  },
  {
    id: "wellness",
    name: "Wellness Store",
    category: "health",
    categoryLabel: "Health & Wellness",
    description:
      "A planned storefront concept for wellness brands and everyday self-care products.",
    image: null,
    icon: HeartPulse,
    status: "Planned concept",
    featured: false,
    direction: [
      "Calm visual presentation",
      "Product-led collections",
      "Clean, readable layout",
    ],
    background: "bg-[#E8EDE5]",
    iconColor: "text-[#5F785B]",
  },
  {
    id: "handmade",
    name: "Artisan Store",
    category: "handmade",
    categoryLabel: "Handmade & Crafts",
    description:
      "A planned concept for independent makers, handcrafted goods, and creative brands.",
    image: null,
    icon: Palette,
    status: "Planned concept",
    featured: false,
    direction: [
      "Craft-focused storytelling",
      "Product gallery presentation",
      "Distinctive brand styling",
    ],
    background: "bg-[#F0E6DA]",
    iconColor: "text-[#9A704E]",
  },
  {
    id: "pets",
    name: "Pet Store",
    category: "pets",
    categoryLabel: "Pets & Pet Supplies",
    description:
      "A planned storefront concept for pet products, accessories, and animal-care brands.",
    image: null,
    icon: PawPrint,
    status: "Planned concept",
    featured: false,
    direction: [
      "Friendly brand presentation",
      "Organized product collections",
      "Accessible navigation",
    ],
    background: "bg-[#F2E8DF]",
    iconColor: "text-[#96745B]",
  },
  {
    id: "home",
    name: "Home & Living",
    category: "home",
    categoryLabel: "Home & Lifestyle",
    description:
      "A planned concept for home décor, furniture, and lifestyle product businesses.",
    image: null,
    icon: House,
    status: "Planned concept",
    featured: false,
    direction: [
      "Lifestyle-led presentation",
      "Room and product collections",
      "Warm visual styling",
    ],
    background: "bg-[#EAE4DB]",
    iconColor: "text-[#776653]",
  },
  {
    id: "general",
    name: "Everyday Essentials",
    category: "general",
    categoryLabel: "General Retail",
    description:
      "A planned flexible storefront concept for brands selling a variety of everyday products.",
    image: null,
    icon: ShoppingBag,
    status: "Planned concept",
    featured: false,
    direction: [
      "Flexible product categories",
      "Simple shopping layout",
      "Adaptable brand direction",
    ],
    background: "bg-[#EAE8E2]",
    iconColor: "text-[#706B5E]",
  },
];

const categories = [
  { id: "all", name: "All Stores" },
  { id: "beauty", name: "Beauty" },
  { id: "fashion", name: "Fashion" },
  { id: "electronics", name: "Electronics" },
  { id: "health", name: "Wellness" },
  { id: "handmade", name: "Handmade" },
  { id: "pets", name: "Pets" },
  { id: "home", name: "Home & Living" },
  { id: "general", name: "General Retail" },
];

const StoreShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredStores =
    selectedCategory === "all"
      ? stores
      : stores.filter((store) => store.category === selectedCategory);

  return (
    <section
      aria-labelledby="store-showcase-title"
      className="scroll-mt-20 bg-[#FAF9F7] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION INTRODUCTION */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#8A6F52]">
            The ReadyShop collection
          </p>

          <h2
            id="store-showcase-title"
            className="font-serif text-4xl leading-tight tracking-tight text-[#292625] sm:text-5xl"
          >
            Find the right store
            <span className="block italic text-[#8A6F52]">
              for your next idea.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#625B55] sm:text-lg">
            Explore Shopify store concepts across different industries.
            VELORA is in development, while the other designs are planned
            concepts. Contact ReadyShop to ask about current services and
            availability.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <TabsList
            aria-label="Filter store concepts by industry"
            className="mb-8 flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0"
          >
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-full border border-[#E2DAD2] bg-white px-4 py-2.5 text-sm text-[#625B55] data-[state=active]:border-[#292625] data-[state=active]:bg-[#292625] data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredStores.map((store) => {
                const StoreIcon = store.icon;
                const isVelora = store.id === "velora";

                return (
                  <Card
                    key={store.id}
                    className={`group flex h-full flex-col overflow-hidden rounded-2xl border shadow-none transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      isVelora
                        ? "border-[#D8CEC2] bg-[#F8F4EE]"
                        : "border-[#E8E2DB] bg-white"
                    }`}
                  >
                    {/* STORE IMAGE OR CATEGORY ARTWORK */}
                    <div
                      className={`relative flex aspect-[5/3] items-center justify-center overflow-hidden ${store.background}`}
                    >
                      {store.image ? (
                        <img
                          src={store.image}
                          alt={`${store.name} Shopify theme concept`}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center p-6">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-current/10 bg-white/60">
                            <StoreIcon
                              aria-hidden="true"
                              className={`h-9 w-9 ${store.iconColor}`}
                              strokeWidth={1.3}
                            />
                          </div>

                          <p className="mt-5 text-center font-serif text-2xl text-[#292625]">
                            {store.name}
                          </p>

                          <p className="mt-2 text-center text-xs uppercase tracking-[0.16em] text-[#77706A]">
                            {store.categoryLabel}
                          </p>
                        </div>
                      )}

                      {store.featured && (
                        <Badge className="absolute left-4 top-4 rounded-full border-0 bg-[#292625] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#F5F0E9] hover:bg-[#292625]">
                          <Sparkles
                            aria-hidden="true"
                            className="mr-1.5 h-3 w-3"
                          />
                          Featured theme
                        </Badge>
                      )}

                      <Badge
                        variant="outline"
                        className="absolute right-4 top-4 rounded-full border-[#D8CEC2] bg-white/90 px-3 py-1.5 text-xs font-medium text-[#625B55]"
                      >
                        {store.status}
                      </Badge>
                    </div>

                    {/* STORE DETAILS */}
                    <CardHeader className="flex-1 pb-4">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8A6F52]">
                        {store.categoryLabel}
                      </p>

                      <CardTitle
                        className={`mt-2 font-serif text-2xl font-normal text-[#292625] ${
                          isVelora ? "tracking-wide" : ""
                        }`}
                      >
                        {store.name}
                      </CardTitle>

                      <CardDescription className="pt-2 text-sm leading-6 text-[#706861]">
                        {store.description}
                      </CardDescription>
                    </CardHeader>

                    {/* DESIGN DIRECTION */}
                    <CardContent className="mt-auto">
                      <div className="border-t border-[#E8E2DB] pt-5">
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#625B55]">
                          Design direction
                        </h3>

                        <ul className="space-y-2.5">
                          {store.direction.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm text-[#625B55]"
                            >
                              <Check
                                aria-hidden="true"
                                className="mt-0.5 h-4 w-4 shrink-0 text-[#8A6F52]"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6">
                        <Button
                          type="button"
                          disabled
                          aria-label={`${store.name}: coming soon, not available for purchase`}
                          className="w-full cursor-not-allowed rounded-full bg-[#EAE4DD] text-[#756B61] hover:bg-[#EAE4DD]"
                        >
                          <Clock
                            aria-hidden="true"
                            className="mr-2 h-4 w-4"
                          />
                          Coming Soon
                        </Button>

                        <p className="mt-3 text-center text-xs leading-5 text-[#8A8179]">
                          {isVelora
                            ? "VELORA is still being developed and is not yet available for purchase."
                            : "This is a planned concept and is not yet available for purchase."}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* MORE INDUSTRIES */}
        <div className="mt-16 rounded-3xl border border-[#E3DAD0] bg-[#F3EEE7] px-6 py-8 sm:px-9 sm:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8A6F52]">
                More possibilities
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#292625] sm:text-3xl">
                Your industry could be next.
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#625B55] sm:text-base">
                We plan to expand the collection as new Shopify themes are
                developed. Have an industry in mind? Contact ReadyShop to
                discuss your requirements.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 text-sm font-medium text-[#8A6F52]">
              <span>More concepts coming soon</span>
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreShowcase;