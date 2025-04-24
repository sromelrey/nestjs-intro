import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(
    // Injecting users service
    private readonly postService: PostsService,
  ) {}

  @Get('{/:userId}')
  public getPost(@Param('userId') userId: string) {
    return this.postService.findAll(userId);
  }
}
