import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { axiosInstance } from "../apis/config";
import { Badge, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";


const ProductsDetails = () => {
  const [productItem, setProductItem] = useState();
  const params = useParams();
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(productItem));
    navigate(`/Cart`);
  };

  useEffect(() => {
    axiosInstance
      .get(`/products/${params.id}`)
      .then((res) => setProductItem(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  if (!productItem) {
    return <p>Loading...</p>;
  }

  const isAvailable = productItem.availabilityStatus === "In Stock";

  return (
    <div className="card mb-3" style={{ maxWidth: "80vw", height: "70vh" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={productItem.images[0]}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title" style={{ fontWeight: "bold" }}>
              {productItem.title}
            </h3>
            <p className="card-text">{productItem.description}</p>
            <p className="card-text">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  style={{
                    color:
                      index < Math.round(productItem.rating)
                        ? "#FFD700"
                        : "#e4e5e9",
                  }}
                >
                  ★,
                </span>
              ))}
            </p>
            <hr></hr>
            <h4 style={{ fontWeight: "bold" }}>${productItem.price}</h4>
            <hr></hr>
            <Badge bg={isAvailable ? "success" : "danger"} className=" my-2">
              {productItem.availabilityStatus}
            </Badge>
            <p>More Information</p>
            <Badge bg={"warning"} className=" my-2 px-4 py-2 me-4">
              {productItem.category}
            </Badge>
            <Badge bg={"warning"} className=" my-2 px-4 py-2 ">
              {productItem.brand}
            </Badge>
            <hr></hr>
            <p>Only {productItem.stock} items left!</p>
            <div className="container">
            <Button variant="success" className="mt-auto w-25 me-3" style={{ borderRadius: "20px" }}>
              Buy Now
            </Button>
            <Button onClick={handleClick} variant="outline-dark" className="mt-auto w-25" style={{ borderRadius: "20px" }}>
              Add to Cart
            </Button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
