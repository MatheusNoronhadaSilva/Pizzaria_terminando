var categoriasJson = {
   categorias: [
        {
          "id": 1,
          "nome": "Pizzas",
          "imagem": "caminho/para/imagem_pizzas.jpg"
        },
        {
          "id": 2,
          "nome": "Bebidas",
          "imagem": "caminho/para/imagem_bebidas.jpg"
        },
        {
          "id": 3,
          "nome": "Frutas",
          "imagem": "caminho/para/imagem_frutas.jpg"
        },
        {
          "id": 4,
          "nome": "Pizzas Brotinho",
          "imagem": "caminho/para/imagem_pizzas_brotinho.jpg"
        },
        {
          "id": 5,
          "nome": "Sorvetes",
          "imagem": "caminho/para/imagem_sorvetes.jpg"
        },
        {
          "id": 6,
          "nome": "Sobremesas",
          "imagem": "caminho/para/imagem_sobremesas.jpg"
        }
      ]
    }

    function getNomeCategoriaPorId(id) {
      // Procurar a categoria com o ID correspondente
      const categoriaEncontrada = categoriasJson.categorias.find(categoria => categoria.id === id);
    
      // Retornar o nome da categoria encontrada ou null se não encontrada
      return categoriaEncontrada ? categoriaEncontrada.nome : null;
    }
    
    // Exemplo de uso da função
    const categoriaIdDesejado = 2;
    const nomeCategoriaEncontrada = getNomeCategoriaPorId(categoriaIdDesejado);
    
    if (nomeCategoriaEncontrada) {
      console.log("Nome da Categoria Encontrada:", nomeCategoriaEncontrada);
    } else {
      console.log("Categoria não encontrada para o ID:", categoriaIdDesejado);
    }


    module.exports = {
        categoriasJson
      }
