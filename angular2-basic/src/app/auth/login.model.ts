export interface Login {
    Username: string;
    Password: string;
}

export class LoginModel implements Login {
    public Username: string;
    public Password: string;
}

