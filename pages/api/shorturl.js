import dbConnect from "../../lib/dbConnect";
import Url from "../../models/Url";
import Counter from "../../models/counters";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with POST and OPTIONS
    methods: ["POST", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);

  await dbConnect();
  try {
    const short_url = await Counter.findOne({})
      .sort({ seq_value: -1 })
      .limit(1);

    const url = await Url.create(req.body);

    res.status(201).json({
      original_url: url.original_url || url.url,
      short_url: short_url.seq_value + 1,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
