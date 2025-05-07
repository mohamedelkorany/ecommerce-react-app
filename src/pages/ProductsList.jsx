import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/config";
import Cards from "../components/Card";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="container">
        {isLoading && (
          <div className="spinner-border position-absolute top-50 start-50" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <div className="row g-4 m-3">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Cards productItem={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
