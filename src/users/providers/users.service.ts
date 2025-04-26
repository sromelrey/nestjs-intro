import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dto/get-users-param.dto';
import { AuthService } from 'src/auth/providers/aut.hservice';

/**
 * Service responsible for handling business operations
 * related to the Users entity.
 */
@Injectable()
export class UsersService {
  constructor(
    /**
     * Injects the AuthService to handle authentication-related operations.
     *
     * @param authService - The authentication service instance.
     */
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   * Retrieves a list of users based on the provided parameters.
   *
   * @param getUsersParamDto - DTO containing query parameters for fetching users.
   * @param limit - Maximum number of users to retrieve.
   * @param page - Current page number for pagination.
   * @returns A mock list of user objects.
   */
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
  /**
   * Retrieves a single user by their unique identifier.
   *
   * @param id - The unique identifier of the user.
   * @returns A mock user object.
   */
  public findOneById(id: string) {
    return { id: 1234, firstName: 'Alice', email: 'alice@doe.com' };
  }
}
