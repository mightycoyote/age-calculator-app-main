import { DateTime, Interval } from "luxon";

function validateEntry(day, month, year, errors, setErrors) {
    const enteredDate = DateTime.fromObject({ year, month, day });
    const currentDate = DateTime.now();
    const i = Interval.fromDateTimes(enteredDate, currentDate);
    // console.log(i.length()); // working
  
    // maybe check one more time here to make sure it doesn't have any empty entries

    // either of these will have to return an error and update the entry component
    // if (!enteredDate.isValid) {
    //   console.log(enteredDate.invalidReason); // "unit out of range"
    //   return enteredDate.invalidReason;
    // }
  
    // if (!i.isValid) {
    //   console.log(i.invalidReason); // "end before start"
    //   return i.invalidReason;
    // }

    // if there are no errors, the interval should be passed back to the app to be printed in the display component
    // return i;

    setErrors(errors);
  }

  export default validateEntry;