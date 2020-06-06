import {
  getEntityById,
  createEntity,
  deleteEntityById,
} from "../../../lib/databaseUtils";

export default (req, res) => {
  const getData = getEntityById("posts", req.query.id);
  if (req.method === "POST") {
    let postData = createEntity("posts", req.body);
    if (!req.body.artist || !req.body.song) {
      res.status(400);
      res.send("Please fill all fields");
      deleteEntityById("posts", req.query.id);
      // Returning here means that nothing else can happen
      // once we've sent the error message
      return;
    }
    res.json(postData);
  } else if (req.method === "DELETE") {
    deleteEntityById("posts", req.query.id);
  } else if (!getData) {
    res.status(404);
    res.send("Could not find post");
  } else {
    res.json(getData);
  }
};
