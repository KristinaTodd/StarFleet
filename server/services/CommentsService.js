import mongoose from "mongoose";
import Comment from "../models/Comment.js";

const _repository = mongoose.model("Comment", Comment);

class CommentsService {
  async getAll() {
    return await _repository.find({});
  }

  async getById(id) {
    return await _repository.findById(id);
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async update(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id);
  }
  async getCommentsByLogId(logId) {
    return await _repository.find({ logId })
  }
}

const commentsService = new CommentsService();
export default commentsService;
