import validator from 'is_js';


const checkEmpty = (val, key) => {
    if (validator.empty(val.trim())) {
        return `Please enter ${key}`
    } else {
        return ''
    }
}

const checkMinLength = (val, minLength, key) => {
    if (val.trim().length < minLength) {
        return `Please enter valid ${key}`
    } else {
        return ''
    }
}

export default function (data) {
    const { 
        fullName,
        userName,
        email, 
        password,
        otp
     } = data;

     if (email !== undefined ) {
        let emptyValidationText = checkEmpty(email, 'email')
        if (emptyValidationText !== '' ) {
            return emptyValidationText
        }
        else{
            if (!validator.email(email) ) {
                return "please enter your valid email"
            }
        }
     }


     if (password !== undefined) {
        let emptyValidationText = checkEmpty(password, "password");
        if (emptyValidationText !== '') {
            return emptyValidationText
        }else{
            let minLenghtValidation = checkMinLength(password, 6, "password");
            if(minLenghtValidation !== ''){
                return minLenghtValidation;
            }
        }
    }

     if (otp !== undefined) {
        let emptyValidationText = checkEmpty(otp, "otp");
        if (emptyValidationText !== '') {
            return emptyValidationText
        }else{
            let minLenghtValidation = checkMinLength(otp, 4, "Otp");
            if(minLenghtValidation !== ''){
                return minLenghtValidation;
            }
        }
    }

     if (userName !== undefined) {
        let emptyValidationText = checkEmpty(userName, "User Name");
        if (emptyValidationText !== '') {
            return emptyValidationText
        }else{
            let minLenghtValidation = checkMinLength(userName, 3, "User Name");
            if(minLenghtValidation !== ''){
                return minLenghtValidation;
            }
        }
    }

     if (fullName !== undefined) {
        let emptyValidationText = checkEmpty(fullName, "Full Name");
        if (emptyValidationText !== '') {
            return emptyValidationText
        }else{
            let minLenghtValidation = checkMinLength(fullName, 3, "Full Name");
            if(minLenghtValidation !== ''){
                return minLenghtValidation;
            }
        }
    }
     
}