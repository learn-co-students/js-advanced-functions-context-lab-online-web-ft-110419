/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord([firstName, familyName, title, payPerHour] = employee) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateTime) {
    const record = Object.assign({}, this);
    const [date, hour] = dateTime.split(' ');
    record.timeInEvents.push({
        type: "TimeIn",
        date,
        hour: parseInt(hour)
    });

    return record;
}

function createTimeOutEvent(dateTime) {
    const record = Object.assign({}, this);
    const [date, hour] = dateTime.split(' ');
    record.timeOutEvents.push({
        type: "TimeOut",
        date,
        hour: parseInt(hour)
    });
    return record;
}

function hoursWorkedOnDate(date) {
    const timeInEventOnDate = this.timeInEvents.find(e => e.date === date);
    const timeOutEventOnDate = this.timeOutEvents.find(e => e.date === date);
    return (timeOutEventOnDate.hour - timeInEventOnDate.hour) / 100;
}

function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}

// function findEmployeeByFirstName(firstName) {
//     return this.find(e => e.firstName === firstName);
// }

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(e => e.firstName === firstName);
}

function calculatePayroll(employees) {
    const allEmployeeWages = employees.map(e => {
        return allWagesFor.call(e);
    })

    return allEmployeeWages.reduce((acc, curr) => acc + curr);
}