import { useSelector } from "react-redux";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { selectImagesData } from "../../redux/selectors";
import { ImagesGalleryType } from "../../types";

const ImageGallery: React.FC<ImagesGalleryType> = () => {
  const imagesData = useSelector(selectImagesData);
  return (
    <ul className={css.imageList}>
      {imagesData.map((imageData) => (
        <li className={css.imageItem} key={imageData.id}>
          <ImageCard imageData={imageData} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
