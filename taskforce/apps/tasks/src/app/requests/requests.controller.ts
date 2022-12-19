import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { fillObject } from '@taskforce/core';
import CreateRequestDto from './dto/create-request.dto';
import RequestRdo from './rdo/request.rdo';
import { RequestsService } from './requests.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('requests')
@Controller('requests')
export class RequestsController {
  constructor(private requestService: RequestsService) {}

  @Get('/find/:id')
  async show(@Param('id') id: string) {
    const requestId = parseInt(id, 10);
    const request = await this.requestService.getRequestById(String(requestId));
    return fillObject(RequestRdo, request);
  }

  @Get('/')
  async index() {
    const categories = await this.requestService.index();
    return fillObject(RequestRdo, categories);
  }

  @Post('/create/')
  async create(@Body() dto: CreateRequestDto) {
    const newRequest = await this.requestService.create(dto);
    return fillObject(RequestRdo, newRequest);
  }
}
