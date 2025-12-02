import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { postsType } from './enums/postType.enum';
import { postStatus } from './enums/postStatus.enum';
import { CreatePostMetaOptionsDto } from '../meta-options/dtos/create-post-meta-options.dto';
import { MetaOption } from 'src/meta-options/meta-option.entity';

@Entity({
  name: 'post',
})
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
    unique: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: postsType,
    nullable: false,
    default: postsType.POST,
  })
  postType: postsType;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: postStatus,
    nullable: false,
    unique: false,
    default: postStatus.DRAFT,
  })
  status: postStatus;

  @Column({
    type: 'text',
    nullable: true,
    unique: false,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
    unique: false,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
    unique: false,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: true,
    unique: false,
  })
  publishOn?: Date;

  // ? Work on these in lectures on relationships
  tags?: string[];

  @OneToOne(() => MetaOption, {
    cascade: true,
  })
  @JoinColumn()
  metaOptions?: MetaOption;
}
