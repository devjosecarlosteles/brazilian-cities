import 'reflect-metadata';
import { Module } from '@nestjs/common';
import modules from './modules/index';

@Module({
  imports: [...modules],
})
export class AppModule {}
