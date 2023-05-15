import axios from 'axios';

import { GET_ERRORS, GET_BOOKCAT, GET_BOOKS, DELETE_BOOK, 
    DELETE_BOOKCAT, FETCH_BOOKCAT, GET_ISSUE_BOOKS} from './types';


    export const newbooks = (books,history) => dispatch => {    
        axios.post('/api/library/addbooks', books)
            .then(res => history.push('/'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
    }
    
    // Insert Book category
    export const bookcategory = (bookcats,history) => dispatch => {
    axios.post('/api/library/bookcat', bookcats)
            .then(res => {
                history.push('/category_manage');
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
    }
    
    // Fetch Book Category
    export const getBookCat = () => dispatch => {
        axios.get('/api/library/getbookcat')
            .then(res => {
                const schemas = [];
                let getcat = res.data;
                for(let i in getcat){
                  schemas.push(getcat[i].book_cat);
                }
                dispatch(getBooksPosts(schemas));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
    }
    
    export const getBooksPosts = payload => {
        return {
          type: GET_BOOKCAT,
          payload
        }
      };
    
    //   Fetch Books
    export const getBooks = () => dispatch => {
        axios.get('/api/library/getbook')
            .then(res => {
                dispatch(fetchBooks(res.data));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });    
    }
    
    export const fetchBooks = payload => {
        return {
          type: GET_BOOKS,
          payload
        }
      };
    
    //   Delete Book
    export const deleteBook = (_id) => dispatch => {
        axios.delete(`/api/library/deleteBook/${_id}`) 
            .then(res => {
                dispatch(deleteBooksPost(res.data));
    
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            })
    }
    
    export const deleteBooksPost = _id =>{
        return {
            type: DELETE_BOOK,
            payload: {
                _id
            }
          }
    }
    
    // Delete Book Category
    export const deleteBookCat = (_id,history) => dispatch => {
        axios.delete(`/api/library/deleteBookCat/${_id}`) 
            .then(res => {
                dispatch(deleteBookCatPost(res.data));
                history.push('/');
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            })
    }
    
    export const deleteBookCatPost = _id =>{
        return {
            type: DELETE_BOOKCAT,
            payload: {
                _id
            }
          }
    }
    
    // Fetch Book Category for View Book Category
    export const fetchBookCat = () => dispatch => {
        axios.get('/api/library/getbookcat')
            .then(res => {
                dispatch(getBookCatPosts(res.data));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
    }
    
    export const getBookCatPosts = payload => {
        return {
          type: FETCH_BOOKCAT,
          payload
        }
      };
    
    // Issue Book- Student
    export const issuedBook = (books,history) => dispatch => {    
        axios.post('/api/library/issueBook', books)
            .then(res => history.push('/student_book_manage'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
    }
    
    //   Fetch Issued Books
    export const getIssuedBooks = () => dispatch => {
        axios.get('/api/library/getissueBooks')
            .then(res => {
                dispatch(fetchIssuedBooks(res.data));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });    
    }
    
    export const fetchIssuedBooks = payload => {
        return {
          type: GET_ISSUE_BOOKS,
          payload
        }
      };


      const setAuthToken = token => {
        if(token) {
            axios.defaults.headers.common['Authorization'] = token;
        }
        else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }
    
    export default setAuthToken;

      export const logoutUser = (history) => dispatch => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('roles');
        setAuthToken(false);;
        //history.push('/login');
    }
    