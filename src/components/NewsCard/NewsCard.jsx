import React from "react";
import Card from "react-bootstrap/Card";
import Rating from "react-rating";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import moment from "moment/moment";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, author, image_url, rating, title, details, total_view } = news;
  console.log(news);
  return (
    <Card className="mb-4">
      <Card.Header>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center gap-3 flex-grow-1">
            <img src={author.img} alt="" className="author-image" />
            <div>
              <p className="mb-0">{author.name ? author.name : ""}</p>
              <p className="mb-0">
                {moment(author.published_date).format("yyyy-MM-D")}
              </p>
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-2" />
            <FaShareAlt />
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <img src={image_url} alt="" className="w-100" />
        <Card.Text>
          {`${details}`.slice(0, 250)}...
          <Link
            to={`/news/${_id}`}
            className="text-decoration-none text-warning"
          >
            Read More
          </Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1">
          <Rating
            readonly
            placeholderRating={rating.number}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          />
          <span className="ms-2">{rating.number}</span>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <p className="mb-0">
            <FaEye />
          </p>
          <p className="mb-0 ms-2">{total_view}</p>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
