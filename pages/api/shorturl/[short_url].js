import dbConnect from "../../../lib/dbConnect";
import Url from "../../../models/Url";

export default async function handler(req, res) {
  await dbConnect();
  try {
    const url = await Url.findOne({
      short_url: req.query.short_url,
    }).select("original_url");

    res.redirect(url.original_url);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
