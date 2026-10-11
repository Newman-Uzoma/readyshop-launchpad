
import {
  LayoutGrid,
  Smartphone,
  Palette,
  ShoppingBag,
  Layers3,
  Compass,
  Check,
  ArrowRight,
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      number: "01",
      icon: <LayoutGrid className="h-5 w-5" />,
      title: "Themes for different industries",
      description:
        "Explore planned store concepts for beauty, fashion, electronics, wellness, home and living, pets, and other retail niches.",
      points: [
        "Multiple business categories",
        "Distinct visual directions",
      ],
    },
    {
      number: "02",
      icon: <Smartphone className="h-5 w-5" />,
      title: "Designed with mobile in mind",
      description:
        "Discover storefront designs intended to provide a clear browsing experience across desktop, tablet, and mobile screens.",
      points: [
        "Responsive design goals",
        "Clear browsing experiences",
      ],
    },
    {
      number: "03",
      icon: <Palette className="h-5 w-5" />,
      title: "A starting point for your brand",
      description:
        "Choose a design direction that suits your business vision, then shape the branding, content, and products around your idea.",
      points: [
        "Brand-focused presentation",
        "Room for personalization",
      ],
    },
    {
      number: "04",
      icon: <ShoppingBag className="h-5 w-5" />,
      title: "Product-focused layouts",
      description:
        "Explore storefront concepts planned to present products clearly, organize collections, and help shoppers browse.",
      points: [
        "Product presentation",
        "Collection-focused layouts",
      ],
    },
    {
      number: "05",
      icon: <Layers3 className="h-5 w-5" />,
      title: "A growing collection",
      description:
        "ReadyShop plans to introduce more themes and industry categories as additional store concepts are developed and become available.",
      points: [
        "New store concepts planned",
        "More industries to explore",
      ],
    },
    {
      number: "06",
      icon: <Compass className="h-5 w-5" />,
      title: "Find a direction for your business",
      description:
        "Compare different styles and business niches to identify a store concept that fits the direction you want to take.",
      points: [
        "Explore different niches",
        "Choose a suitable starting point",
      ],
    },
  ];

  return (
    <section
      aria-labelledby="features-section-title"
      className="border-b border-[#E8E2DB] bg-[#F3EEE7] px-6 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#8A6F52]">
              Why ReadyShop
            </p>

            <h2
              id="features-section-title"
              className="max-w-xl font-serif text-4xl leading-[1.1] tracking-[-0.035em] text-[#292625] sm:text-5xl lg:text-6xl"
            >
              A simpler way to
              <span className="block italic text-[#8A6F52]">
                find your store.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#625B55] sm:text-lg">
              Starting an online business begins with choosing the right
              foundation. ReadyShop brings together Shopify store concepts
              for different industries, giving you a place to explore ideas
              for your next online business. Availability varies while the
              collection is being developed.
            </p>

            <a
              href="#stores"
              className="group mt-8 inline-flex items-center text-sm font-medium text-[#292625] transition hover:text-[#8A6F52]"
            >
              Explore store concepts
              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </a>

            <div className="mt-10 border-t border-[#D8CEC2] pt-6">
              <p className="font-serif text-2xl text-[#292625]">
                One marketplace.
              </p>
              <p className="mt-1 font-serif text-2xl italic text-[#8A6F52]">
                Many possibilities.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="flex flex-col rounded-[1.35rem] border border-[#E2DAD2] bg-[#FAF9F7] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#CFC0AF] hover:shadow-[0_18px_45px_rgba(41,38,37,0.06)] sm:p-7"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5D9CB] bg-white text-[#8A6F52]"
                  >
                    {feature.icon}
                  </div>

                  <span className="text-xs tracking-[0.16em] text-[#A79A8C]">
                    {feature.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl leading-snug text-[#292625] sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#776E66]">
                  {feature.description}
                </p>

                <div className="mt-6 space-y-3 border-t border-[#E8E2DB] pt-5">
                  {feature.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-[#625B55]"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#8A6F52]"
                      />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
