import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  Headers,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReviewService } from './review.service';
import CreateReviewDto from './dto/create-review.dto';
import ReviewRdo from './rdo/review.rdo';

@ApiTags('Отзывы')
@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewsService: ReviewService) {}

  @ApiResponse({
    type: CreateReviewDto,
    status: HttpStatus.CREATED,
  })
  @Post()
  create(
    @Body() createReviewsDto: CreateReviewDto,
    @Headers('User-id') authorId: string
  ) {
    return this.reviewsService.create(authorId, createReviewsDto);
  }

  @ApiResponse({
    type: ReviewRdo,
    status: HttpStatus.OK,
  })
  @Get('tasks/:id')
  getTaskReviews(@Param('id') taskId: string) {
    return this.reviewsService.getTaskReviews(taskId);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Review deleted.',
  })
  @Delete(':id')
  deleteReview(@Param('id') id: string) {
    return this.reviewsService.deleteReview(id);
  }
}
