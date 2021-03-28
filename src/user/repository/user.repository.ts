import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findName(name: string) {
    return this.createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('user.name = :name', { name })
      .getOne();
  }
}
