import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";
import styles from "../styles/Books.module.css"
const BooksList = () => {
  const [data, setData] = useState([]);

  const sendRequest = async () => {
    try {
      const response = await fetch("/api/books");
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div   >
      <ul className={styles.listContainer} >
        {data.message &&
          data.message.map((item, index) => (
            <BookItem
              description={item.description}
              name={item.name}
              id={item.id}
              imgUrl={item.imgUrl}
              key={index}
            />
          ))}
      </ul>
    </div>
  );
};

export default BooksList;
