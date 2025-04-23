import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/aut.hservice';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(
    /*
     * Injecting Users Service
     */
    private readonly usersService: UsersService,
  ) {}
  public findAll(userId: string) {
    const user = this.usersService.findOneById('1234');
    return [
      { user, title: 'Test title', content: 'test Content' },
      { user, title: 'Test title 2', content: 'test Content 2' },
    ];
  }
}
