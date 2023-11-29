/*  JavaScript Date Objects  */

// In JavaScript, date and time are represented by the Date object. The Date object provides the date and time information and also provides various methods.

// A JavaScript date defines the EcmaScript epoch that represents milliseconds since 1 January 1970 UTC. This date and time is the same as the UNIX epoch (predominant base value for computer-recorded date and time values).


/*

new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(milliseconds)

*/

// {
//   const dates  = new Date();
//   console.log(dates);
// }

// {
//   const dates  = new Date("2023-07-14");
//   console.log(dates);
// }

// {
//   const dates = new Date(2023 , 3);
//   console.log(dates);
// }

// {
//   const dates = new Date(2023 , 3  , 15);
//   console.log(dates);
// }

// {
//   const dates = new Date(2023 ,  3 , 16 , 16)
//   console.log(dates);
// }

// {
//   const dates = new Date(2023 ,  3 , 16 , 6 , 15)
//   console.log(dates);
// }

// {
//   const dates = new Date(2023 ,  3 , 16 , 6 , 15 , 20)
//   console.log(dates);
// }

// {
//   const dates = new Date(2023 ,  11 , 6 , 6 , 15 , 20)
//   console.log(dates);
// }

// {
//   const dates = new Date(2023 ,  3 , 16 , 6 , 15 , 20 , 2)
//   console.log(dates);
// }

// {
//   const dates = new Date(2000)
//   console.log(dates);
// }


/* javascript ISO standard time */

// {
//   const dates = new Date(2023 ,  3 , 16 , 6 , 15 , 20)
//   console.log(dates.toString());
//   console.log(dates.toDateString());
//   console.log(dates.toUTCString());
//   console.log(dates.toISOString());
// }

/* JavaScript Date Formats */

/* ISO Date , Short Date  , Long Date */

// {
//   const dates = new Date("2024");
//   console.log(dates);
// }

/* ShortDate */

// {
//   const dates = new Date("03/25/2023");
//   console.log(dates);
// }

/* LongDate */

// {
//   const dates = new Date("march 23 2023");
//   console.log(dates);
// }

// {
//   const dates = new Date("23 march 2023");
//   console.log(dates);
// }

/*  Date Input - Parsing Dates */

// {
//   let msec = Date.parse("March 21, 2012");
//   console.log(msec);
// }


/* JavaScript Get Date Methods */

/*

getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)

*/


// {
//   const dates = new Date();
//   console.log(dates);
//   let  getyear = dates.getFullYear();
//   let  getmonth = dates.getMonth();
//   let  getdate = dates.getDate();
//   let  getday = dates.getDay();
//   let  gethours = dates.getHours();
//   let  getminutes = dates.getMinutes();
//   let  getseconds = dates.getSeconds();
//   let  getmilliseconds = dates.getMilliseconds();
//   let  gettime = dates.getTime();

//   console.log(getyear);
//   console.log(getmonth);
//   console.log(getdate);
//   console.log(getday);
//   console.log(gethours);
//   console.log(getminutes);
//   console.log(getseconds);
//   console.log(getmilliseconds);
//   console.log(gettime);
// }


/*  JavaScript Set Date Methods */

/*

setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)

*/

// {
//   const dates = new Date();
//   dates.setFullYear(2020);
//   console.log(dates);
// }

// {
//   const dates = new Date();
//   dates.setMonth(11);
//   console.log(dates);
// }

// {
//   const dates = new Date();
//   dates.setDate(25);
//   console.log(dates);
// }

// {
//   const dates = new Date();
//   dates.setHours(12);
//   console.log(dates);
// }

// {
//   const dates = new Date();
//   dates.setMinutes(15);
//   console.log(dates);
// }

// {
//   const dates = new Date();
//   dates.setSeconds(45);
//   console.log(dates);
// }

// {
//   const dates = new Date();
//   dates.setMilliseconds(10000);
//   console.log(dates);
// }

// {
//   const dates = new Date();
//   dates.setTime();
//   console.log(dates);
// }
  
  