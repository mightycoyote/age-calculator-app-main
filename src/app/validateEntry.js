import { DateTime, Interval } from "luxon";

function validateEntry(day, month, year, setPageError, setElapsed) {
    const enteredDate = DateTime.fromObject({ year, month, day });
    const currentDate = DateTime.now();
    const i = Interval.fromDateTimes(enteredDate, currentDate);
  
    // maybe check one more time here to make sure it doesn't have any empty entries
     // check for problems like Feb 30
    if (!year || !month || !day || !enteredDate.isValid) {
      setPageError("invalidDate");
      return;
    }
  
    // check date is not in the future
    if (!i.isValid) {
      setPageError("inFuture");
      return;
    }

    // if there are no errors, the interval should be passed back to the app to be printed in the display component
    // this is also where the Luxon Interval object should be translated into something useable
    setElapsed(i.toDuration().toFormat("yy MM dd").split(" "));
  }

  export default validateEntry;