import React, { useEffect, useState } from "react";

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
          data.map((book) => (
            <li key={book.id}>
              {book.title} - {book.description}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BooksList;
