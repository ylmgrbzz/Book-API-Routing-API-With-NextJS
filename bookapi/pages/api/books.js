// import fs from "fs";
// import path from "path";
import mongodb from "mongodb";
// function getData() {
//   const filePath = path.join(process.cwd(), "data", "books.json");
//   const fileData = fs.readFileSync(filePath);
//   const data = JSON.parse(fileData);
//   return data;
// }

export default async function handler(req, res) {
  const client = await mongodb.MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();

  if (req.method === "GET") {
    let booksCollection;
    try {
      const booksCollection = db.collection("books").find().sort().toArray();
    } catch (error) {
      console.error("Error:", error);
    }
    if (!booksCollection) {
      return res.status(404).json({ message: "No books found" });
    }

    return res
      .status(200)
      .json({ message: "Books fetched", books: booksCollection });
    // getData();
  } else if (req.method === "POST") {
    const { imgUrl, name, description } = req.body;
    const newBook = {
      id: Math.random().toString(),
      imgUrl,
      name,
      description,
    };
    const generateBooks = await db.collection("books").insertOne(newBook);

    // const filePath = path.join(process.cwd(), "data", "books.json");
    // const data = getData();
    // data.push(newBook);
    // fs.writeFileSync(filePath, JSON.stringify(data));
    return res
      .status(201)
      .json({ message: "Book added successfully!", book: newBook });
  }
}
