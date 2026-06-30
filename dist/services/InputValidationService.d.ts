import { InputStatus } from '../types/enums';
import { InputValidation } from '../types/inputTypes';
export declare const runValidation: (validation?: InputValidation) => {
    status: InputStatus;
    msg: string;
};
