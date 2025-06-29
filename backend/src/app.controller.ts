import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getSecret(@Request() req) {
    return { message: 'Tylko dla zalogowanych!', user: req.user };
  }
}
