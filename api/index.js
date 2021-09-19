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

    const arrTypes = [
      'bug',
      'dark',
      'dragon',
      'electric',
      'fairy',
      'fighting',
      'fire',
      'flying',
      'ghost',
      'grass',
      'ground',
      'ice',
      'normal',
      'poison',
      'psychic',
      'rock',
      'steel',
      'water'
    ]

    const modelArrTypes = arrTypes.map(type => Type.create({name: type}))
    // //Creo 2 tipos para Tests
    // var type1 = Type.create({
    //   name: 'fire'
    // })
    // var type2 = Type.create({
    //   name: 'dragon'
    // })

    Promise.all(modelArrTypes) //
      .then(res => {
        console.log("Categorías precargadas");
      });
  });
});
