const LoadMDC = require("../funcoes/MDC");

// Duas entradas, retorno é o MDC das duas.
test("MDC do A e B, retorno: 10", () => {
  expect(LoadMDC(10,20)).toMatchObject([10])
})

test("MDC do A e B, retorno: 20", () => {
  expect(LoadMDC(20,40)).toMatchObject([20])
})