// components/Accordion.js

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const AccordionItem = ({ title, children, isOpen, onToggle, bgColor }) => (
  <div className="border-b">
    <button
      className={`w-full text-left py-4 px-6 focus:outline-none flex justify-between items-center ${bgColor}`}
      onClick={onToggle}
    >
      <span className="font-bold text-white">{title}</span>
      {/* Arrow Icon */}
      {isOpen ? (
        <ChevronUp className="h-6 w-6 text-white" />
      ) : (
        <ChevronDown className="h-6 w-6 text-white" />
      )}
    </button>
    {isOpen && <div className="py-4 px-6 text-gray-700">{children}</div>}
  </div>
);

const Accordiann = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Define the background colors for the accordion items
  const accordionColors = [
    "bg-[#43923f]", // Color for 1st, 3rd, 5th items (Green)
    "bg-[#81da58]", // Color for 2nd, 4th, 6th items (Blue)
  ];

  return (
    <div className="w-full mx-auto mt-8 bg-white">
      {/* Accordion Item 1: OUR PROJECT */}
      <AccordionItem
        title="OUR PROJECT"
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
        bgColor={accordionColors[0]} // First item (Green)
      >
        <div className="w-full mx-4 md:mx-0">
          <table className="min-w-full bg-white table-auto">
            <p className="text-xl">
              MAPL proposes to have Cow park in each of the proposed{" "}
              <strong>The Agro Village (TAV)</strong> and the purpose is:
              <ol>
                <li>1. Milk & Dairy Products.</li>
                <li>
                  2. Demonstrate them to create awareness for the younger
                  generation about their divinity.
                </li>
                <li>
                  3. Save them till their natural death and protect them from
                  slaughtering them.
                </li>
              </ol>
            </p>
          </table>
        </div>
      </AccordionItem>

      {/* Accordion Item 2: WHY YOU SHOULD PARTICIPATE */}
      <AccordionItem
        title="WHY YOU SHOULD PARTICIPATE"
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
        bgColor={accordionColors[1]} // Second item (Blue)
      >
        <div className="w-full mx-4 md:mx-0">
          <table className="min-w-full bg-white table-auto">
            <p className="text-xl">
              <span className="bg-gray font-bold text-black">
                WHY DO I NEED the HOLY-COW
              </span>
              <br />
              <br />
              • Protection of the Holy-Cows is viewed as upholding righteousness
              and moral order.
              <br />• The 33 crore Devatas thus also represent 33 crore gene
              functions/characteristics in human beings.
              <br />• Cow embodies the earths nurturing essence
              <br />• Significance in Hindu beliefs and rituals
              <br />• Symbol of Non-Violence and Compassion.
              <br />• Symbol of Motherhood and Fertility
              <br />• Provides sustenance
              <br />• Represents Prosperity
              <br />• Revered as Gau Mata and Obtain her blessings
              <br />• Their excreta are good for Agriculture.
              <br />
              <br />
              <span className="bg-gray font-bold text-black">
                AFFORDABILITY{" "}
              </span>
              <br />
              <br /> • Everyone cannot afford to buy a Cow.
              <br />• MAPL gives you an opportunity to be a PARTIAL OWNER of the
              Holy-Cow
              <br />• Even by being a PARTIAL OWNER you, your family and all
              your near and dear will be blessed by the Holy-Cow in Health,
              Happiness and Prosperity.
              <br />
              <br />
              <span className="bg-gray font-bold text-black">PLACE </span>
              <br />
              <br /> • Even if you can afford to buy a cow yet you are finding
              it difficult in housing the Holy-Cow your premises.
              <br />• Even if you are able to house the Holy–Cow in your
              premises your pet Holy-Cow is not happy as it needs pastures to
              graze and move around and have sufficient open spaces.
              <br />
              <br />
              <span className="bg-gray font-bold text-black">CARETAKER </span>
              <br />
              <br /> • MAPL through their farm management takes care of the Cows
              and helps them through necessary Veterinary requirements as and
              when needed
              <br />• Our Proposed Cow Park will be a choice for your kids to
              play with miniature cows from Punganur
              <br />
              <br />
            </p>
          </table>
        </div>
      </AccordionItem>

      {/* Accordion Item 3: HOW TO PARTICIPATE */}
      <AccordionItem
        title="HOW TO PARTICIPATE"
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
        bgColor={accordionColors[0]} // Third item (Green)
      >
        <div className="w-full mx-4 md:mx-0">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Participant Tiers Cards */}
            {[
              {
                stripeColor: "bg-[#cd7f32]", // Bronze
                img: "/bronze.png",
                title: "GENERAL Participant",
                price: "Rs 1,178.82",
                desc: "• Partial Owner for the lifetime of the designated Cow",
                desc2: "• Be Blessed by 33 Crore Gods",
                desc3: "• Receive Certificate as Partial Owner of the Cow",
                priceCode: "bronze",
              },
              {
                stripeColor: "bg-[#e5e4e2]", // Silver
                img: "/silver.png",
                title: "SILVER Participant",
                price: "Rs 5,097.60",
                desc: "• Partial Owner for the lifetime of the designated Cow",
                desc2: "• Be Blessed by 33 Crore Gods",
                desc3: "• Receive Certificate as Partial Owner of the Cow",
                desc4:
                  "• Receive 9% Discount Coupon in accommodation when you stay at our The Agro Village (TAV)",
                desc5: "• Applicable for 3 Visits",
                priceCode: "silver",
              },
              {
                stripeColor: "bg-[#ffd700]", // Gold
                img: "/gold.png",
                title: "GOLD Participant",
                price: "Rs 11,798.82",
                desc: "• Partial Owner for the lifetime of the designated Cow",
                desc2: "• Be Blessed by 33 Crore Gods",
                desc3: "• Receive Certificate as Partial Owner of the Cow",
                desc4:
                  "• Receive 18% Discount Coupon in accommodation when you stay at our The Agro Village (TAV)",
                desc5: "• Applicable for 6 Visits",
                priceCode: "gold",
              },
              {
                stripeColor: "bg-[#f8d7da]", // Platinum
                img: "/platinumm.png",
                title: "PLATINUM Participant",
                price: "Rs 21,240",
                desc: "• Partial Owner for the lifetime of the designated Cow",
                desc2: "• Be Blessed by 33 Crore Gods",
                desc3: "• Receive Certificate as Partial Owner of the Cow",
                desc4:
                  "• Receive 27% Discount Coupon in accommodation when you stay at our The Agro Village (TAV)",
                desc5: "• Applicable for 9 Visits",
                priceCode: "platinum",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col"
              >
                <div className=" flex items-center justify-center mb-6">
                  <div
                    className={` w-full h-2 ${service.stripeColor} rounded-t-lg`}
                  />
                </div>
                <h3 className="text-xl font-medium mb-4">
                  {service.title}
                  <br />
                  {service.price}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.desc}
                  <br />
                  {service.desc2}
                  <br />
                  {service.desc3}
                  <br />
                  {service.desc4}
                  <br />
                  {service.desc5}
                </p>
                <Link
                  href={{
                    pathname: "/book-appointment",
                    query: { priceCode: service.priceCode }, // Pass the price code to the next page
                  }}
                  className="text-green-600 font-medium hover:underline mt-auto"
                >
                  Participate Now!
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AccordionItem>
    </div>
  );
};

export default Accordiann;
