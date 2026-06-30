import { InputStatus } from "@/types/enums";
import { InputValidation } from "@/types/inputTypes";

export const runValidation = (validation?: InputValidation): { status: InputStatus, msg: string } => {
  return { status: InputStatus.OK, msg: '' }
}
