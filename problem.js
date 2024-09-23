Problem 1: Tax Calculation Function
function calculateTax(income, expense) {
    if (typeof income !== 'number' || typeof expense !== 'number' || income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }
    const difference = income - expense;
    const tax = difference * 0.20;
    return tax;
}

Problem 2: Email Notification Function
function sendNotification(email) {
    const atTheRateIndex = email.indexOf('@');
    if (atTheRateIndex === -1 || atTheRateIndex === 0 || atTheRateIndex === email.length - 1) {
        return "Invalid Email";
    } else if (email.lastIndexOf('@') !== atTheRateIndex) {
        return "Invalid Email";
    }

    const [userName, domainName] = email.split('@');
    const emailAccount = `${userName} sent you an email from ${domainName}`;
    return emailAccount;
}

console.log(sendNotification('Arif@gmail.com'));


Problem 3: Digit Check in Name
function checkDigitsInName(input) {
    if (typeof input !== 'string') {
        return "Invalid Input";
    }
    const hasDigit = /\d/.test(input);
    return hasDigit;
}

console.log(checkDigitsInName('Raj123'));




Problem 4: Interview Waiting Time
function waitingTime(interviewTimes, serialNumber) {
    if (!Array.isArray(interviewTimes) || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }
    if (serialNumber > interviewTimes.length) {
        const totalInterviewTimes = interviewTimes.reduce((a, b) => a + b, 0);
        const allAverageInterviewTime = Math.round(totalInterviewTimes / interviewTimes.length);
        const peopleRemaining = serialNumber - interviewTimes.length;

        const waitingTime = peopleRemaining * allAverageInterviewTime;
        return waitingTime;
    }
    return 'Invalid Serial Number';
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));













