import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  async create(userData: Partial<User>): Promise<Omit<User, 'password'>> {
    const hashedPassword = await bcrypt.hash(userData.password!, 10);

    const user: User = {
      id: this.idCounter++,
      username: userData.username!,
      email: userData.email!,
      password: hashedPassword,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(user);
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((u) => u.email === email);
  }

  async validateUser(
    email: string,
    plainPassword: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.findByEmail(email);
    if (!user) return null;

    const match = await bcrypt.compare(plainPassword, user.password);
    if (!match) return null;

    const { password, ...rest } = user;
    return rest;
  }
}
