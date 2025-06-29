"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
let TasksService = class TasksService {
    tasks = [];
    findAll() {
        return this.tasks;
    }
    findOne(id) {
        return this.tasks.find((task) => task.id === id);
    }
    create(dto) {
        const newTask = {
            id: Date.now(),
            title: dto.title || '',
            description: dto.description || '',
            status: 'pending',
        };
        this.tasks.push(newTask);
        return newTask;
    }
    update(id, dto) {
        const task = this.findOne(id);
        if (!task)
            return undefined;
        task.title = dto.title ?? task.title;
        task.description = dto.description ?? task.description;
        task.status = dto.status ?? task.status;
        return task;
    }
    remove(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=tasks.service.js.map