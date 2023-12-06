/************************************************************
 * Objetivo: Trazer informações sobre os produtos da pizzara.
 * Data: 22/11/2023
 * Autor: Pedro Henrique Inocente
 * Versão: 1.0
 ***********************************************************/


// Importando o JSON de produtos
var produtos = require('./produtos')
const produtosJson = produtos.produtos

//Criar uma função (getListaPizzas) que retorna a lista de todas as pizzas


const getListaPizzas = function () {
  let todasPizzas = produtosJson.favoritas.slice();
  todasPizzas.push.apply(todasPizzas, produtosJson.Recomendados);
  
  let listaPizzas = [];
  let status = false;

  for (let i = 0; i < todasPizzas.length; i++) {
    let pizza = todasPizzas[i];
    let pizzaInfo = {
      namePizza: pizza.namePizza,
      price: pizza.price
    };

    listaPizzas.push(pizzaInfo);
    status = true;
  }

  let resultado = {
    pizzas: listaPizzas,
    quantidade: listaPizzas.length
  };

  if (status) {
    return resultado;
  } else {
    return false;
  }
};

// Chamada da função
console.log(getListaPizzas());


  