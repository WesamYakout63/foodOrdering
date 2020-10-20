export class User {
    public username : string;
    public email : string;
    public password : string;
    public phone : string;
    public address : string;

    constructor(username : string , email : string , password : string , phone : string , address : string) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
    }
}