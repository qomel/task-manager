import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
export declare class AuthController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    register(body: any): Promise<Omit<import("../users/entities/user.entity").User, "password">>;
    login(body: any): Promise<{
        access_token: string;
    }>;
}
