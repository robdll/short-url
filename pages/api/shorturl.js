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
    const url = req.body.url || req.body.original_url;

    const urlRegex =
      /(https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    if (!urlRegex.test(url)) {
      return res.status(200).json({ error: `invalid url` });
    }

    const short_url = await Counter.findOne({})
      .sort({ seq_value: -1 })
      .limit(1);

    const createdUrl = await Url.create({
      original_url: url,
    });

    res.status(201).json({
      original_url: createdUrl.original_url,
      short_url: short_url.seq_value + 1,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
