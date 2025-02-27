import { FaBookOpen, FaUserFriends } from 'react-icons/fa';

const BookShelfMission = () => {
  return (
    <div>
      <div className="container mx-auto mt-5">
        <div className="bg-white rounded-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between">
            <div className="space-y-5">
              <h3 className="text-5xl font-bold">
                Discover the World <br />
                of Literature
              </h3>
              <p>
                At BookShelf, our mission is to inspire and empower individuals
                through the joy of reading. We are dedicated to providing a
                curated collection of books, fostering a vibrant reading
                community, and promoting the love of literature for all ages.
              </p>
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
                <div className="flex items-center gap-10">
                  <button
                    type="button"
                    aria-label="Book Collection"
                    className="focus:outline-none"
                  >
                    <FaBookOpen className="text-6xl" />
                  </button>
                  <div>
                    <h4 className="text-xl font-semibold">Book Collection</h4>
                    <p>10,000+ Titles</p>
                  </div>
                </div>
                <div className="flex items-center gap-10">
                  <button
                    type="button"
                    aria-label="Reading Community"
                    className="focus:outline-none"
                  >
                    <FaUserFriends className="text-6xl" />
                  </button>
                  <div>
                    <h4 className="text-xl font-semibold">Reading Community</h4>
                    <p>Join 50,000+ Readers</p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="bg-emerald-400 text-white rounded-2xl p-1 px-4 hover:bg-emerald-500 transition focus:outline-none"
              >
                Learn More
              </button>
            </div>
            <div className="relative">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
              <img
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="BookShelf services"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShelfMission;
