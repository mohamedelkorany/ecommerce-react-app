import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router";

function Cards(props) {
  const { productItem } = props;
  const navigate = useNavigate();
  

  const handleClick = () => {
    navigate(`/product-details/${productItem.id}`);
  };

  const isAvailable = productItem.availabilityStatus === "In Stock";

  return (
    <Card
      style={{ width: "18rem" }}
      className="h-100 d-flex flex-column position-relative"
    >
      <Badge
        bg={isAvailable ? "success" : "danger"}
        className="position-absolute top-0 start-0 m-2"
      >
        {productItem.availabilityStatus}
      </Badge>

      <Card.Img
        variant="top"
        src={productItem.images[0]}
        style={{ height: "200px", objectFit: "contain" }}
      />

      <Card.Body className="d-flex flex-column flex-grow-1">
        <Card.Title
          className="text-center"
          style={{ fontSize: "1rem", minHeight: "3rem", overflow: "hidden" }}
        >
          {productItem.title}
        </Card.Title>

        <Card.Text
          className="flex-grow-1"
          style={{ fontSize: "0.9rem", minHeight: "6rem", overflow: "hidden" }}
        >
          {productItem.description || "No description available."}
        </Card.Text>

        <Card.Text
          className="text-center"
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            minHeight: "2rem",
            color: "#FFD700",
          }} 
        >
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
        </Card.Text>

        <Card.Text
          className="text-center"
          style={{ fontWeight: "bold", fontSize: "1rem", minHeight: "2rem" }}
        >
          ${productItem.price}
        </Card.Text>

        <Button
          variant="success"
          className="mt-auto w-100"
          onClick={handleClick}
        >
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
