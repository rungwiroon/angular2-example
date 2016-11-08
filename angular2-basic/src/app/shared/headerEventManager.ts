import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class HeaderEventManager {
    public showNavBar: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }
}