import "./Picture.scss";

const Picture = (props) => {
  let check = "";
  return (
    <>
      <div className="picture">
        <img
          src={"C:/Users/User/The_ninth_wave.jpeg"}
          className="picture__image"
        />
        <div className="picture__description">
          <p className="picture__description-name">{props.name}</p>
          <div className="picture__description-details">
            <p>Author: {props.author}</p>
            <p>Created: {props.created}</p>
            <p>Location: {props.location}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Picture;
