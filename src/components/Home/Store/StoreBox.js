import React from "react";
import { Card } from "react-bootstrap";

const StoreBox = ({store}) => {
  return (
    <div className="col-md-6 col-lg-3 store_box text-center">
      <div className="store_card">
        <Card className="mb-4">
          <Card.Img
            className="img-fluid store_img"
            variant="top"
            src={store.img}
          />
          <Card.Body className="text-center body_card">
            <Card.Title className="store_title">{store.title}</Card.Title>
            <Card.Text className="store_text">
              {store.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default StoreBox;
