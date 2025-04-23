import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dto/get-users-param.dto';
import { AuthService } from 'src/auth/providers/aut.hservice';

@Injectable()
export class UsersService {
  constructor(
    /*
     * Injecting Users Service
     */
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    return [
      { firstName: 'John', email: 'john@doe.com' },
      { firstName: 'Alice', email: 'alice@doe.com' },
    ];
  }
  public findOneById(id: string) {
    return { id: 1234, firstName: 'Alice', email: 'alice@doe.com' };
  }
}
