import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "flowbite-react";
import CarouselTheme from "../../components/CustomCarousel/CarouselTheme";
import { CardComponent } from "../../components/Card/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the products", error);
      }
    };

    fetchProducts();
  }, []);

  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    groupedProducts.push(products.slice(i, i + 4));
  }

  return (
    <section className="w-full min-h-screen bg-gray-100 py-8">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Products Carousel
        </h2>

        <Carousel theme={CarouselTheme} className="h-screen">
          {groupedProducts.map((group, index) => (
            <div
              key={index}
              className="flex space-x-4 justify-center items-center bg-white p-4 rounded-lg shadow-md"
            >
              {group.map((product) => (
                <CardComponent
                  key={product.id}
                  className="flex flex-col items-center w-72 bg-white p-2 shadow-lg rounded-lg"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-48 w-full object-contain rounded-md mt-1"
                  />

                  <h2 className="text-base font-bold mb-2 h-32">
                    {product.title}
                  </h2>

                  <p className="text-lg text-[#333]">
                    <strong>${product.price}</strong>
                  </p>
                </CardComponent>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Products;
