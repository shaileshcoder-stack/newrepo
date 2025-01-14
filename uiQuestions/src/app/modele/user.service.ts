import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Userservice {
    private userName;

    constructor(){
        this.userName ='john doe';
    }

    getUsername(){
        return this.userName;
    }

    setUsername(name:string): void{
        this.userName =name;
    }
}