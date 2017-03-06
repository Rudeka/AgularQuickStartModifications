import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    log(logMessage: string){
        console.log(logMessage);
    }
}