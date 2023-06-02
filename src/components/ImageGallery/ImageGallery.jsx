import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import { Component } from 'react';
import { getRequest } from 'components/getRequest';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

export class ImageGallery extends Component {
  state = {
    page: 1,
    searchCopy: null,
    totalHits: null,
    images: [],
    modalData: '',
    showLoader: false,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.search !== state.searchCopy) {
      return {
        page: 1,
        images: [],
        searchCopy: props.search,
        showLoader: true,
      };
    }
    return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.search !== this.props.search ||
      this.state.page !== prevState.page
    ) {
      try {
        await this.getImages();
      } catch {
        toast.error('ERROR');
      } finally {
        if (this.state.showLoader) {
          this.setState({ showLoader: false });
        }
      }
    }
  }

  handleModal = (data = '') => {
    this.setState({ modalData: data });
  };
  getImages = async () => {
    try {
      const data = await getRequest(this.props.search, this.state.page);
      this.setState(prev => ({
        images: prev.images ? [...prev.images, ...data.hits] : data.hits,
        totalHits: data.totalHits,
        // showLoader: false,
      }));
    } catch (error) {
      toast.error('ERROR');
    }
  };
  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  render() {
    const { totalHits, images, modalData, showLoader } = this.state;
    return (
      <>
        {this.props.search &&
          (showLoader ? (
            <Loader />
          ) : (
            <List>
              {this.state.images.map(image => {
                return (
                  <ImageGalleryItem
                    key={image.id}
                    imageUrl={image.webformatURL}
                    largeUrl={image.largeImageURL}
                    openModal={this.handleModal}
                  />
                );
              })}
            </List>
          ))}

        {totalHits > images.length && (
          <Button text={'Load more'} handleClick={this.changePage} />
        )}
        {modalData && <Modal url={modalData} closeModal={this.handleModal} />}
      </>
    );
  }
}
