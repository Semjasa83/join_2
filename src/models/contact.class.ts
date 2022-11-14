export class Contact {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    shortTag: string;
    id: string;
    color: string;

    constructor (obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.phone = obj ? obj.phone : '';
        this.shortTag = obj ? obj.shortTag : '';
        this.id = obj ? obj.id : '';
        this.color = obj ? obj.color : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            shortTag: this.shortTag,
            id: this.id,
            color: this.color,
        }
    }
}