import { render } from "@testing-library/react";
import { Toast } from ".";

jest.mock("../../hooks/useToast", () => {
  return {
    useToast() {
      return {
        toast: {
          state: "success",
          message: "Sucesso",
        },
        isVisible: true,
      };
    },
  };
});

describe("Header component", () => {
  it("renders correctly ", () => {
    const { getByText } = render(<Toast />);
    expect(getByText("Sucesso")).toBeInTheDocument();
  });

  it("get className Success ", () => {
    const { container } = render(<Toast />);
    expect(container.getElementsByClassName("success").length).toBe(1);
  });
});
