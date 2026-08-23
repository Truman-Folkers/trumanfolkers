import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: ["https://trumanfolkers.vercel.app", "https://status-tracker-app.vercel.app/"] })); //{ origin: "https://trumanfolkers.vercel.app" })
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);

//get from 'statuses' table
app.get("/api/statuses", async (req, res) => {
  const { data, error } = await supabase.from("Statuses").select("*");
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

//post to 'statuses' table
app.post("/api/statuses", async (req, res) => {
  const { name, status } = req.body;
  const { data, error } = await supabase
    .from("Statuses")
    .insert([{ name, status }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

//put to 'statuses' table
app.put("/api/statuses", async (req, res) => {
  const { id, status } = req.body;
  const { data, error } = await supabase
    .from("Statuses")
    .update([{ status }])
    .eq("id", id)
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

export default app;
