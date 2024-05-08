const LoadPrimo = require("../funcoes/Nprimo")

// Coloque apenas um inteiro, para receber se o número é ou não primo.
test("Esperado: É primo", () => {
  expect(LoadPrimo(7)).toMatchObject(["É primo"])
})

test("Esperado: Não é primo", () => {
  expect(LoadPrimo(4)).toMatchObject(["Não é primo"])
})