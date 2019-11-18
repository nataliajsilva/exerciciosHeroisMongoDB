//Desafio

//Você receberá um arquivo com o formato JSON contendo alguns personagens de quadrinhos e/ou desenhos animados e 
//você deverá realizar as alterações que foram solicitadas abaixo pelo cliente.

//1.	Selecione todos os registro;
db.herois.find().pretty()

//2.	Selecione apenas o primeiro registro;
db.herois.findOne()

//3.	Selecione todos os registros em que o nome seja igual a ‘Carla’ ou a quantidade de gatos seja igual a 2;
db.herois.find({$or: [{"nome": "Carla"}, {"quantidadeGatos": 2}]}).pretty()

//4.	Selecione todos os registros em que o local de nascimento seja igual a Nova York e necessariamente que a
//quantidade de cachorros seja igual a 1;
db.herois.find({$and: [{"local": "Nova York"}, {"quantidadeCachorros": 1}]}).pretty()

//5.	Selecione todos os registros em que a quantidade de gatos seja igual a 4 ou a quantidade de cachorros seja 
//igual a 2;
db.herois.find({$or: [{"quantidadeGatos": 4}, {"quantidadeCachorros": 2}]}).pretty()

//6.	Selecione todos os registros em que o nome comece com C;
db.herois.find({"nome": /^c/i}).pretty()

//7.	Selecione todos os registros em que o nome comece com H;
db.herois.find({"nome": /^h/i}).pretty()

//8.	Selecione todos os registros em que o nome termine com a;
db.herois.find({"nome": /a$/i}).pretty()

//9.	Selecione todos os registros em que o nome contenha s;
db.herois.find({"nome": /s/i}).pretty()

//10.	Selecione todos os registros em que o nome contenha ‘e’ ou ‘o’;
db.herois.find({$or: [{"nome": /e/i}, {"nome": /o/i}]}).pretty()

//11.	Insira 3 novos super-heróis;
db.herois.insertMany([{nome:"Drax", dateOfBirth:"1989-08-19T16:30:00.000Z", local:"Galaxia", usaCapa: false, quantidadeGatos: 0, quantidadeCachorros: 0},
{nome:"Gamora", dateOfBirth:"1987-08-19T16:30:00.000Z", local:"Galaxia", usaCapa: false, quantidadeGatos: 0, quantidadeCachorros: 0},
{nome:"Nebulosa", dateOfBirth:"1991-08-19T16:30:00.000Z", local:"Galaxia", usaCapa: false, quantidadeGatos: 0, quantidadeCachorros: 0}])

//13.	Atualize a quantidade de gatos em que o usuário com o registro de nome ‘Thor’ possui. Atualize a quantidade de
//gatos de ‘5’ para ‘7’;
db.herois.update({"nome" : "Thor"}, {$set:{"quantidadeGatos": 7}})

//14. Atualize o registro da Mulher Maravilha para capa = true;
db.herois.update({"nome" : "Mulher Maravilha"}, {$set:{"usaCapa": true}})

//15.	Selecione todos os registros que foram trabalhados e exporte para um arquivo JSON.