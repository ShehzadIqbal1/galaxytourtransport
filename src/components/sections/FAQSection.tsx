import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FAQItem } from "@/lib/types";

export interface FAQSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  items: FAQItem[];
}

export function FAQSection({
  eyebrow,
  title,
  description,
  items,
}: FAQSectionProps) {
  return (
    <section id="faq" className="section-padding bg-onyx" aria-labelledby="faq-heading">
      <div className="container-content">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          titleId="faq-heading"
          description={description}
        />
        <Reveal>
          <Accordion
            items={items.map((item) => ({
              id: item.id,
              title: item.question,
              content: <p>{item.answer}</p>,
            }))}
          />
        </Reveal>
      </div>
    </section>
  );
}
