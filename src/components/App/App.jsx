import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
// import { getRequest } from 'components/getRequest';
import { Component } from 'react';
import { Container } from './App.styled';
// import { Button } from 'components/Button/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class App extends Component {
  state = {
    search: null,
  };
  addSearch = data => {
    this.setState({ search: data });
  };

  render() {
    const { search } = this.state;
    return (
      <Container>
        <Searchbar addSearch={this.addSearch} />
        <ImageGallery search={search} />
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}
