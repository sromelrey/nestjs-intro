import { Body, forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { CreatePostDto } from '../dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';

@Injectable()
export class PostsService {
  constructor(
    /*
     * Injecting Users Service
     */
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,

    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) { }

  public findAll(userId: string) {
    const user = this.usersService.findOneById('1234');
    return [
      { user, title: 'Test title', content: 'test Content' },
      { user, title: 'Test title 2', content: 'test Content 2' },
    ];
  }

  public async createPost(@Body() createPostDto: CreatePostDto) {
    // Create the MetaOption entity instance if metaOptions are provided
    let metaOption: MetaOption | undefined;
    if (createPostDto.metaOptions) {
      metaOption = this.metaOptionsRepository.create(
        createPostDto.metaOptions,
      );
    }

    // Create the Post entity with the MetaOption entity instance
    const post = this.postsRepository.create({
      ...createPostDto,
      metaOptions: metaOption,
    });

    return await this.postsRepository.save(post);
  }
}
