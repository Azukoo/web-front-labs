function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = "Дата и время для русской локали : " + today.toLocaleString('RU');

    let out1 = document.getElementById('dates-output');
    let today1 = new Date();
    out1.innerHTML = "Дата и время для арабской локали : " + today1.toLocaleString('ar-MA');

    let out2 = document.getElementById('dates-current');
    let today2 = new Date();
    out2.innerHTML = "Дата и время для английской локали : " + today2.toLocaleString('en-CA');

    let out3 = document.getElementById('data-current');
    let today3 = new Date();
    out3.innerHTML = "Дата и время для французской локали : " + today3.toLocaleString('fr-FR');

    let out4 = document.getElementById('data-output');
    let today4 = new Date();
    out4.innerHTML = "Дата и время для корейской локали : " + today4.toLocaleString('ko-KR');

    let out5 = document.getElementById('dates-out');
    let today5 = new Date();
    out5.innerHTML = "Дата и время для китайской локали : " + today5.toLocaleString('zh-SG');


    let out6 = document.getElementById('current-year');
    let today6 = new Date();
    out6.innerHTML = "Текущий год: " + today6.getFullYear();

    let out7 = document.getElementById('current-month');
    let today7 = new Date();
    let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    out7.innerHTML = "Текущий месяц: " + month[today7.getMonth()];

    let out8 = document.getElementById('current-day');
    let today8 = new Date();
    out8.innerHTML = "Текущая дата: " + today8.getDate();

    let out9 = document.getElementById('current-weekday');
    let today9 = new Date();
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    out9.innerHTML = "День недели: " + days[today9.getDay()];
}
