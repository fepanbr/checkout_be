import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Worktime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  startDate: string;

  @Column({ length: 25 })
  endDate: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
