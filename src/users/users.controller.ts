import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // ?  @Get('{/:id}') Optional parameter
  @Get('/:id') // ? Required Parameter
  public getUsers(@Param() params: any, @Query() query: any) {
    console.log(params, query);
    return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUsers(@Body() request: any) {
    console.log(request);
    return 'You sent a post request to users endpoint';
  }
}
