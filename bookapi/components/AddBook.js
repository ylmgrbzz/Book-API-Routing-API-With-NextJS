import React from "react";
import styles from "../styles/Form.module.css"

const AddBook = () => {
  return (
    <div className={styles.container}   >  
      <form  className={styles.formControl}     >
        <label htmlFor="name"> name</label> <input type="text" name="name" />
        <label htmlFor="description"> description</label>{" "}
        <input type="text" name="description" />
        <label htmlFor="imgUrl"> imgUrl</label> <input type="text" name="imgUrl" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
