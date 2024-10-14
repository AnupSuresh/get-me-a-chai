import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Define the payment schema
const PaymentSchema = new Schema({
  name: { type: String, required: true },
  to_user: { type: String, required: true },
  oid: { type: String, required: true },
  message: { type: String, required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  done: { type: Boolean, default: false },
});

// Export the model, checking if it already exists to avoid overwrite issues
export default mongoose.models.Payment || model("Payment", PaymentSchema);
