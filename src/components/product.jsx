// src/pages/Products.jsx
import { useHero } from '../components/Hero';
import sofa1 from '../assets/sofa1.jpg';
import sofa2 from '../assets/sofa2.jpg';
import sofa3 from '../assets/sofa3.jpg';
import table1 from '../assets/table1.jpg';
import table2 from '../assets/table2.jpg';
import table3 from '../assets/table3.jpg';
import chair1 from '../assets/chair1.jpg';
import chair2 from '../assets/chair2.jpg';
import chair3 from '../assets/chair3.jpg';
import bed1 from '../assets/bed1.jpg';
import bed2 from '../assets/bed2.jpg';
import bed3 from '../assets/bed3.jpg';
import lightning1 from '../assets/lightning1.jpg';
import lightning2 from '../assets/lightning2.jpg';
import lightning3 from '../assets/lightning3.jpg';
import decore1 from '../assets/decore1.jpg';
import decore2 from '../assets/decore2.jpg';
import decore3 from '../assets/decore3.jpg';

const Products = () => {
  const { setBackgroundImage } = useHero();

  const handleProductClick = (image) => {
    setBackgroundImage(image);
  };

  // Combine all products with their categories
  const allProducts = [
    { category: 'Sofa', image: sofa1 },
    { category: 'Sofa', image: sofa2 },
    { category: 'Sofa', image: sofa3 },
    { category: 'Table', image: table1 },
    { category: 'Table', image: table2 },
    { category: 'Table', image: table3 },
    { category: 'Chair', image: chair1 },
    { category: 'Chair', image: chair2 },
    { category: 'Chair', image: chair3 },
    { category: 'Bed', image: bed1 },
    { category: 'Bed', image: bed2 },
    { category: 'Bed', image: bed3 },
    { category: 'Lightning', image: lightning1 },
    { category: 'Lightning', image: lightning2 },
    { category: 'Lightning', image: lightning3 },
    { category: 'Decore', image: decore1 },
    { category: 'Decore', image: decore2 },
    { category: 'Decore', image: decore3 },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {allProducts.map((product, index) => (
            <div key={index} className="relative">
              <img
                src={product.image}
                alt={`${product.category} ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg cursor-pointer"
                onClick={() => handleProductClick(product.image)}
              />
              <p className="mt-2 text-center text-gray-700">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;