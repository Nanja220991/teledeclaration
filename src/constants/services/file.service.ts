import { Injectable } from '@nestjs/common';
import { writeFile } from 'fs';

@Injectable()
export class FileService {
  constructor() { }

  base64ToFile(data: any) {
    let base64Image = data.base64.split(';base64,').pop();
    console.log(base64Image)
    writeFile('./src/uploads/members/'+data.filename+'.png', base64Image, { encoding: 'base64' }, function (err) {
      console.log(data.filename + ' : File created');
    });
  } 
}