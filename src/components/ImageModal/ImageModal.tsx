/* eslint-disable react/prop-types */
import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageModalType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { selectModalData, selectModalToggle } from "../../redux/selectors";
import { setModalToggle } from "../../redux/appStateSlice";
import { setModalData } from "../../redux/imagesSlice";

const ImageModal: React.FC<ImageModalType> = () => {
  const modalIsOpen = useSelector(selectModalToggle);
  const modalData = useSelector(selectModalData);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setModalToggle());
    dispatch(setModalData(null));
  };

  return (
    <ReactModal
      overlayClassName={css.backdrop}
      className={css.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      {modalIsOpen && (
        <>
          <img
            className={css.image}
            src={modalData.urls.regular}
            alt={modalData.alt_description}
          />
          <div className={css.descriptionBlock}>
            <p className={css.description}>
              <b>Description:</b> {modalData.description}
            </p>
            <p className={css.description}>
              <b>Author:</b> {modalData.user.username}
            </p>
          </div>
        </>
      )}
    </ReactModal>
  );
};

// const HandleClose = (e) => {
//   console.log(e);
//   if (e.target.className.includes("backdrop")) {
//     onClose(e.target);
//   }
// };
// return (
//   <div className={css.backdrop} onClick={HandleClose} onKeyDown={HandleClose}>
//     <div className={css.modal}>
//       <img
//         className={css.image}
//         src={modalData.urls.regular}
//         alt={modalData.alt_description}
//       />
//       <div className={css.descriptionBlock}>
//         <p className={css.description}>
//           <b>Description:</b> {modalData.description}
//         </p>
//         <p className={css.description}>
//           <b>Author:</b> {modalData.user.username}
//         </p>
//       </div>
//     </div>
//   </div>
// );
// };

export default ImageModal;
