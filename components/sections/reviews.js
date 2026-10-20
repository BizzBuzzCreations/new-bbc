"use client";

import React from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonials-columns-1";
import RichText from "@/components/ui/richText";

const testimonials = [
  {
    name: "Sunayana Srivastava",
    role: "Verified Google Review",
    text: "Great Digital Marketing agency! Professional, creative & result oriented. Our campaigns have performed better than ever since partnering with BizzBuzz creations. Highly recommend their services.",
  },
  {
    name: "Raunak Tripathi",
    role: "Verified Google Review",
    text: "Great experience with Bizzbuzz Creations. Professional, responsive, and delivered quality work on time. Highly recommended for growing your business.",
  },
  {
    name: "Subhash Srivastava",
    role: "Verified Google Review",
    text: "Highly professional and competent team. Very cooperative and prompt their services. The city needs such a service providers. I would recommend this organisation highly to everyone.",
  },
  {
    name: "Sarthak Mishra",
    role: "Verified Google Review",
    text: "Awesome experience with bizz buzz creations. Great for people and companies looking out for digital marketing agency.",
  },
  {
    name: "Tariq Khan",
    role: "Verified Google Review",
    text: "Best digital marketing agency in prayagraj. They are very professional and cooperative. I am very happy with their services. I would recommend this organisation highly to everyone.",
  },
  {
    name: "Rudra Pratap Singh",
    role: "Verified Google Review",
    text: "One of the best digital marketing service providers in Prayagraj. The team is highly trustworthy and delivers outstanding SEO results. Great experience overall!",
  },
];

export default function Reviews({ content }) {
  const heading = content?.reviewsHeading || "Customer Reviews";
  const subtext = content?.reviewsSubtext || "See what our customers have to say about us.";
  const items = content?.testimonials?.length > 0 ? content.testimonials : testimonials;

  return (
    // id: in-page link target (e.g. a "Read Client Reviews" button saved as "#reviews");
    // scroll-mt keeps the heading clear of the sticky navbar.
    <section id="reviews" className="relative overflow-hidden bg-black py-14 md:py-20 scroll-mt-20">

      <div className="container mx-auto px-5 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mt-5 text-white">
            {heading}
          </h2>
          <RichText as="p" text={subtext} className="text-center mt-5 text-white" />
        </motion.div>

        {/* Still cards (they used to scroll upward in endless columns, and
            phones only ever saw two of them): a grid from md up, and a
            swipe row on phones with each card 85% wide so the next peeks in. */}
        {/* Focusable + labelled so keyboard users can scroll the phone swipe row with the arrow keys. */}
        <div
          role="region"
          aria-label="Customer reviews"
          tabIndex={0}
          className="-mx-5 md:mx-auto mt-10 flex md:grid snap-x snap-mandatory overflow-x-auto md:overflow-visible scroll-px-5 px-5 md:px-0 pb-2 md:pb-0 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#40A2D8]"
        >
          {items.map((t, i) => (
            <TestimonialCard key={i} {...t} className="w-[85%] shrink-0 snap-start md:w-auto" />
          ))}
        </div>
      </div>
    </section>
  );
}
