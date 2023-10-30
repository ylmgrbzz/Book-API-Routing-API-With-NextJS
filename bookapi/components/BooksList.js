import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";

const BooksList = () => {
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    const response = await fetch("http://localhost:3000/api/books")
      .then((response) => response.json())
      .then((data) => setName(data.name))
      .catch((error) => {
        console.error("Error:", error);
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
          data.map((item,index) => (
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
