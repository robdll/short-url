import dbConnect from "../../../lib/dbConnect";
import Url from "../../../models/Url";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with POST and OPTIONS
    methods: ["GET", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
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
