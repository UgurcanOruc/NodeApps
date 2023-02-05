const { MongoClient, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://ugurcan:15935713579@cluster0.tggomuo.mongodb.net/?retryWrites=true&w=majority";
const client = MongoClient(uri);
const databaseName = "task-manager";

async function main() {
  try {
    await client.connect();
    console.log("Connected");

    await insertUser(client, {
      _id: new ObjectId(),
      name: "Vicdansiz Fikret",
      age: 26,
    });

    // await insertUsers(client, [
    //   {
    //     name: 'Jen',
    //     age: 28
    //   },
    //   {
    //     name: 'Gunther',
    //     age: 29
    //   }
    // ]);

    // await insertTasks(client, [
    //   {
    //     description: 'Clean the house.',
    //     completed: true
    //   },
    //   {
    //     desvription: 'Renew inspection',
    //     completed: false
    //   },
    //   {
    //     description: 'Pot plants',
    //     completed: false
    //   }
    // ]);
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
