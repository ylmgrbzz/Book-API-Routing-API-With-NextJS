import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "data", "books.json");
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    console.log(books);
    res.status(200).json({ message: data });
  } else if (req.method === "POST") {
    const { title, author } = req.body;
    const newBook = {
      id: new Date().toISOString(),
      title,
      author,
    };
    const filePath = path.join(process.cwd(), "data", "books.json");
    const jsonData = fs.readFileSync(filePath);
    const books = JSON.parse(jsonData);
    books.push(newBook);
    fs.writeFileSync(filePath, JSON.stringify(books));
    res.status(201).json(newBook);
  } else {
    res.status(405).json({ message: "We only support GET and POST" });
  }
}
