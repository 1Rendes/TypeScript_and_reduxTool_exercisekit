import { useDispatch } from "react-redux";
import { ImageCardType } from "../../types";
import css from "./ImageCard.module.css";
import { setModalData } from "../../redux/imagesSlice";
import { setModalToggle } from "../../redux/appStateSlice";

const ImageCard: React.FC<ImageCardType> = ({ imageData }) => {
  const dispatch = useDispatch();
  const ClickHandler = () => {
    dispatch(setModalData(imageData.id));
    dispatch(setModalToggle());
  };

  return (
    <div onClick={ClickHandler}>
      <img
        className={css.image}
        src={imageData.urls.small}
        alt={imageData.alt_description}
      />
    </div>
  );
};

export default ImageCard;
