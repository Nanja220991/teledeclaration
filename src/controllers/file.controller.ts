import { Controller, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileService } from '../constants/services/file.service';
import { editFileName } from '../file/file-upload.utils';

@Controller('file')
export class FileController {
    constructor(private fileService: FileService) { }

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename: editFileName,
            })
        }),
    )
    async uploadedFile(@UploadedFile() file) {
        const response = {
            originalname: file.originalname,
            filename: file.originalname, 
            path: file
        };
        return response;
    }

    @Post('base64')
    async base64ToFile(@Body() data: any) {
        this.fileService.base64ToFile(data)
    }

}
