import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const faqData = [
  {
    question: "What is a link in bio?",
    answer:
      "A link in bio is a single URL that you can put in your social media bio to direct followers to multiple destinations. Instead of constantly changing the one link allowed in most social media bios, you can use one permanent link that leads to a page with all your important links.",
  },
  {
    question: "How do I create my Linktree?",
    answer:
      "Creating your Linktree is simple! Sign up for free, choose your unique username, customize your page with colors and themes, then add all your important links. You can add links to your website, social media, online store, latest content, and more.",
  },
  {
    question: "Is Linktree free to use?",
    answer:
      "Yes! Linktree offers a free plan that includes unlimited links, basic customization, and analytics. We also offer Pro and Premium plans with advanced features like custom branding, priority support, and detailed analytics.",
  },
  {
    question: "Can I customize how my Linktree looks?",
    answer:
      "You can customize your Linktree with different themes, colors, fonts, and backgrounds. Pro users get access to even more customization options including custom CSS and the ability to remove the Linktree logo.",
  },
  {
    question: "How do I track my link performance?",
    answer:
      "Linktree provides built-in analytics to track your link clicks, page views, and audience insights. You can see which links are performing best and when your audience is most active to optimize your content strategy.",
  },
  {
    question: "Can I use Linktree for my business?",
    answer:
      "Yes! Many businesses use Linktree to drive traffic from social media to their website, online store, booking pages, and more. Our Pro and Premium plans offer business-focused features like lead generation, email collection, and integrations with popular tools.",
  },
]

const FaqComponent = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-[#d2e823] mb-6">Frequently Asked Questions</h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    Everything you need to know about creating your link in bio with Linktree.
                </p>
            </div>

            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:bg-white/15"
                    >
                        <button
                            onClick={() => toggleQuestion(index)}
                            className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                        >
                            <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                            <ChevronDown
                                className={cn(
                                    "w-5 h-5 text-lime-400 transition-transform duration-300 flex-shrink-0",
                                    openIndex === index && "rotate-180",
                                )}
                            />
                        </button>
                        <div
                            className={cn(
                                "overflow-hidden transition-all duration-300 ease-in-out",
                                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                            )}
                        >
                            <div className="px-6 pb-6">
                                <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FaqComponent
