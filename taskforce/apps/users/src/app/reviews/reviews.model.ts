import { Review } from '@taskforce/shared-types';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'reviews',
})
export class ReviewsModel extends Document implements Review {
  @Prop({
    required: true,
  })
  public text: string;

  @Prop({
    required: true,
  })
  public contractorId: string;

  @Prop({
    required: true,
  })
  public customerId: string;

  @Prop({
    required: true,
  })
  public taskId: string;

  @Prop({
    required: true,
  })
  public rating: number;
}

export const ReviewsSchema = SchemaFactory.createForClass(ReviewsModel);
