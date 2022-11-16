import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'newPipe'
})

export class CustomPipe extends DatePipe implements PipeTransform{


    transform(value: any): any {
        return super.transform(value, "EEEE d MMMM y " );
        }

}