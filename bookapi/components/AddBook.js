import React from "react";

const AddBook = () => {
  return (
    <div>
      <form>
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
