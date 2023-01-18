import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { fillObject } from '@taskforce/core';
import CreateRequestDto from './dto/create-request.dto';
import RequestRdo from './rdo/request.rdo';
import { RequestService } from './request.service';

@Controller('requests')
export class RequestController {
  constructor(private requestService: RequestService) {}

  @Get('/:taskId')
  async findRequestsByTaskId(@Param('taskId', ParseIntPipe) taskId: string) {
    const requests = await this.requestService.getRequestsByTaskId(taskId);
    return fillObject(RequestRdo, requests);
  }

  @Post('/')
  async create(@Body() dto: CreateRequestDto) {
    const newRequest = await this.requestService.create(dto);
    return fillObject(RequestRdo, newRequest);
  }
}
