// 340, 341

import { MongoClient } from "mongodb";

console.log("acaa");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;

    console.log("data", data);
    const client = await MongoClient.connect(
      "mongodb+srv://user:x96YNidVG8yTKrW@cluster0.ihrvp.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
};

export default handler;
