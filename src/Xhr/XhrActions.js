import Axios from 'axios';


const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';

const fetchBooksSuccess = (books) => {
    return {
      type: 'FETCH_BOOKS_SUCCESS',
      books
    }
  };



const fetchBooks = () => {
    return (dispatch) => {
      return Axios.get(apiUrl)
        .then(response => {
          dispatch(fetchBooksSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  export default {fetchBooksSuccess, fetchBooks};

