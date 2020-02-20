import mongoose from "mongoose";
import Log from "../models/Log.js";

const _repository = mongoose.model("Log", Log);

class LogsService {
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
  async getLogsByShipId(shipId) {
    return await _repository.find({ shipId })
  }
}

const logsService = new LogsService();
export default logsService;
