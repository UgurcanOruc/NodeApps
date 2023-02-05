const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://ugurcan:15935713579@cluster0.tggomuo.mongodb.net/?retryWrites=true&w=majority";
const client = MongoClient(uri);
const databaseName = 'task-manager';

async function main() {
    try {
      await client.connect();
      console.log("baglandi");
        await createListing(client, {
            name: 'Ugurcan Pruc',
            age: 26
        })
    } catch (e) {
      console.error("Unable to connect to database.");
    } finally {
      client.close();
    }

    async function listDatabases(client) {
      const dbList = await client.db().admin().listDatabases();
      console.log("Databases:");
      dbList.databases.forEach((db) => {
        console.log(db.name);
      });
    }
}

async function createListing(client, newListing) {
    const result = await client
      .db(databaseName)
      .collection("users")
      .insertOne(newListing);
    console.log("New Listing id: " + result.insertedId);
}

main().catch(console.error);
