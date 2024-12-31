import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const faqList = [
    {
        isActive: true,
        question: "Who can donate blood?",
        answer:
            "Most healthy individuals aged 17 to 65 can donate blood. Donors must meet certain weight and health criteria to ensure safety for both the donor and the recipient. It's always recommended to check with your local blood bank for specific requirements.",
    },
    {
        isActive: false,
        question: "How often can I donate blood?",
        answer:
            "You can typically donate whole blood every 8 weeks (56 days). Platelet donors can donate more frequently, usually every 7 days, up to 24 times a year.",
    },
    {
        isActive: false,
        question: "What should I eat or drink before donating blood?",
        answer:
            "Before donating, drink plenty of water and have a meal rich in iron, such as spinach, beans, or red meat. Avoid fatty foods as they can affect blood testing.",
    },
    {
        isActive: false,
        question: "How is donated blood used?",
        answer:
            "Donated blood is separated into components like red blood cells, plasma, and platelets, which can help treat trauma patients, individuals undergoing surgeries, cancer patients, and those with chronic illnesses.",
    },
    {
        isActive: false,
        question: "Are there any risks to donating blood?",
        answer:
            "Blood donation is a safe process. Some donors may experience mild side effects like dizziness or bruising, but these are temporary. The equipment used is sterile and single-use.",
    },
    {
        isActive: false,
        question: "How can I find my blood type?",
        answer:
            "Your blood type can be determined during your first blood donation. Some clinics and hospitals also offer blood typing tests. Knowing your blood type is useful in emergencies.",
    },
    {
        isActive: false,
        question: "Can I receive blood from any donor?",
        answer:
            "No, blood transfusions require compatible blood types. For example, O-negative is a universal donor type, while AB-positive is a universal recipient. Always ensure blood type compatibility to avoid complications.",
    },
];

const FaqItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(faq.isActive || false);

    const toggleFaq = () => setIsOpen(!isOpen);

    return (
        <div className={isOpen && "active"}>
            <a
                href="#!"
                className="btn px-0 py-4 w-full text-start flex justify-between items-center"
                onClick={toggleFaq}
            >
                <span>{faq.question}</span>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </a>
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } border-l-2 border-red-600 mb-4`}
            >
                <div className="px-6">
                    <p className="opacity-50">{faq.answer}</p>
                </div>
            </div>
        </div>
    );
};

FaqItem.propTypes = {
    faq: PropTypes.object.isRequired,
};

const FAQ = () => {
    return (
        <section className="py-14 md:py-24 bg-red-50  text-zinc-900 ">
            <div className="container px-16 md:px-8 lg:px-28">
                <div className="grid grid-cols-12 justify-center mb-12">
                    <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-11 text-center">
                        <h2 className="font-bold text-[25px] md:text-[45px] leading-none mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-8 md:col-start-3">
                        <div className="bg-white shadow p-6 rounded-xl">
                            {faqList.map((faq, i) => (
                                <FaqItem faq={faq} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
