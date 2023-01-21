export class Task {
    taskTitle: string;
    taskDescription: string;
    date: any;
    id: string;

    constructor (obj?: any) {
        this.taskTitle = obj ? obj.taskTitle : '';
        this.taskDescription = obj ? obj.taskDescription : '';
        this.date = obj ? obj.date : '';
        this.id = obj ? obj.id : '';
    }

    public toJSON() {
        return {
            taskTitle: this.taskTitle,
            taskDescription: this.taskDescription,
            date: this.date,
            id: this.id
        }
    }
}