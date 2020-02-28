function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(arrayOfArrays) {
  let employeeRecords = [];
  for (const array of arrayOfArrays) {
    employeeRecords.push(createEmployeeRecord(array));
  }
  return employeeRecords;
}

function createTimeInEvent(dateTime) {
  const [date, hour] = dateTime.split(' ');
  this.timeInEvents.push({
    type: "TimeIn",
    date: date,
    hour: parseInt(hour, 10)
  });
  return this;
}

function createTimeOutEvent(dateTime) {
  const [date, hour] = dateTime.split(' ');
  this.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10)
  });
  return this;
}

function hoursWorkedOnDate(date) {
  const timeInEvent = this.timeInEvents.find(function(timeIn) {
    return timeIn.date === date;
  });
  const timeOutEvent = this.timeOutEvents.find(function(timeOut) {
    return timeOut.date === date;
  });
  return (timeOutEvent.hour - timeInEvent.hour) / 100;
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce(function(memo, employeeRecord) {
    return memo + allWagesFor.call(employeeRecord);
  }, 0);
}

function findEmployeeByFirstName(employeeRecords, firstName) {
  return employeeRecords.find(function(employeeRecord) {
    return employeeRecord.firstName === firstName;
  });
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
    return e.date;
  });
  
  let payable = eligibleDates.reduce(function (memo, d) {
    return memo + wagesEarnedOnDate.call(this, d);
  }.bind(this), 0); // <== Hm, why did we need to add bind() there? We'll discuss soon!
  
  return payable;
};
