import { MongoClient } from 'mongodb'
import dotenv from 'dotenv';
dotenv.config()

async function testConnection() {
  const uri = process.env.DATABASE_URL;
  console.log(uri)
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas");
  } catch (err) {
    console.error("Connection error:", err);
  } finally {
    await client.close();
  }
}

testConnection()