var catMe = require('cat-me')

const chalk = require('chalk');
const log = console.log;// Объединяет стилизованные и обычные строки
log(chalk.blue('Hello') + ' World' + chalk.red('!'));// Совмещает множественные стили посредством цепного API
log(chalk.blue.bgRed.bold('Hello world!'));// Прописываем аргументы
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));




console.log('Hello')



var cat = catMe();
console.log(chalk.magentaBright.bgYellowBright.bold(cat))

const {Howl, Howler} = require('howler');

var sound = new Howl({
  src: ['./Cat-sound-mp3.mp3']
});
 
sound.play();

var say = require('say');
say.speak('Hello, how are you today?', (err) => {
if (err) {
return console.error(err);
}
console.log('Text has been spoken.');
});
