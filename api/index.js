//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Pokemon, Type } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    // //Creo 2 tipos para Tests
    // var type1 = Type.create({
    //   name: 'fire'
    // })
    // var type2 = Type.create({
    //   name: 'dragon'
    // })

    // //Creo 2 pokes para Tests
    // var poke1 = Pokemon.create({
    //   name: 'Charizard'
    // })
    // var poke2 = Pokemon.create({
    //   name: 'Draagonite'
    // })

    // //Conecto los tipos con los pokes para Tests
    // async () => {
    //   await poke1.setTypes([type1]);
    //   await poke2.setTypes([type2]);
    // }

    // Promise.all([type1, type2, poke1, poke2]) //
    //   .then(res => {
    //     console.log("Categorías precargadas");
    //   });
  });
});
