import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";

const BooksList = () => {
  const [data, setData] = useState([]);
  const sendRequest = () => {
    fetch("/api/books")
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  useEffect(() => {
    return () => {
      sendRequest();
    };
  }, []);

  return (
    <div>
      <ul>
        {data &&
          data.map((item, index) => (
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
