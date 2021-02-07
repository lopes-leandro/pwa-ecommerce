import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';

const DATABASE_PROVIDER = {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
    await mongoose.connect(
      'mongodb+srv://dbAssignment:1234@cluster0.xticb.mongodb.net/product',
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
