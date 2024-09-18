/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { LoadMoreButtonType } from "../../types";
import css from "./LoadMoreButton.module.css";
import { setPage } from "../../redux/appStateSlice";
const LoadMoreButton: React.FC<LoadMoreButtonType> = () => {
  const dispatch = useDispatch();
  const handlerLoadMore = () => {
    dispatch(setPage());
  };
  return (
    <button className={css.button} type="button" onClick={handlerLoadMore}>
      Load More
    </button>
  );
};

export default LoadMoreButton;
