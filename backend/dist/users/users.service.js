"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    users = [];
    idCounter = 1;
    async create(userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = {
            id: this.idCounter++,
            username: userData.username,
            email: userData.email,
            password: hashedPassword,
            role: 'user',
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.users.push(user);
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    async findByEmail(email) {
        return this.users.find((u) => u.email === email);
    }
    async validateUser(email, plainPassword) {
        const user = await this.findByEmail(email);
        if (!user)
            return null;
        const match = await bcrypt.compare(plainPassword, user.password);
        if (!match)
            return null;
        const { password, ...rest } = user;
        return rest;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map