import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PatchPostDto } from './dto/patch-post.dto';

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

  @ApiOperation({
    summary: 'Creates a mew blog post',
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your post is created successfully',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }

  @ApiOperation({
    summary: 'Update an existing blog post',
  })
  @ApiResponse({
    status: 200,
    description: 'A 200 response if the post is updated successfully',
  })
  @Patch()
  public updatePost(@Body() patchPostsDto: PatchPostDto) {
    console.log(patchPostsDto);
  }
}
