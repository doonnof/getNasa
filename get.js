export const get = () => {
    const getRequest = new XMLHttpRequest();
    const  api = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=5DqvBIA3U1W8r3Ri2tJJoGVhbfMoKOKUe4BT6234"; // api ключ
    getRequest.open("GET", api, false); // Подключение к api Nasa
    getRequest.onload = function getOnload() {  // Обращение к серверу Nasa
        try { // Конструкция для перехвата ошибок
            const responseJson = getRequest.responseText;
            const exchangeRates = JSON.parse(responseJson);
            return exchangeRates;
        } catch (e) {
            console.log("Error getOnload: " + e); // Вывод ошибок в консоль
        }
    }
    getRequest.send(null); // Завершение подключения
    return getRequest.onload(); // Возврат результата выполнения функции
}