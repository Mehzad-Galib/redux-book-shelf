import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const reading = useSelector((state)=>{
    return state.books.reading;
  })
  const finish = useSelector((state)=>{
    return state.books.finishList;
  })

  const everyBook = useSelector((state)=>{
    return state.books.allBooks;
  })

  return (
    <div className='col-md-3'>
      <ul className='list-group sticky-top  py-2'>
        <NavLink as='li' className='list-group-item' to='/' exact>
          Discover <span className='badge badge-sm bg-primary'>{everyBook.length}</span>
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/reading'>
          Reading List <span className='badge badge-sm bg-primary'>{reading.length}</span>
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/finish'>
          Finished Books <span className='badge badge-sm bg-primary'>{finish.length}</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
