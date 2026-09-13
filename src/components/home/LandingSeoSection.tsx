import {
  landingPageContent,
  type LandingVariant,
} from "@/data/landingPageContent";

type LandingSeoSectionProps = {
  variant: LandingVariant;
};

export default function LandingSeoSection({ variant }: LandingSeoSectionProps) {
  const content = landingPageContent[variant];

  return (
    <section className="border-y border-black/10 bg-white px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="font-gmarket text-xs font-semibold tracking-[0.18em] text-[#DE1334]">
              {content.label}
            </p>

            <h2 className="mt-4 font-gmarket text-[32px] font-semibold leading-[1.2] tracking-[-0.05em] text-[#171717] md:text-[48px]">
              {content.title}
            </h2>
          </div>

          <div>
            <p className="max-w-[680px] text-[15px] leading-[1.8] text-black/60 md:text-[18px]">
              {content.description}
            </p>

            <ul className="mt-8 border-t border-black/15">
              {content.points.map((point, index) => (
                <li
                  key={point}
                  className="flex gap-4 border-b border-black/15 py-4 text-[14px] leading-6 text-black/75 md:text-[16px]"
                >
                  <span className="font-semibold text-[#DE1334]">
                    0{index + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-black/15 pt-8 md:mt-28">
          <p className="font-gmarket text-xs font-semibold tracking-[0.18em] text-[#DE1334]">
            FAQ
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {content.faqs.map((faq) => (
              <article
                key={faq.question}
                className="border border-black/15 p-6 md:p-7"
              >
                <h3 className="font-gmarket text-[17px] font-semibold tracking-[-0.03em] text-[#171717]">
                  {faq.question}
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-black/60">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
