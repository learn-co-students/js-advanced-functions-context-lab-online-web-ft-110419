/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
class employee{
	constructor(firstName,familyName,title,payPerHour) {
		this.firstName = firstName
		this.familyName = familyName
		this.title = title
		this.payPerHour = payPerHour
		this.timeInEvents = []
		this.timeOutEvents = []
	}
}
function createEmployeeRecord(array) {
	let employee1 = new employee(array[0], array[1], array[2], array[3])
	return employee1
}

function createEmployeeRecords(array) {
	let employees = array.map(employeeArray => createEmployeeRecord(employeeArray))
	return employees
}

class timeEvent {
	constructor(dateTime) {
		this.date = dateTime.slice(0, dateTime.length -5)
		this.hour = Number(dateTime.slice(dateTime.length - 4, dateTime.length))
	}
}

function createTimeInEvent(dateTime){
	let timeIn = new timeEvent(dateTime)
	timeIn.type = "TimeIn"
	this.timeInEvents.push(timeIn)
	return this
}

function createTimeOutEvent(dateTime){
	let timeOut = new timeEvent(dateTime)
	timeOut.type = "TimeOut"
	this.timeOutEvents.push(timeOut)
	return this
}

function hoursWorkedOnDate(date){
	let timesIn = this.timeInEvents.filter(event => event.date === date)
	let timesOut = this.timeOutEvents.filter(event => event.date === date)
	let hoursWorked = timesOut.map((timeOut, index) => (timeOut.hour - timesIn[index].hour)/100)
	hoursWorked.reduce((hours, total=0) => hours+total)
	return hoursWorked[0]
}

function wagesEarnedOnDate(date){
	return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(employees, name){
	return employees.find(employee => employee.firstName === name)
}

function calculatePayroll(employees){
	let pay = employees.map(employee => allWagesFor.call(employee))
	return pay.reduce((pay, total=0) => total + pay)
}
	

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
