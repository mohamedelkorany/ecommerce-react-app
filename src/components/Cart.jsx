import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { Button } from "react-bootstrap";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <>
      <h2>My Cart</h2>
      {cartItems.length > 0 && (
        <div className="d-flex justify-content-end">
          <h3>
            Total: $
            {cartItems.reduce((total, productItem) => {
              return total + productItem.price * productItem.quantity;
            }, 0).toFixed(2)}
          </h3>
        </div>
      )}
      <hr></hr>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((productItem, index) => (
          <div
            key={index}
            className="card mb-3 justify-content-center bg-light"
          >
            <div className="row g-0">
              <div className="col-md-2">
                <img
                  src={productItem.images[0]}
                  className="img-fluid rounded-start"
                  alt={productItem.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
              </div>
              <div className="col-md-10 my-auto">
                <div className="card-body ">
                  
                  <div className="row justify-content-center align-items-center my-auto">
                    <div className="col-4">
                      <h5 className="card-title">{productItem.title}</h5>
                      <p className="card-text">
                        {productItem.shippingInformation}
                      </p>
                    </div>
                    
                    <div className="col-2">
                      <p className="card-text">
                        <strong>Quantity: {productItem.quantity}</strong>
                      </p>
                      <p className="card-text">
                        <strong>
                          Price: $
                          {(productItem.price * productItem.quantity).toFixed(
                            2
                          )}
                        </strong>
                      </p>
                    </div>

                    <div className="col-6">
                      <div className="row align-items-center justify-content-around">
                        <div className="col-2">
                          <div className="d-flex align-items-center ">
                            <Button
                              className="px-3"
                              variant="outline-secondary"
                              size="sm"
                              onClick={() =>
                                dispatch(decreaseQuantity(productItem.id))
                              }
                              style={{ fontWeight: "bold" }}
                            >
                              -
                            </Button>
                            <span className="mx-3">{productItem.quantity}</span>
                            <Button
                              className="px-3"
                              variant="outline-secondary"
                              size="sm"
                              onClick={() =>
                                dispatch(increaseQuantity(productItem.id))
                              }
                            >
                              +
                            </Button>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <Button
                            className="btn btn-danger py-1 px-4 "
                            onClick={() => dispatch(removeItem(productItem.id))}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Cart;
