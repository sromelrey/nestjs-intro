import { Body, forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/aut.hservice';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { CreatePostDto } from '../dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    /*
     * Injecting Users Service
     */
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,

    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  public findAll(userId: string) {
    const user = this.usersService.findOneById('1234');
    return [
      { user, title: 'Test title', content: 'test Content' },
      { user, title: 'Test title 2', content: 'test Content 2' },
    ];
  }

  public async createPost(@Body() createPost: CreatePostDto) {
    let newPosts = this.postsRepository.create(createPost);
    newPosts = await this.postsRepository.save(newPosts);
    return newPosts;
  }
}
