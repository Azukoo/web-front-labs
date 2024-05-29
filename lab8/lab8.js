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
}
