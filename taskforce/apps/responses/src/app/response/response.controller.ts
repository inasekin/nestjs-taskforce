import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { fillObject } from '@taskforce/core';
import CreateResponseDto from './dto/create-response.dto';
import ResponseRdo from './rdo/response.rdo';
import { ResponseService } from './response.service';

@Controller('responses')
export class ResponseController {
  constructor(private responseService: ResponseService) {}

  @Post('/')
  async create(@Body() dto: CreateResponseDto) {
    const newResponse = await this.responseService.create(dto);
    return fillObject(ResponseRdo, newResponse);
  }

  @Get('/:contractorId')
  async indexExecutorEvaluations(@Param('contractorId') contractorId: string) {
    const responses = await this.responseService.getByContractorId(
      contractorId
    );
    return fillObject(ResponseRdo, responses);
  }

  @Get('/')
  async index() {
    const responses = await this.responseService.get();
    return fillObject(ResponseRdo, responses);
  }
}
