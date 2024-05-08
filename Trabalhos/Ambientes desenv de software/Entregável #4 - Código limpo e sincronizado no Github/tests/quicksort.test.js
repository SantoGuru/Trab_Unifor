const LoadQuicksort = require("../funcoes/quicksort");

//Contagem deve passar uma String, contendo inteiros separados por virgulas.
test("Esperado: 1,2,3", () => {
  expect(LoadQuicksort("3,2,1")).toMatchObject([1,2,3])
})

test("Esperado: 1,1,2,3,3,5", () => {
  expect(LoadQuicksort("1,2,3,3,5,1")).toMatchObject([1,1,2,3,3,5])
})