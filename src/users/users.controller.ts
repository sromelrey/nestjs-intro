import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUsersParamDto } from './dto/get-users-param.dto';
import { PatchUserDto } from './dto/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

/**
 * Controller for handling user-related HTTP requests.
 */
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    // Injecting users service
    private readonly usersService: UsersService,
  ) {}
  /**
   * Handles a GET request to retrieve user data.
   *
   * @param getUsersParamDto - DTO containing route parameters (e.g., user ID from `/users/:id`).
   * @param limit - Number of results to return, extracted from query string with default value 10.
   * @param page - Page number for pagination, extracted from query string with default value 1.
   * @returns A string indicating the GET request was processed.
   *
   * @example
   * GET /users/123?limit=10&page=2
   */
  @Get('/:id')
  @ApiOperation({
    summary: 'Fetches a list of registered users in the application',
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully base on the documentation',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The number of entries returned per query',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description:
      'The position of the page number that you want the API to return',
    example: 1,
  })
  // @Get('{/:id}') // ? Optional param
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUsersParamDto, limit, page);
  }

  /**
   * Handles a POST request to create a new user.
   *
   * @param createUserDto - DTO containing the user data from the request body.
   * @param headers - Request headers.
   * @param ip - Client IP address.
   * @returns A string indicating the POST request was processed.
   *
   * @example
   * POST /users
   * Body: { "name": "John Doe", "email": "john@example.com" }
   */
  @Post()
  public createUsers(
    @Body() createUserDto: CreateUserDto,
    @Headers() headers: any,
    @Ip() ip: string,
  ) {
    console.log(createUserDto, headers, ip);
    return 'You sent a POST request to the users endpoint';
  }

  /**
   * Handles a PATCH request to update user data.
   *
   * @param patchUserDto - DTO containing the user fields to be updated.
   * @returns The updated user data (for now, just echoes back the DTO).
   *
   * @example
   * PATCH /users
   * Body: { "name": "Jane Doe" }
   */
  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
