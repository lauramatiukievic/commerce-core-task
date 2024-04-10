import {render, screen, fireEvent, waitFor  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import ApiUtils from "./lib/api-utils";
import Payments from "./components/payments/payments"; 
jest.mock("./lib/api-utils");

describe("App", () => {
  const mockCountriesData = [
    { name: { common: "Country A" }, subregion: "Subregion A" },
    { name: { common: "Country B" }, subregion: "Subregion B" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    ApiUtils.getCountriesData.mockResolvedValue(mockCountriesData);
  });

  test("fetches countries and regions on component mount", async () => {
    render(<App />);
    expect(ApiUtils.getCountriesData).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      mockCountriesData.forEach(country => {
        expect(screen.getByText(country.name.common)).toBeInTheDocument();
      });
    });
  });
});

describe("Payments", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      ApiUtils.submitOrder.mockResolvedValue();
    });
  
    test("submits order successfully", async () => {
      render(<Payments countries={[{ name: { common: "Country A" } }]} regions={[{ subregion: "Subregion A" }]} />);

      userEvent.type(screen.getByPlaceholderText("First name*"), "John");
      userEvent.type(screen.getByPlaceholderText("Last name*"), "Doe");
      userEvent.type(screen.getByPlaceholderText("Address*"), "123 Main St");
      userEvent.selectOptions(screen.getByTestId('country'), "Country A");
      userEvent.selectOptions(screen.getByTestId('region'), "Subregion A");
      userEvent.type(screen.getByPlaceholderText("Postal code*"), "12345");

      fireEvent.click(screen.getByText("COMPLETE ORDER"));
 
      await waitFor(() => {
        expect(ApiUtils.submitOrder).toHaveBeenCalledWith(expect.objectContaining({
          name: "John",
          lastName: "Doe",
          address: "123 Main St",
          country: "Country A",
          region: "Subregion A",
          postalCode: "12345",
        }));
      });
    });
  });