import { Helmet } from 'react-helmet';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // FontAwesome icons

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Helmet>
        <title>BookShelf | About</title>
      </Helmet>
      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-500">
            About Our Bookstore
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Welcome to BookShelf – where stories come to life, knowledge is
            shared, and reading becomes a lifelong passion.
          </p>
        </div>

        {/* Company Info Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At <strong>BookShelf</strong>, we believe that every reader
              deserves access to a diverse collection of books that inspire,
              educate, and entertain. Founded with a love for literature, we aim
              to provide book lovers of all ages with a curated selection of
              titles that cater to every taste and interest.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether you’re searching for the latest bestseller, a timeless
              classic, or a hidden gem, our shelves are stocked to meet your
              reading needs. We are dedicated to fostering a love for reading
              and making books accessible to everyone – no matter their
              preferences.
            </p>
          </div>

          {/* Bookstore Images */}
          <div className="grid grid-cols-1 gap-6">
            <img
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Bookstore Interior"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At BookShelf, our mission is to inspire and empower individuals
            through the joy of reading. We are dedicated to providing a
            welcoming space where readers can discover new worlds, gain
            knowledge, and connect with others who share their passion for
            books.
          </p>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We envision a world where books are cherished as a gateway to
            imagination, learning, and personal growth. Our vision is to be a
            leading destination for book lovers, offering a diverse range of
            titles and fostering a vibrant literary community.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We’d love to hear from you! Whether you have questions, feedback, or
            just want to say hello, feel free to reach out to us. Here’s how you
            can contact us:
          </p>
          <div className="flex items-center space-x-6">
            <FaMapMarkerAlt className="text-emerald-500" />
            <span className="text-lg text-gray-700">
              Located in the heart of the city
            </span>
          </div>
          <div className="flex items-center space-x-6 mt-4">
            <FaPhoneAlt className="text-emerald-500" />
            <span className="text-lg text-gray-700">
              Call us at: (123) 456-7890
            </span>
          </div>
          <div className="flex items-center space-x-6 mt-4">
            <FaEnvelope className="text-emerald-500" />
            <span className="text-lg text-gray-700">
              Email: contact@bookshelf.com
            </span>
          </div>
        </div>

        {/* Values and Commitment */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Commitment
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At BookShelf, our commitment goes beyond just selling books. We are
            dedicated to ensuring that our customers have access to the best
            literary experiences. We focus on:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>
              Quality: Curating a selection of books from renowned authors and
              publishers.
            </li>
            <li>
              Diversity: Offering a wide range of genres, cultures, and
              perspectives.
            </li>
            <li>
              Sustainability: Promoting eco-friendly practices, including
              recycled paper and sustainable packaging.
            </li>
            <li>
              Community: Building a strong literary community through book
              clubs, author events, and reading programs.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
