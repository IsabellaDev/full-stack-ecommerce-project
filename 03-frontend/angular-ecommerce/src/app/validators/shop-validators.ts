import { FormControl, Validators } from "@angular/forms";

export class ShopValidators {

    // whitespace validation 
    static notOnlyWhitespace(control: FormControl): Validators {
        
        // check if the string only contains whitespaces
        if (control.value && control.value.trim() === '') {
            
            // invalid, return error object
            return { 'notOnlyWhitespace': true };
        }
        return null;
    }
}
