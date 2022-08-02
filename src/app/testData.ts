import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";


export class TestData implements InMemoryDbService{
    createDb() {
        let bookDetails =[
            {id:100, name:'Harshad',category:'angulate'},
            {id:101, name:'Harshadchavda',category:'angulatewqdq'},
        ];
        return {book:bookDetails};
    }
}