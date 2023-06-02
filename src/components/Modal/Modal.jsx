import { Component } from 'react';
import { ModalEl, Overlay } from './Modal.styled';

export class Modal extends Component {
  handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    this.props.closeModal();
  };
  handleCloseByEsc = e => {
    if (e.code !== 'Escape') return;
    this.props.closeModal();
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleCloseByEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleCloseByEsc);
  }

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalEl>
          <img src={this.props.url} alt="" />
        </ModalEl>
      </Overlay>
    );
  }
}
