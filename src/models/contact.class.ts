export class Contact {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    userName: string;
    shortName: string;
    id: string;

    constructor (obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.phone = obj ? obj.phone : '';
        this.userName = obj ? obj.userName : '';
        this.shortName = obj ? obj.shortName : '';
        this.id = obj ? obj.id : '';
    }

    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            userName: this.userName,
            shortName: this.shortName,
            id: this.id
        }
    }
}