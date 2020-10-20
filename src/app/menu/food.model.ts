export class food{
    public name: string;
    public description: string;
    public imgSrc: string
    public price: number;
    public count: number;

    constructor(name : string , description : string , imgSrc : string , price : number , count : number) {
        this.name = name;
        this.description = description;
        this.imgSrc = imgSrc;
        this.price = price;
        this.count = count;
    }
}