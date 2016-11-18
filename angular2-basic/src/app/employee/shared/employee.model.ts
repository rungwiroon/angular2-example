export interface Employee {
    name: string;
    email: string;
    jobTitle: string;
    active: boolean;
    phoneNumber: string;
    date: string;
}

export class EmployeeModel implements Employee {
    public name: string;
    public email: string;
    public jobTitle: string;
    public active: boolean;
    public phoneNumber: string;
    public date: string;
}
