/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import { Circles } from "react-loader-spinner";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";
import css from "./App.module.css";
import ImageModal from "./components/ImageModal/ImageModal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectImagesData,
  selectLoader,
  selectModalToggle,
  selectPage,
  selectQuery,
  selectTotalPages,
} from "./redux/selectors";
import { newSearch } from "./redux/appStateSlice";
import { cleanImagesData } from "./redux/imagesSlice";
import { getimages } from "./redux/operations";

const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector(selectLoader);
  const imagesData = useSelector(selectImagesData);
  const query = useSelector(selectQuery);
  const page = useSelector(selectPage);
  const totalPage = useSelector(selectTotalPages);
  const modalIsOpen = useSelector(selectModalToggle);

  // const onLoadMore = (page: number): void => {
  //   const newPage = page + 1;
  //   setPage(newPage);
  //   newPage === totalPage && toast.success("That's all results");
  // };

  const onSearch = (query) => {
    dispatch(cleanImagesData());
    if (!query) {
      toast.error("Please fill the request");
      return;
    }
    dispatch(newSearch(query));
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const values = { query, page };
    dispatch(getimages(values));
  }, [query, page, dispatch]);

  useEffect(() => {
    window.scrollBy({
      top: 500,
      behavior: "smooth",
    });
  }, [imagesData]);

  return (
    <>
      <div>
        <Toaster position="top-center" />
      </div>
      <ImageModal />
      <SearchBar onClick={onSearch} />

      {imagesData.length > 0 && <ImageGallery imagesData={imagesData} />}
      {loader && (
        <Circles
          wrapperStyle={{ justifyContent: "center", margin: "20px" }}
          height="80"
          width="80"
          color="#000000"
          ariaLabel="circles-loading"
          wrapperClass=""
          visible={true}
        />
      )}
      {page < totalPage && <LoadMoreButton />}
    </>
  );
};

export default App;
