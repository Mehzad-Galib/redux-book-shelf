import React, { useEffect } from 'react';
import Book from '../components/Book/Book';
// import books from '../fakeData/books.json';
import PageLayout from '../components/PageLayout/PageLayout';
// import { allBooks } from '../Redux/Action/bookAction';
import { useDispatch, useSelector } from 'react-redux';
import { loadBooks } from '../Redux/Action/bookAction';

const Discover = () => {
    const allBooks = useSelector((state)=> { 
        return state.books.allBooks;
    })
    // console.log(allBooks);
    const dispatch = useDispatch();

    useEffect(()=> dispatch(loadBooks()),[])
   
    return (
        <PageLayout>
            {
                allBooks?.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;