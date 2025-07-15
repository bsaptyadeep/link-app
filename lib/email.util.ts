import { emailValidationRegex } from "@/constants/regex";

export const isValidEmail = (emailId: string) => {
    if (!emailValidationRegex.test(emailId)) {
        return false;
    }
    return true;
}