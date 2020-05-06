import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';

@Injectable()
export class ApiService {

  constructor(
    private appConfig: AppConfig
  ) { 
    console.log(appConfig.apiEndpoint);
    
  }
}
