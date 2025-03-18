// import { Schema, model, models } from 'mongoose';

// interface Job {
//   title: string;
//   description: string;
//   roles: string;
//   applyLink: string;
//   createdAt: Date;
// }

// const jobSchema = new Schema<Job>({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   roles: { type: String, required: true },
//   applyLink: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now }
// });

// export default models.Job || model<Job>('Job', jobSchema);

import { Schema, model, models, Document } from 'mongoose';

interface Job extends Document {
  title: string;
  description: string;
  roles: string;
  applyLink: string;
  createdAt: Date;
}

const jobSchema = new Schema<Job>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  roles: { type: String, required: true },
  applyLink: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default models.Job || model<Job>('Job', jobSchema);