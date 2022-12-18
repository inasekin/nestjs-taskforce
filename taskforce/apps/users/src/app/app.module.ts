import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  controllers: [],
  providers: [],
  imports: [AuthModule, UserModule, ReviewsModule],
})
export class AppModule {}
