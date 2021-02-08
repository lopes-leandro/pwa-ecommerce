import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';

const DATABASE_PROVIDER = {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
    await mongoose.connect(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PWS}@${process.env.DATABASE_URL}.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
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
