/* Your Code Here */
function createEmployeeRecord(array){
  const [name, famName, title, payPH] = array
  return{
    firstName: name,
    familyName: famName,
    title: title,
    payPerHour: payPH,
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(recordsArray){
  return recordsArray.map(employeeRecord =>
    createEmployeeRecord(employeeRecord)
  )
}

function createTimeInEvent(time){
  const array = [time, 'TimeIn', 'timeInEvents']
  return timeStamp.apply(this, array)
}

function timeStamp(time, timeType, timeEvent){
  this[timeEvent].push({
    type: timeType,
    date: time.split(" ")[0],
    hour: parseInt(time.split(" ")[1], 10)
  })
  return this
}

function createTimeOutEvent(time){
  return timeStamp.call(this, time, 'TimeOut', 'timeOutEvents')
}

function hoursWorkedOnDate(date){
  const timeIn = this.timeInEvents.find(obj =>
  obj.date == date).hour
  const timeOut = this.timeOutEvents.find(obj =>
  obj.date == date).hour
  return(timeOut - timeIn) / 100
}

function wagesEarnedOnDate(date){
  const payRate = this.payPerHour
  const hoursWorked = hoursWorkedOnDate.call(this, date)
  return payRate * hoursWorked
}

function findEmployeeByFirstName(records, empName){
  return records.find(record => record.firstName == empName)
}

function calculatePayroll(employees){
  return employees.reduce(
    (sum, employee) => sum + allWagesFor.call(employee), 0 
  )
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
