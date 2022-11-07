import { FormControl } from "@angular/forms";

interface ValidationResult{
    [key:string]:boolean;
}

export class MalikValidator {

    static containMalik(control:FormControl):ValidationResult{
        if(control.value.indexOf('malik') != -1){
            return  {"containMalik":true};
        }else{
            return {"containMalik":false};
        }
        
        
    }
}