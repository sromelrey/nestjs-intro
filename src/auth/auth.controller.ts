import { Controller } from '@nestjs/common';
import { AuthService } from './providers/aut.hservice';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    // Injecting users service
    private readonly authService: AuthService,
  ) {}
}
