const LoadSomatorio = require("../funcoes/Somatório");

//Contagem deve passar uma String, contendo inteiros separados por virgulas.
test("Esperado: 6", () => {
  expect(LoadSomatorio("3,2,1")).toMatchObject([6])
})

test("Esperado: 15", () => {
  expect(LoadSomatorio("1,2,3,3,5,1")).toMatchObject([15])
})
