import { User } from './entities/user.entity';
export declare class UsersService {
    private users;
    private idCounter;
    create(userData: Partial<User>): Promise<Omit<User, 'password'>>;
    findByEmail(email: string): Promise<User | undefined>;
    validateUser(email: string, plainPassword: string): Promise<Omit<User, 'password'> | null>;
}
