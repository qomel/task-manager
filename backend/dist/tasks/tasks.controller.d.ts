import { TasksService, Task } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): Task[];
    findOne(id: number): Task | undefined;
    create(dto: Partial<Task>): Task;
    update(id: number, dto: Partial<Task>): Task | undefined;
    remove(id: number): void;
}
