import { Controller } from '@nestjs/common';
import { FilesService } from './services/files.service';

@Controller('files')
export class FilesController {
    constructor(filesService: FilesService) {}
}