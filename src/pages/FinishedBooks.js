import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FinishBooks from "../components/FinishBooks/FinishBooks";
import PageLayout from "../components/PageLayout/PageLayout";

const FinishedBooks = () => {
  const finish = useSelector((state) =>{
    return state.books.finishList;
  })

  return (
    <PageLayout>
      {
        finish.length ? 
          finish.map(book=> <FinishBooks key={book.id} book={book}></FinishBooks>)
        :
        (<p>
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to the <Link to='/'>Discover</Link>{" "}
          page to add books to your list.
        </p>)
      }
    </PageLayout>
  );
};

export default FinishedBooks;
