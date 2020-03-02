let createEmployeeRecord = function(e) {
    return {
        firstName: e[0],
        familyName: e[1],
        title: e[2],
        payPerHour: e[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(array) {
    return array.map(createEmployeeRecord)
}

let createTimeInEvent = function(date) {
    date = date.split(" ")
    let event = {
        type: "TimeIn",
        hour: parseInt(date[1]),
        date: date[0]
    }
    this.timeInEvents.push(event)
    return this
}

let createTimeOutEvent = function(date) {
    date = date.split(" ")
    let event = {
        type: "TimeOut",
        hour: parseInt(date[1]),
        date: date[0]
    }
    this.timeOutEvents.push(event)
    return this
}

let hoursWorkedOnDate = function(soughtDate) {
    let start = this.timeInEvents.find(function(e) { return e.date === soughtDate })
    let end = this.timeOutEvents.find(function(e) { return e.date === soughtDate })
    return (end.hour - start.hour) / 100
}

let wagesEarnedOnDate = function(soughtDate) {
    let pay =  hoursWorkedOnDate.call(this, soughtDate) * this.payPerHour
    return parseFloat(pay.toString())

}

let findEmployeeByFirstName = function(array, string) {
    return array.find(function(e) { return e.firstName === string})
}

  let calculatePayroll = function(array) {
    let total = array.reduce(function(num, employee){
        return num += allWagesFor.call(employee)
    }, 0)
   return total
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

// ******* attempt1
// let createEmployeeRecord = function(row){
//     return {
//         firstName: row[0],
//         familyName: row[1],
//         title: row[2],
//         payPerHour: row[3],
//         timeInEvents: [],
//         timeOutEvents: []
//     }
// }

// let createEmployeeRecords = function(employeeRowData) {
//     return employeeRowData.map(function(row){
//         return createEmployeeRecord(row)
//     })
// }

// let createTimeInEvent = function(dateStamp){
//     let [date, hour] = dateStamp.split(' ')

//     this.timeInEvents.push({
//         type: "TimeIn",
//         hour: parseInt(hour, 10),
//         date,
//     })

//     return this
// }

// let createTimeOutEvent = function(dateStamp){
//     let [date, hour] = dateStamp.split(' ')

//     this.timeOutEvents.push({
//         type: "TimeOut",
//         hour: parseInt(hour, 10),
//         date,
//     })

//     return this
// }

// let hoursWorkedOnDate = function(soughtDate){
//     let inEvent = this.timeInEvents.find(function(e){
//         return e.date === soughtDate
//     })

//     let outEvent = this.timeOutEvents.find(function(e){
//         return e.date === soughtDate
//     })

//     return (outEvent.hour - inEvent.hour) / 100
// }

// let wagesEarnedOnDate = function(soughtDate) {
//     let rawWage = hoursWorkedOnDate.call(this, soughtDate) * this.payPerHour
//     return parseFloat(rawWage.toString())
// }


// let findEmployeeByFirstName = function(srcArray, firstName) {
//     return srcArray.find(function(rec){
//       return rec.firstName === firstName
//     })
//   }

//   function calculatePayroll(array){
//     let total = array.reduce(function(num, employee){
//         return num += allWagesFor.call(employee)
//     }, 0)
//    return total
// }

// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }