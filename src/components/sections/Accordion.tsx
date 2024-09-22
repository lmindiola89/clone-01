"use client";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

interface FAQ {
  question: string;
  answer: string;
  more: string;
}

const FAQs: FAQ[] = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    more: "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from COP 16,900 to COP 38,900 a month. No extra costs, no contracts.",
    more: "",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    more: "You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    more: "",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    more: "",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
    more: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="px-5 mx-auto max-w-7xl">
      <h2 className="text-[32px] md:text-5xl font-bold text-center py-10">
        Frequently Asked Questions
      </h2>
      {FAQs.map((faq, index) => (
        <div key={index} className="bg-[#2d2d2d] mb-2 ">
          <h3>
            <button
              className="flex justify-between items-center w-full text-left p-6 transition hover:bg-neutral-700"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-[18px] lg:text-[24px]">{faq.question}</span>
              <AiOutlinePlus
                className={`w-[24px] h-[24px] transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              />
            </button>
          </h3>
          {openIndex === index && (
            <div className="p-6 border-t-2 border-black text-[18px] lg:text-[24px]">
              <p>{faq.answer}</p>
              <p className="mt-4">{faq.more}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
