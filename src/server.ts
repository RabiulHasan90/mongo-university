import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';
import config from './app/config';

dotenv.config();
console.log(config.database_url)

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('✅ Database connected');

    const port = 5000;

    app.listen(port, () => {
      console.log(`✅ Server is running at http://localhost:${config.port}`);
    });
  } catch (err) {
    console.error('❌ Database connection failed:', err);
  }
}

main();
