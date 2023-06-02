import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarHeader,
} from './Searchbar.styled';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleInput = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      toast.warn('PLEASE, ENTER DATA');
      return;
    }
    this.props.addSearch(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <ImSearch />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
            onChange={this.handleInput}
            value={this.state.search}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
