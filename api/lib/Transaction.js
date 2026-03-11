import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a description'],
      trim: true,
      maxlength: [100, 'Description cannot be more than 100 characters']
    },
    amount: {
      type: Number,
      required: [true, 'Please add a positive or negative number']
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
