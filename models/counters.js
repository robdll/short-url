import mongoose from "mongoose";

const CounterSchema = new mongoose.Schema({
  seq_value: {
    type: Number,
  },
});

export default mongoose.models.Counter ||
  mongoose.model("Counter", CounterSchema);
