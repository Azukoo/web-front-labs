function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    let daysCountOutputDiv = document.getElementById('days-count-output');
    daysCountOutputDiv.innerHTML = "Количество дней с даты рождения : " + daysCount; 
}

function clearFields() {
    document.getElementById('input-date').value = "";

    let daysCountOutputDiv = document.getElementById('days-count-output');
    daysCountOutputDiv.innerHTML = "";
}