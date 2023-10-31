import fs from "fs";
import path from "path";


export default function handler(req, res) {
  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "data", "books.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    res.status(200).json({ message: data });
  } else if (req.method === "POST") {
    const { imgUrl, name, description } = req.body;
    const newBook = {
      id: Math.random().toString(),
      imgUrl,
      name,
      description,
    };
    const filePath = path.join(process.cwd(), "data", "books.json");
    const data = getData();
    data.push(newBook);
    fs.writeFileSync(filePath, JSON.stringify(data));
    return res
      .status(201)
      .json({ message: "Book added successfully!", book: newBook });
  }
}
