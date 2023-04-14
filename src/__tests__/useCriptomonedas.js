import React from "react";
import { render, screen } from "@testing-library/react";
import Formulario from "../components/Formulario";
import { MONEDAS, CRIPTOS } from "../__mocks__/criptomonedas";
import axios from "axios";
import userEvent from "@testing-library/user-event";

const mockAxios = axios;
const guardarMoneda = jest.fn();
const guardarCriptomoneda = jest.fn();

test("<useCriptomonedas/>", async () => {
  mockAxios.get = jest.fn().mockResolvedValue({ data: CRIPTOS });
  render(<Formulario guardarMoneda={guardarMoneda} guardarCriptomoneda={guardarCriptomoneda} />);

  const monedaDropdown = screen.getByTestId("select_monedas");
  expect(monedaDropdown.children.length).toEqual(MONEDAS.length + 1);

  const opciones = screen.findAllByTestId("opcion_cripto");
  expect(await opciones).toHaveLength(10);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);

  // selecciono bitcoin y dolar
  userEvent.selectOptions(screen.getByTestId("select_monedas"), "USD");
  userEvent.selectOptions(screen.getByTestId("select_criptos"), "BTC");

  userEvent.click(screen.getByTestId("submit"));

  expect(guardarMoneda).toHaveBeenCalled();
  expect(guardarCriptomoneda).toHaveBeenCalled();
});
