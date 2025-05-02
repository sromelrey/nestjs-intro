import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { postsType } from './enums/postType.enum';
import { postStatus } from './enums/postStatus.enum';
import { CreatePostMetaOptionsDto } from './dto/create-post-meta-options.dto';

@Entity({
  name: 'post',
})
export class Post {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'varchar', length: 512, nullable: false, unique: false })
  title: string;

  @Column({
    type: 'enum',
    enum: postsType,
    length: 96,
    nullable: false,
    default: postsType.POST,
  })
  postType: postsType;

  @Column({ type: 'varchar', length: 256, nullable: false, unique: true })
  slug: string;

  @Column({
    type: 'enum',
    enum: postStatus,
    length: 96,
    nullable: false,
    unique: false,
    default: postStatus.DRAFT,
  })
  status: postStatus;

  @Column({ type: 'text', nullable: true, unique: false })
  content?: string;

  @Column({ type: 'text', nullable: true, unique: false })
  schema?: string;

  @Column({ type: 'varchar', length: 1024, nullable: true, unique: false })
  featuredImageUrl?: string;

  @Column({ type: 'timestamp', nullable: true, unique: false })
  publishOn?: Date;

  // ? Work on these in lectures on relationships
  //   @Column({ type: 'array', length: 96, nullable: true, unique: false })
  tags?: string[];

  //   @Column({ type: 'array', length: 96, nullable: true, unique: false })
  metaOptions?: CreatePostMetaOptionsDto[];
}
