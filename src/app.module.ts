import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { FlightModule } from './modules/flight/flight.module';

@Module({
  imports: [AuthModule, FlightModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
