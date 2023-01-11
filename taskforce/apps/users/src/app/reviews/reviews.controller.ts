import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { fillObject } from '@taskforce/core';
import CreateReviewDto from './dto/create-review.dto';
import ReviewRdo from './rdo/review.rdo';
import { ReviewsService } from './reviews.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Get('/:id')
  @ApiResponse({
    type: ReviewRdo,
    status: HttpStatus.OK,
    description: 'Review is found',
  })
  async show(@Param('id') id: string) {
    const reviewId = parseInt(id, 10);
    const review = await this.reviewsService.getCommentById(String(reviewId));
    return fillObject(ReviewRdo, review);
  }

  @Get('/')
  async index() {
    const review = await this.reviewsService.index();
    return fillObject(Response, review);
  }

  @Post('/')
  @ApiResponse({
    type: ReviewRdo,
    status: HttpStatus.OK,
    description: 'The new review has been successfully created',
  })
  async create(@Body() dto: CreateReviewDto) {
    const newReview = await this.reviewsService.create(dto);
    return fillObject(ReviewRdo, newReview);
  }
}
