function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-Ru');
    document.getElementById('time').innerHTML = currentTime;
};
    setInterval(showTime, 1000);

function updateSecondHand() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondHand = document.getElementById('secondHand');
        
    const rotationDegrees = seconds * 6; // Каждая секунда соответствует повороту на 6 градусов
    secondHand.style.transform = `rotate(${rotationDegrees}deg)`;
}
    
    // Обновляем положение стрелки каждую секунду
    setInterval(updateSecondHand, 1000);
    
    