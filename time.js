function generateDateArray(startDate, endDate) {
    var checkInDate = new Date(startDate);
    var checkOutDate = new Date(endDate);
    var dateArray = [];
  
    // Adjust for the timezone offset to ensure dates are correct for the user's timezone
    checkInDate.setMinutes(checkInDate.getMinutes() + checkInDate.getTimezoneOffset());
    checkOutDate.setMinutes(checkOutDate.getMinutes() + checkOutDate.getTimezoneOffset());
  
    // Adjust the checkOutDate to include the end of the day
    // checkOutDate.setDate(checkOutDate.getDate() + 1);
  
    while (checkInDate <= checkOutDate) {
      // Format date as 'YYYY-MM-DD' without altering for timezone
      dateArray.push(checkInDate.toISOString().split('T')[0]);
      checkInDate.setDate(checkInDate.getDate() + 1); // Increment day by 1
    }
  
    console.log(dateArray); // Log to console
  }

const startDate = '2024-03-10'; // Starting date as a string
const endDate = '2024-03-15'; // Ending date as a string

console.log(generateDateArray(startDate, endDate));
