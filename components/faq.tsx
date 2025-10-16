"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What if I need more revisions?",
    answer:
      "We offer a defined number of revisions in our package. Additional revisions can be requested and will be quoted separately based on the work involved.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Simply contact us through the website form or email. We’ll discuss your requirements and get started with a plan and timeline.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept major credit/debit cards, PayPal, and bank transfers for your convenience.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes! We provide post-launch support packages tailored to your needs, including maintenance, updates, and analytics monitoring.",
  },
];

export default function FAQ() {
  // Fix: state can be number or null
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Frequently Asked <span className="text-primary">Questions?</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index: number) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-l-4 border-[#ff914d]" : "border-[#b4b4b4]"
                }`}
              >
                <button
                  className="w-full flex justify-between items-center p-5 bg-white text-left font-semibold text-gray-800"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>

                {isOpen && <div className="p-5 bg-gray-50 text-gray-700">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
