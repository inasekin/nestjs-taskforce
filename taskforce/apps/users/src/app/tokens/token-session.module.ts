import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenSessionModel, TokenSessionSchema } from './token-session.model';
import TokenSessionRepository from './token-session.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TokenSessionModel.name,
        schema: TokenSessionSchema,
      },
    ]),
  ],
  providers: [TokenSessionRepository],
  exports: [TokenSessionRepository],
})
export class TokenSessionModule {}
