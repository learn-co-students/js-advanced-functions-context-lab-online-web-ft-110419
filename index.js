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

function createEmployeeRecord(emp) {
    return {
        firstName: emp[0], familyName: emp[1], title: emp[2], payPerHour: emp[3],
        timeInEvents: [], timeOutEvents: []
    }

}


function createEmployeeRecords(emp) {
    let newArr = emp.map(ele => createEmployeeRecord(ele))
    return newArr
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}
function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

function hoursWorkedOnDate(dateIn) {
    let timeIn = this.timeInEvents.find(ele => ele.date === dateIn)
    let timeOut = this.timeOutEvents.find(ele => ele.date === dateIn)

    return (timeOut.hour - timeIn.hour) / 100

}

function wagesEarnedOnDate(checks) {
    let wage = hoursWorkedOnDate.call(this, checks) * this.payPerHour
    return parseFloat(wage.toString())
}

function calculatePayroll(empRecord) {
    return empRecord.reduce((memo, record) => memo + allWagesFor.call(record), 0)
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(ele => ele.firstName === firstName)
}
