import React from 'react';
import { 
    
    HiMinusCircle,
    HiCheckCircle 
  } from 'react-icons/hi';
  import { useDispatch } from "react-redux";
  import { finishBooks, removeBook } from "../../Redux/Action/bookAction";
  import styles from './book.module.css'

const ReadBooks = (props) => {
    const { title, author, coverImageUrl, synopsis } = props.book;
  const dispatch = useDispatch();
    return (
        <div className='card d-flex mb-3 p-3' 
      style={{position: 'relative'}}
    >
      <div className='row'>
        <div className='col-md-3'>
          <img className="img-fluid" src={coverImageUrl} alt='' />
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6>{author}</h6>
            <p className='card-text'>{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons} >
        
      <HiMinusCircle onClick={()=> dispatch(removeBook(props.book))} title="Remove from list" className={styles.minus_icon} />
      
        <HiCheckCircle onClick={()=> {
           return [dispatch(finishBooks(props.book)), dispatch(removeBook(props.book))]
          }} title="Mark as Finish" className={styles.check_icon} />
      </div>
    </div> 
    );
};

export default ReadBooks;