let user_Name =  document.getElementById("name");
let user_Phone = document.getElementById("phone");
let user_Service = document.getElementById("service");
let user_Date = document.getElementById("date");
let result = document.getElementById("result");


window.book = function() {
    let bookings = {
        uname : user_Name.value,
        phone : user_Phone.value,
        service : user_Service.value,
        date : user_Date.value
    };

    result.innerHTML = `name: ${bookings.uname}`;
}