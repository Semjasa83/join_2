export class Task {
    taskTitle: string;
    taskDescription: string;
    date: any;
    id: string; //observable über board -> id übergeben
    prio: string;
    category: string;
    assignedContact: string;

    constructor (obj?: any) {
        this.taskTitle = obj ? obj.taskTitle : '';
        this.taskDescription = obj ? obj.taskDescription : '';
        this.date = obj ? obj.date : '';
        this.id = obj ? obj.id : '';
        this.prio = obj ? obj.prio : '';
        this.category = obj ? obj.category : '';
        this.assignedContact = obj ? obj.assignedContact : '';
    }

    public toJSON() {
        return {
            taskTitle: this.taskTitle,
            taskDescription: this.taskDescription,
            date: this.date,
            id: this.id,
            prio: this.prio,
            category: this.category,
            assignedContact: this.assignedContact,
        }
    }
}