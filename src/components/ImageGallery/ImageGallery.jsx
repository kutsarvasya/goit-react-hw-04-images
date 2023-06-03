// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// import { List } from './ImageGallery.styled';
// import { useEffect, useState } from 'react';
// import { getRequest } from 'components/getRequest';
// import { Button } from 'components/Button/Button';
// import { Modal } from 'components/Modal/Modal';
// import { Loader } from 'components/Loader/Loader';
// import { toast } from 'react-toastify';

// export function ImageGallery({ search }) {
//   const [page, setPage] = useState(() => 1);
//   const [totalHits, setTotalHits] = useState(() => null);
//   const [images, setImages] = useState(() => []);
//   const [modalData, setModalData] = useState(() => '');
//   const [showLoader, setShowLoader] = useState(() => false);

//   // useEffect(() => {
//   //   if (!search) return;
//   //   getImagesFirst();
//   // }, [search]);

//   // useEffect(() => {
//   //   if (page === 1) return;
//   //   getImages();
//   // }, [page]);

//   const getImages = async () => {
//     setShowLoader(true);
//     try {
//       const data = await getRequest(search, page);
//       setImages(prev => [...prev, ...data.hits]);
//       setTotalHits(data.totalHits);
//     } catch {
//       toast.error('ERROR');
//     } finally {
//       setShowLoader(false);
//     }
//   };

//   const getImagesFirst = async () => {
//     setImages([]);
//     setShowLoader(true);
//     setPage(1);
//     try {
//       const data = await getRequest(search, 1);
//       setImages([...data.hits]);
//       setTotalHits(data.totalHits);
//     } catch {
//       toast.error('ERROR');
//     } finally {
//       setShowLoader(false);
//     }
//   };
//   const handleModal = (data = '') => {
//     setModalData(data);
//   };

//   const changePage = () => {
//     setPage(prev => prev + 1);
//   };

//   return (
//     <>
//       {search && (
//         <List>
//           {images.map(image => {
//             return (
//               <ImageGalleryItem
//                 key={image.id}
//                 imageUrl={image.webformatURL}
//                 largeUrl={image.largeImageURL}
//                 openModal={handleModal}
//               />
//             );
//           })}
//         </List>
//       )}
//       {showLoader && <Loader />}
//       {totalHits > images.length && (
//         <Button text={'Load more'} handleClick={changePage} />
//       )}
//       {modalData && <Modal url={modalData} closeModal={handleModal} />}
//     </>
//   );
// }
