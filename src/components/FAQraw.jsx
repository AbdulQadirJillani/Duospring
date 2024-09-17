import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

const data = [
  {
    question: "What types of copywriting services do you offer?",
    answer: "We provide a full range of copywriting services, including website copy, blog content, email marketing, product descriptions, social media posts, and more. Each piece is tailored to meet your brand’s voice and business goals."
  },
  {
    question: "How do you ensure the copy aligns with my brand?",
    answer: "We start with a detailed consultation to understand your brand, target audience, and messaging goals. Throughout the process, we maintain open communication and offer revisions to ensure the final copy reflects your brand’s personality and vision."
  },
  {
    question: "Can you help improve our existing content?",
    answer: "Absolutely! We offer content auditing and editing services to refine and optimize your current copy, ensuring it resonates better with your audience and drives more engagement."
  },
  {
    question: "How long does it take to complete a copywriting project?",
    answer: "Project timelines vary depending on the scope and complexity. We’ll discuss your deadlines upfront and provide a clear schedule to ensure timely delivery without sacrificing quality."
  },
  {
    question: "Do you offer SEO-friendly copywriting?",
    answer: "Yes, we specialize in creating SEO-optimized content that balances engaging writing with the latest SEO practices, helping your brand rank higher and attract more organic traffic."
  },
  {
    question: "How do you price your copywriting services?",
    answer: "Our pricing is based on the type and length of the project. We offer competitive rates and custom packages, so you only pay for what you need. Contact us for a detailed quote."
  },
  {
    question: "Will I own the copy after it’s completed?",
    answer: "Yes, once the project is finalized and payment is completed, all rights to the copy are transferred to you, allowing you full ownership and control over the content."
  },
  {
    question: "How many revisions are included in your services?",
    answer: "We offer a set number of revisions (typically 2-3) depending on the project scope. This ensures we fine-tune the copy to your satisfaction while maintaining project timelines."
  }
]

const FAQraw = () => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-[600px]">
      {
        data.map(({question, answer}, i) => (
          <AccordionItem value={i+1} key={i} className="shadow-md">
            <AccordionTrigger className="text-[#0A2540]">{question}</AccordionTrigger>
            <AccordionContent className="text-[#425466]">{answer}</AccordionContent>
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}

export default FAQraw