const contagem = require('../funcoes/contagem')

//Contagem deve passar uma String, contendo inteiros separados por virgulas.

test("É esperado retornar 3",()=>{
  expect(contagem("1,3")).toMatchObject([3])
})

test("É esperado retornar 20",()=>{
  expect(contagem("1,5,1,4,20,9,10")).toMatchObject([20])
})