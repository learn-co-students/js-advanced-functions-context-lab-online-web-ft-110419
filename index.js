/* Your Code Here */
const createEmployeeRecord = function([firstName, familyName, title, payPerHour]) {
    const record = {
        firstName : firstName,
        familyName : familyName,
        title : title,
        payPerHour : payPerHour,
        timeInEvents : [],
        timeOutEvents : []
    }
    return record
}

const createEmployeeRecords = function(employees) {
    const records = employees.map(createEmployeeRecord)
    return records
}

const createTimeInEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    
    this.timeInEvents.push({
        type : 'TimeIn',
        hour : parseInt(hour, 10),
        date : date
    })
    
    return this
}

const createTimeOutEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    
    this.timeOutEvents.push({
        type : 'TimeOut',
        hour : parseInt(hour, 10),
        date : date
    })
    
    return this
}

function hoursWorkedOnDate(date) {
    const inTime = this.timeInEvents.find( event => event.date === date).hour
    const outTime = this.timeOutEvents.find( event => event.date === date).hour
    const hours = (outTime - inTime) / 100
    return hours
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date)
    const rate = this.payPerHour
    return hours * rate
}
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

function findEmployeeByFirstName(employees, firstName) {
    const employee = employees.find( emp => emp.firstName === firstName)
    return employee
}

function payrollExpense() {
    const eligibleDates = this.timeOutEvents.map( event => event.date )
    const wages = eligibleDates.call(allWagesFor(this), 0)
    console.log(wages)
}

function calculatePayroll(employees) {
    const wages = employees.reduce( (total, emp) => {
        return total + allWagesFor.call(emp)
    }, 0)
    return wages
}