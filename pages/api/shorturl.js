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
  // Preflight Check:
  if (req.method == "OPTIONS") {
    res.setHeader("Allow", "POST");
    return res.status(202).json({});
  }

  // Allow only POST Methods
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  await cors(req, res);

  await dbConnect();
  try {
    const short_url = await Counter.findOne({})
      .sort({ seq_value: -1 })
      .limit(1);

    const url = await Url.create(req.body);

    res.status(201).json({
      original_url: url.original_url,
      short_url: short_url.seq_value + 1,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
