const notifier = require('node-notifier');

const citates = [{
    title: "Take a break",
    message: "«Человек есть нечто, что должно превзойти.»",
    sound: true
},{
    title: "Take a break",
    message: "«Ты должен стать тем, кем являешься.»",
    sound: true
},{
    title: "Take a break",
    message: "«Что ни убивает меня, делает меня сильнее.»",
    sound: true
},{
    title: "Take a break",
    message: "«Сверхчеловек – это смысл земли.»",
    sound: true
},{
    title: "Take a break",
    message: "«Я учу вас Сверхчеловеку. Человек — это нечто, что должно быть преодолено.»",
    sound: true
}]

// Интервал в минутах
const interval = 25 * 60 * 1000;

setInterval(() => {
  notifier.notify({
    title: 'Напоминание',
    message: 'Сделай перерыв!',
    sound: true
  });
}, interval);