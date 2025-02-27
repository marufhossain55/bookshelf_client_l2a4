/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Service = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index: any) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-12">
      {/* Page Header */}
      <Helmet>
        <title>BookShelf | Service</title>
      </Helmet>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-emerald-600">Our Services</h1>
        <p className="text-lg text-gray-600 mt-3">
          Discover how BookShelf can enhance your reading experience.
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="bg-white rounded-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            About BookShelf
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <p className="text-lg text-gray-600">
              At BookShelf, we bring you the best reading experience with a
              curated collection of books, from bestsellers to rare finds.
              Whether you’re a casual reader or a book enthusiast, we offer
              everything you need: book sales, recommendations, book clubs, and
              personalized services tailored to your tastes. Join us in
              exploring the world of literature!
            </p>
            <img
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="BookShelf services"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'What services do you offer?',
                answer:
                  'We provide book sales, recommendations, book clubs, and personalized reading plans.',
              },
              {
                question: 'What makes BookShelf unique?',
                answer:
                  'We prioritize quality, curation, and customer satisfaction, offering tailored services and a diverse collection of books.',
              },
              {
                question: 'How can I join a book club?',
                answer:
                  'You can join a book club through our website or visit our store to learn more about our upcoming sessions.',
              },
              {
                question: 'Do you offer discounts for bulk purchases?',
                answer:
                  'Yes, we offer special discounts for bulk purchases and events. Contact us for more details.',
              },
            ].map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span>{faqOpen === index ? '-' : '+'}</span>
                </button>
                {faqOpen === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Open and Close Timings */}
        <div className="bg-white rounded-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Operating Hours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-gray-600">
            <div>
              <p className="font-semibold">Monday - Friday:</p>
              <p>9:00 AM - 7:00 PM</p>
            </div>
            <div>
              <p className="font-semibold">Saturday:</p>
              <p>10:00 AM - 5:00 PM</p>
            </div>
            <div>
              <p className="font-semibold">Sunday:</p>
              <p>Closed</p>
            </div>
            <div>
              <p className="font-semibold">Holidays:</p>
              <p>10:00 AM - 3:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-emerald-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg text-gray-600">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-emerald-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg text-gray-600">
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-emerald-300"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Service;
