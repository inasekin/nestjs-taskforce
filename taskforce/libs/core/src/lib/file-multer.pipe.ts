import { Injectable, PipeTransform } from '@nestjs/common';
import { File } from '@taskforce/shared-types';
import { path } from 'app-root-path';
import { Express } from 'express';
import { writeFile } from 'fs-extra';
import 'multer';

@Injectable()
export class FileMulterPipe
  implements PipeTransform<Express.Multer.File, Promise<File>>
{
  async transform(file: Express.Multer.File): Promise<File> {
    await writeFile(`${file.destination}/${file.originalname}`, file.buffer);
    return {
      url: `${file.destination}/${file.originalname}`,
      name: file.originalname,
    };
  }
}
