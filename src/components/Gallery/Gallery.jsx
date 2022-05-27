import { useState, useEffect } from "react";
import "./Gallery.scss";
import Picture from "./Picture";

const Gallery = (props) => {
  const [pics, setPics] = useState([
    {
      id: 1,
      name: "Name 1",
      author: "Author 1",
      created: 1,
      location: "Location 1",
    },
    {
      id: 2,
      name: "Name 2",
      author: "Author 2",
      created: 2,
      location: "Location 2",
    },
    {
      id: 3,
      name: "Name 3",
      author: "Author 3",
      created: 3,
      location: "Location 3",
    },
  ]);

  useEffect(() => {
    fetch("https://test-front.framework.team/paintings")
      .then((response) => response.json())
      .then((pics) => setPics(pics));
  });

  let picsElements = pics.map((pic) => (
    <Picture
      url={pic.imageUrl}
      name={pic.name}
      author={pic.author}
      created={pic.created}
      location={pic.location}
      key={pic.id}
    />
  ));
  return <div className="gallery">{picsElements}</div>;
};

export default Gallery;
