import moment from "moment";

export const prepareEvents = (events = []) => {
  // La fecha esta en string, debo pasarla a objeto tipo date.
  return events.map((e) => ({
    ...e,
    end: moment(e.end).toDate(),
    start: moment(e.start).toDate(),
  }));
}