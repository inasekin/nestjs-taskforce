import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ResponseModule } from './response/response.module';

@Module({
  imports: [PrismaModule, ResponseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
