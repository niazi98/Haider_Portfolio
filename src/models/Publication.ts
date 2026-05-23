import mongoose, { Schema, Document } from 'mongoose';

export interface IPublication extends Document {
  title: string;
  abstract: string;
  status: string;
  progress: number;
  parameters: string[];
  createdAt: Date;
}

const PublicationSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  abstract: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['draft', 'in-progress', 'submitted', 'published']
  },
  progress: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  parameters: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Publication || mongoose.model<IPublication>('Publication', PublicationSchema);
