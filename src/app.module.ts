import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { FlightModule } from './modules/flight/flight.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { AirplaneModule } from './modules/plane/airplane.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://derrickshema:Kwiga4991@cluster0.pbfu2bn.mongodb.net/imagine-air'),
    AuthModule, 
    AirplaneModule,
    FlightModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
