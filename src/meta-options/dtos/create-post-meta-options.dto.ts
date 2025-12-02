import { IsJSON, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostMetaOptionsDto {
  @IsNotEmpty()
  metaValue: any;
}
