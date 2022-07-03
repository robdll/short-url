import dbConnect from "../../lib/dbConnect";
import Url from "../../models/Url";
import Counter from "../../models/counters";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["POST"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
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
