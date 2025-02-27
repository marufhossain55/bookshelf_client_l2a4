import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaBookOpen,
} from 'react-icons/fa';

const ExtraSectionBookBenefits = () => {
  return (
    <div className="mt-8">
      <div
        className="bg-cover bg-center py-12"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
        }}
      >
        <div className="text-white text-center p-10 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-screen-lg mx-auto">
            {/* Free Shipping */}
            <div className="flex items-center justify-center gap-4 sm:flex-col sm:gap-2">
              <div className="bg-white p-3 rounded-full">
                <FaShippingFast className="text-2xl text-emerald-600" />
              </div>
              <div>
                <p className="text-lg font-semibold">Free Shipping</p>
                <p>For orders from $50</p>
              </div>
            </div>

            {/* 100% Satisfaction */}
            <div className="flex items-center justify-center gap-4 sm:flex-col sm:gap-2">
              <div className="bg-white p-3 rounded-full">
                <FaShieldAlt className="text-2xl text-emerald-600" />
              </div>
              <div>
                <p className="text-lg font-semibold">100% Satisfaction</p>
                <p>Quality guaranteed</p>
              </div>
            </div>

            {/* Support 24/7 */}
            <div className="flex items-center justify-center gap-4 sm:flex-col sm:gap-2">
              <div className="bg-white p-3 rounded-full">
                <FaHeadset className="text-2xl text-emerald-600" />
              </div>
              <div>
                <p className="text-lg font-semibold">Support 24/7</p>
                <p>Call us anytime</p>
              </div>
            </div>

            {/* Exclusive Books */}
            <div className="flex items-center justify-center gap-4 sm:flex-col sm:gap-2">
              <div className="bg-white p-3 rounded-full">
                <FaBookOpen className="text-2xl text-emerald-600" />
              </div>
              <div>
                <p className="text-lg font-semibold">Exclusive Books</p>
                <p>Rare and limited editions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionBookBenefits;
