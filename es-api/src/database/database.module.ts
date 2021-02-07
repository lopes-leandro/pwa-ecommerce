import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';

const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PWS = process.env.DATABASE_PWS;
const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;

const DATABASE_PROVIDER = {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
    await mongoose.connect(
      `mongodb+srv://${DATABASE_USER}:${DATABASE_PWS}@${DATABASE_URL}.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`,
      {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      }
    ),
}

@Module({
    providers: [DATABASE_PROVIDER],
    exports: [DATABASE_PROVIDER]
})
export class DatabaseModule {}
