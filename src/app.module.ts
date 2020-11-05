import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvengersModule } from './avengers/avengers.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:secret@localhost:27017/', {
      useUnifiedTopology: true,
      dbName: 'heroes',
    }),
    GraphQLModule.forRoot({
      typePaths: ['*/**/*.graphql'],
      definitions: {
        // Generating corresponding .ts classes for SDL
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
    AvengersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
