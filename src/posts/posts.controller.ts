import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

@Controller('posts')
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
