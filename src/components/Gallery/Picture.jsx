import "./Picture.scss";

const Picture = (props) => {
  return (
    <>
      <div className="picture">
        <img src={"../.." + props.url} className="picture__image" />
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
