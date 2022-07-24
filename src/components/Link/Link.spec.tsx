import { render } from "@testing-library/react";
import { Link } from ".";

describe("Link component", () => {
  it("renders correctly ", () => {
    const { debug, getByText } = render(
      <Link icon="instagram" href="/" text="Visite meu" />
    );

    expect(getByText("Visite meu")).toBeInTheDocument();
  });
});
