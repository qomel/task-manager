export interface Task {
    id: number;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'done';
}
export declare class TasksService {
    private tasks;
    findAll(): Task[];
    findOne(id: number): Task | undefined;
    create(dto: Partial<Task>): Task;
    update(id: number, dto: Partial<Task>): Task | undefined;
    remove(id: number): void;
}
