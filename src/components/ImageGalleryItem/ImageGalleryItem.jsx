import { Item, ItemImage } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ imageUrl, largeUrl, openModal }) {
  return (
    <Item
      onClick={() => {
        openModal(largeUrl);
      }}
    >
      <ItemImage src={imageUrl} alt="" />
    </Item>
  );
}
