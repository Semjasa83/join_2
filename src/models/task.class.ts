export class Task {
    title: string;
    description: string;
    category: string;
    assignedTo: number;
    date: string;
    id: string;
    priority: string;

    constructor (obj?: any) {
        this.title = obj ? obj.title : '';
        this.description = obj ? obj.description : '';
        this.category = obj ? obj.category : '';
        this.assignedTo = obj ? obj.assignedTo : '';
        this.date = obj ? obj.date : '';
        this.id = obj ? obj.id : '';
        this.priority = obj ? obj.priority : '';
    }

    public toJSON() {
        return {
            title: this.title,
            description: this.description,
            category: this.category,
            assignedTo: this.assignedTo,
            date: this.date,
            id: this.id,
            priority: this.priority,
        }
    }
}