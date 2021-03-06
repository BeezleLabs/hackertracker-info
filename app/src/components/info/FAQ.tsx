import FaqSection from "./FaqSection";

function FAQ({ faq }: FaqProps) {
  return (
    <div className='mt-5 mx-8'>
      {faq && (
        <h1 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl'>
          FAQ
        </h1>
      )}
      {faq.map((f) => (
        <FaqSection key={f.id} section={f.question} content={f.answer} />
      ))}
    </div>
  );
}

export default FAQ;
