import Card from "react-bootstrap/Card";

const DataCard = (props) => {
  return (
    <Card
      className="dataCard"
      style={{ minHeight: "20rem", minWidth: "20rem" }}
    >
      <Card.Img variant="top" src={props.image} style={{ maxHeight: 200 }} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text className="descriptionText">{props.artist}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DataCard;
