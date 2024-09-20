import { FormEvent } from "react";

export type ImageData =
  | {
      id: number;
      alt_description: string;
      urls: { small: string; regular: string; [key: string]: any };
      description: string;
      user: { username: string; [key: string]: any };
      [key: string]: any;
    }
  | { id: number; [key: string]: any };

export type ImagesData = ImageData[];

export type ResponcePhotosSearch = {
  data: { results: ImageData[]; total_pages: number; [key: string]: any };
  [key: string]: any;
};

export type LoadMoreButtonType = {
  query: string;
  page: number;
};

export type ImagesGalleryType = {
  imagesData: ImagesData;
};

export type ImageCardType = {
  imageData: ImageData;
};

export type SearchBarType = {
  onClick: (prompt: string) => void;
  handleSubmit: (e: FormEvent) => void;
};

export type ImageModalType = {
  modalData: { id: 1; [key: string]: any };
  modalIsOpen: boolean;
};
