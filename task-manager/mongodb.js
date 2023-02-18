const { MongoClient, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://ugurcan:15935713579@cluster0.tggomuo.mongodb.net/?retryWrites=true&w=majority";
const client = MongoClient(uri);
const databaseName = "task-manager";

async function main() {
  try {
    await client.connect();
    console.log("Connected");
    await findManyBySearch(client, {
      age: 26,
    });
  } catch (e) {
    console.error("Unable to connect to database.");
  } finally {
    client.close();
  }
}

async function listDatabases(client) {
  const dbList = await client.db().admin().listDatabases();
  console.log("Databases:");
  dbList.databases.forEach((db) => {
    console.log(db.name);
  });
}



async function findOneBySearch(client, search) {
  client
    .db(databaseName)
    .collection("users")
    .findOne(search, (error, user) => {
      if (error) {
        return console.log("Unable to fetch");
      }
      console.log(user);
    });
}

async function findManyBySearch(client, search) {
  client
    .db(databaseName)
    .collection("users")
    .find(search).toArray((error, users) => {
      if (error) {
        return console.log("Unable to fetch");
      }
      console.log(users);
    });
}

async function insertUser(client, user) {
  client
    .db(databaseName)
    .collection("users")
    .insertOne(user, (error, result) => {
      if (error) {
        return console.log("Unable to insert user.");
      }
      console.log(result.ops);
    });
}

async function insertUsers(client, users) {
  client
    .db(databaseName)
    .collection("users")
    .insertMany(users, (error, result) => {
      if (error) {
        return console.log("Unable to insert users.");
      }
      console.log(result.ops);
    });
}

async function insertTasks(client, tasks) {
  client
    .db(databaseName)
    .collection("tasks")
    .insertMany(tasks, (error, result) => {
      if (error) {
        return console.log("Unable to insert tasks.");
      }
      console.log(result.ops);
    });
}

main().catch(console.error);
