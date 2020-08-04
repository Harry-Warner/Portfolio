import mongoose from "mongoose";

const connection = {};

const database = async () => {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(
    "mongodb+srv://Harrywarner7:purple.cans@harry.u3osw.mongodb.net/Playlist?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  connection.isConnected = db.connections[0].readyState;
};

export default database;
