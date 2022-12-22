import { Schema, model, models } from "mongoose";
import { IGlobal } from "../interfaces/IGlobal";

const GlobalSchema: Schema = new Schema<IGlobal>({
  currentSeason: { type: Number, required: true, default: 13 },
});

const Global = models.Global || model<IGlobal>("Global", GlobalSchema);

module.exports = Global;
