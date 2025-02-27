import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

import { Autoplay, History, Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        loop={true}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        history={{
          key: '/',
        }}
        modules={[Autoplay, Navigation, Pagination, History]}
        className="mySwiper rounded-xl container relative"
      >
        {/* Slide 1 */}
        <SwiperSlide data-history="/">
          <div className="relative">
            <img
              className="w-full object-cover rounded-xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Book Collection Slide"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="text-center text-white px-6 sm:px-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Explore Our Collection
                </h2>
                <p className="text-lg mb-6">
                  Discover a world of books for every reader.
                </p>
                <button className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition">
                  Browse Books
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide data-history="/">
          <div className="relative">
            <img
              className="w-full object-cover rounded-xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Book Club Slide"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="text-center text-white px-6 sm:px-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Join Our Book Club
                </h2>
                <p className="text-lg mb-6">
                  Connect with fellow book lovers and discuss your favorite
                  reads.
                </p>
                <button className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide data-history="/">
          <div className="relative">
            <img
              className="w-full object-cover rounded-xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Reading Nook Slide"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="text-center text-white px-6 sm:px-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Create Your Reading Nook
                </h2>
                <p className="text-lg mb-6">
                  Find the perfect books to build your cozy reading space.
                </p>
                <button className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide data-history="/">
          <div className="relative">
            <img
              className="w-full object-cover rounded-xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Gift Books Slide"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="text-center text-white px-6 sm:px-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Gift the Joy of Reading
                </h2>
                <p className="text-lg mb-6">
                  Find the perfect book for your loved ones.
                </p>
                <button className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition">
                  Explore Gifts
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
