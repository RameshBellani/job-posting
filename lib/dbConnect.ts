// import mongoose from 'mongoose';

// declare global {
//   const mongoose: {
//     conn: mongoose.Mongoose | null;
//     promise: Promise<mongoose.Mongoose> | null;
//   };
// }

// const MONGODB_URI = process.env.MONGODB_URI!; // Non-null assertion

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable');
// }

// const cached: { conn: mongoose.Mongoose | null; promise: Promise<mongoose.Mongoose> | null } = global.mongoose || { conn: null, promise: null };

// async function dbConnect(): Promise<mongoose.Mongoose> {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).catch((err) => {
//       console.error('Database connection error:', err);
//       throw err;
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (err) {
//     cached.promise = null;
//     console.error('Error while connecting to the database:', err);
//     throw err;
//   }

//   return cached.conn;
// }

// export default dbConnect;


// import mongoose from 'mongoose';

// // eslint-disable-next-line no-var
// declare global {
//   var mongooseGlobal: {
//     conn: typeof mongoose | null;
//     promise: Promise<typeof mongoose> | null;
//   };
// }

// const globalWithMongoose = global as typeof globalThis & {
//   mongooseGlobal: {
//     conn: typeof mongoose | null;
//     promise: Promise<typeof mongoose> | null;
//   };
// };

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('MONGODB_URI environment variable is required');
// }

// const cached = globalWithMongoose.mongooseGlobal || { conn: null, promise: null };

// async function dbConnect(): Promise<typeof mongoose> {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts);
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// }

// export default dbConnect;






/* eslint-disable no-var */


import mongoose from 'mongoose';

// Declare global cache for mongoose connection
export interface MongooseGlobal {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
}

// Extend globalThis to include the mongoose property
declare global {
  // eslint-disable-next-line no-var
  // Explicitly extend the global object with mongoose property
  var mongoose: MongooseGlobal | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Ensure the type is string (it could be undefined, so we force it to be a string)
const mongodbUri = MONGODB_URI as string;

const cached = global.mongoose || { conn: null, promise: null };

async function dbConnect(): Promise<mongoose.Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = { bufferCommands: false };

    cached.promise = mongoose.connect(mongodbUri, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  global.mongoose = cached;
  return cached.conn;
}

export default dbConnect;
