import fs from "fs";
import path from "path";

function getData() {
  const filePath = path.join(process.cwd(), "data", "books.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  res.status(200).json({ message: data });
}

function postData() {
  const { imgUrl, name, description } = req.body;
  const data = getData();
  const newBook = {
    id: Math.random().toString(),
    imgUrl,
    name,
    description,
  };
  data.push(newBook);
  return res
    .status(201)
    .json({ message: "Book added successfully!", book: newBook });
}

export default function handler(req, res) {
  if (req.method === "GET") {
    getData();
  } else if (req.method === "POST") {
    postData();
  }
}
