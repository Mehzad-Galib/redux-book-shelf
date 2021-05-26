import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout/PageLayout';
// import Book from '../components/Book/Book';
import ReadBooks from '../components/ReadBooks/ReadBooks';

const ReadingList = () => {
    const readBooks = useSelector((state)=>{
        return state.books.reading;
    })
    return (
        <PageLayout>
            {
                readBooks.length ? readBooks.map(book=> <ReadBooks key={book.id} book={book}></ReadBooks>) : 

                (<p>Looks like you've finished all your books! Check them out in your <Link to="finish">finished books</Link> or <Link to="/">discover more</Link>.</p>)
            }
             
        </PageLayout>
    );
};

export default ReadingList;