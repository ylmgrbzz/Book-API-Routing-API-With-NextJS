import React, { useState } from "react";
import styles from "../styles/Form.module.css";

const AddBook = () => {
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    imgUrl: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formControl}>
        <label htmlFor="name"> name</label>{" "}
        <input
          onChange={handleChange}
          value={inputs.name}
          type="text"
          name="name"
        />
        <label htmlFor="description"> description</label>{" "}
        <input
          onChange={handleChange}
          value={inputs.description}
          type="text"
          name="description"
        />
        <label htmlFor="imgUrl"> imgUrl</label>{" "}
        <input
          onChange={handleChange}
          value={inputs.imgUrl}
          type="text"
          name="imgUrl"
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
