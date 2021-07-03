import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class CatalogService {

    constructor( private http: HttpClient ) {}

    getCatalog() {
        return this.http.get('http://localhost:3000/catalog');
    }
    getCategory() {
        return this.http.get('http://localhost:3000/category');
    }
}