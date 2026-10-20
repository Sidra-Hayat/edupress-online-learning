
import { useState } from 'react';

const faqs = [
  {
    question: 'What Does Royalty Free Mean?',
    answer:
      'Royalty free means you can use the purchased learning materials according to the applicable license without paying a separate royalty for each use.',
  },
  {
    question: 'How Do I Purchase A Course?',
    answer:
      'You can purchase a course by clicking the "Enroll Now" button on any course page. We accept all major credit cards, PayPal and other payment methods.',
  },
  {
    question: 'Can I Get A Refund?',
    answer:
      'Yes! We offer a 30-day money-back guarantee. If you are not satisfied with your course, contact us within 30 days of purchase for a full refund.',
  },
  {
    question: 'How Long Do I Have Access?',
    answer:
      'Once enrolled, you have lifetime access to the course materials, including all future updates.',
  },
  {
    question: 'Are The Courses Self-Paced?',
    answer:
      'Yes, all our courses are fully self-paced. You can start and stop at any time, and progress through the material at your own speed.',
  },
  {
    question: 'Do I Get A Certificate?',
    answer:
      'Yes! Upon completing a course, you will receive a certificate of completion that you can share on LinkedIn or add to your resume.',
  },
  {
    question: 'How Do I Become An Instructor?',
    answer:
      'Click the "Become An Instructor" button on our homepage and fill out the application form. Our team will review your application and get back to you within 3-5 business days.',
  },
  {
    question: 'Is There A Free Trial?',
    answer:
      'Many of our courses offer free preview lessons. Look for the "Free" badge on course listings to find completely free courses.',
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`}>
      <button
        type="button"
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="faq-page">
      <div className="breadcrumb">
        <span>Home</span>
        {' / '}
        <span>FAQs</span>
      </div>

      <div className="faq-layout">
        <section className="faq-content">
          <h1 className="faq-title">Frequently Asked Questions</h1>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </section>

        <aside className="faq-image">
          <img
            src="/images/math.png"
            alt="Learning illustration"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
        </aside>
      </div>
    </main>
  );
}
