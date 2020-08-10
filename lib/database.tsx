import mongoose from "mongoose";

const connection: any = {};

const database = async () => {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(
    `mongodb+srv://Harrywarner7:${process.env.MONGO_PWD}@harry.u3osw.mongodb.net/Playlist?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );

  connection.isConnected = db.connections[0].readyState;
};

export default database;
