import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export function App() {
  const [search, setSearch] = useState('');
  const addSearch = data => {
    setSearch(data);
  };

  return (
    <Container>
      <Searchbar addSearch={addSearch} />
      <ImageGallery search={search} />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
