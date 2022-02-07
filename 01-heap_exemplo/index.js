//exemplo de estouro de memoria - JavaScript heap out of memory
const items = [];
while(true) items.push(items);

//rodar com esse codigo:
//node --max-old-space-size=64 index.js