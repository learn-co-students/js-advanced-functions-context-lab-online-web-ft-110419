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

function createEmployeeRecord(array) {
    let object = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return object
}

function createEmployeeRecords(array) {
    return array.map(function(e){return createEmployeeRecord(e)})
}

function createTimeInEvent(dateTime) {
    this.timeInEvents.push({
        type: "TimeIn",
        date: dateTime.split(" ")[0],
        hour: parseInt(dateTime.split(" ")[1])
    })
    return this
}

function createTimeOutEvent(dateTime) {
    this.timeOutEvents.push({
        type: "TimeOut",
        date: dateTime.split(" ")[0],
        hour: parseInt(dateTime.split(" ")[1])
    })
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(e => e.date === date);
    let timeOut = this.timeOutEvents.find(e => e.date === date);
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function calculatePayroll(employees) {
    let wages = employees.map(function(e){return allWagesFor.call(e)});
    return wages.reduce(function(p, e){return p + e})
}

function findEmployeeByFirstName(employees, firstName) {
    return employees.find(e => e.firstName === firstName)
}