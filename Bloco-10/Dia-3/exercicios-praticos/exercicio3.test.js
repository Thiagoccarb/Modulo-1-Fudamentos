const service = require('./exercicio3');

test("Testa chamada, retorno e parâmetros passados para soma com entrada de dois valores", () => {
  const mockSomar = jest.spyOn(service, "somar");
  mockSomar.mockResolvedValue(5);

  mockSomar(2, 3);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(2, 3);
  expect(mockSomar(7, 3)).resolves.toBe(5);
});