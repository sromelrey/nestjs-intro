import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'varchar', length: 96, nullable: false, unique: false })
  firstName: string;

  @Column({ type: 'varchar', length: 96, nullable: true, unique: false })
  lastName: string;

  @Column({ type: 'varchar', length: 96, nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 96, nullable: false, unique: false })
  password: string;
}
