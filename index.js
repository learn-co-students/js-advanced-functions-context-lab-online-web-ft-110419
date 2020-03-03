/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = function(row){
    return {
    firstName: row[0],
    familyName: row[1],
    title: row[2],
    payPerHour: row[3],
    timeInEvents: [],
    timeOutEvents: []
    }
};

let createEmployeeRecords = function(employeeRow){
    return employeeRow.map(function(row){
        return createEmployeeRecord(row)
    });
};

let createTimeInEvent = function(timeStamp){
    let [date, hour] = timeStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

let createTimeOutEvent = function(timeStamp){
    let [date, hour] = timeStamp.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

let hoursWorkedOnDate = function(workDate){
    let inTime = this.timeInEvents.find(function(e){
        return e.date === workDate
    })
    let outTime = this.timeOutEvents.find(function(e){
        return e.date === workDate
    })
    return (outTime.hour - inTime.hour) / 100
} 

let wagesEarnedOnDate = function(workDate){
    let gross = hoursWorkedOnDate.call(this, workDate) * this.payPerHour
    return parseFloat(gross)
}

let findEmployeeByFirstName = function(arr, name){
    return arr.find(e => e.firstName === name);
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

let calculatePayroll = function(employeeArr){
    return employeeArr.reduce(function(x, employee){
        // return x + allWagesFor(employee)
        return x + allWagesFor.call(employee)

    }, 0)
}


  
// // Your code here


// let allWagesFor = function(employee){
//     let eligibleDates = employee.timeInEvents.map(function(e){
//         return e.date
//     })
//     let payDue = eligibleDates.reduce(function(x, day){
//         return x + wagesEarnedOnDate(employee, day);
//     }, 0)
//     return payDue;
// }





