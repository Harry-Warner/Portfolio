import database from "../../../lib/database";
import Post from "../../../models/post";
import { NextApiResponse, NextApiRequest } from "next";

database();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const post = await Post.findById(id);
        if (!post) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const updatedPost = await Post.findByIdAndUpdate(id, req.body);
        if (!updatedPost) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: updatedPost });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedPost = await Post.deleteOne({ _id: id });
        if (!deletedPost) {
          return res.status(400).json({ success: false });
        }
        res.status(201).json({ success: true, data: deletedPost });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
