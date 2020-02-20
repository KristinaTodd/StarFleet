import mongoose from "mongoose";
import Ship from "../models/Ship.js";

const _repository = mongoose.model("Ship", Ship);

class ShipsService {
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
}

const shipsService = new ShipsService();
export default shipsService;
