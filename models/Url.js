import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "Please provide a valid url"],
  },
  shortUrl: {
    type: String,
  },
});

UrlSchema.path("url").validate((val) => {
  const urlRegex =
    /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlRegex.test(val);
}, "Invalid URL.");

export default mongoose.models.Url || mongoose.model("Url", UrlSchema);
