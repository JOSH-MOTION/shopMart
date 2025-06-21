// src/components/Hero.jsx
import furniture from '../assets/furniture.jpg'; // Ensure this path matches your image

const Home = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <img
        src={furniture}
        alt="Furniture Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0  bg-opacity-30"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            70% SALE OFF
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            FURNITURE AT COST
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Discover premium furniture at unbeatable prices. Transform your home with our exclusive collection today!
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;