const ExtraSectionBook = () => {
  return (
    <div className="mt-8">
      <div className="flex container flex-col lg:flex-row mx-auto gap-5">
        {/* First Banner */}
        <div className="relative">
          <img
            className="md:w-[900px] h-80 object-cover"
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Book Collection"
          />
          {/* Gradient Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 to-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center pl-4 lg:pl-12">
            <div>
              <p className="md:text-lg font-medium text-white drop-shadow-lg">
                Explore the world of literature
              </p>
              <h3 className="text-2xl md:text-5xl font-bold mt-2 text-white drop-shadow-lg">
                Best Sellers
              </h3>
              <button className="mt-4 px-6 py-3 text-white font-medium text-lg bg-emerald-400 rounded-3xl transition duration-300 hover:bg-emerald-500">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Second Banner */}
        <div className="relative">
          <img
            className="md:w-[900px] h-80 object-cover"
            src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Book Club"
          />
          {/* Gradient Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 to-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center pl-4 lg:pl-12">
            <div>
              <p className="md:text-lg font-medium text-white drop-shadow-lg">
                Join our community of readers
              </p>
              <h3 className="text-2xl md:text-5xl font-bold mt-2 text-white drop-shadow-lg">
                Book Club
              </h3>
              <button className="mt-4 px-6 py-3 text-white font-medium text-lg bg-emerald-400 rounded-3xl transition duration-300 hover:bg-emerald-500">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionBook;
