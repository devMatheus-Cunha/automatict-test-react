import { Dropdown } from "./index";

import { screen, render, userEvent } from "../../tests";

const title = "Selecione uma opção";
const options = ["Minas Gerais", "São Paulo", "Rio de Janeiro"];
describe("Dropdown", () => {
  it("should start closed", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });
});
