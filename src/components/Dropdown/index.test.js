import { Dropdown } from "./index";

import { screen, render, userEvent } from "../../tests";

const title = "Selecione uma opção";
const options = ["Minas Gerais", "São Paulo", "Rio de Janeiro"];
describe("Dropdown", () => {
  //! I am checking if the dropdown is closed, checking if the dropdown options when loading the screen are apparent
  it("should start closed", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });

  //! I want to test if the dropdown will show menu options when it is clicked
  it("should sho options when open", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    // checks that you don't have these values on the screen
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();

    //find the button and its click
    userEvent.click(
      screen.getByRole("button", {
        name: title,
      })
    );

    // checks that you  have these values on the screen
    expect(
      screen.getByRole("menuitem", {
        name: options[0],
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", {
        name: options[1],
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", {
        name: options[2],
      })
    ).toBeInTheDocument();
  });

  //! I want that when I select a menu item it closes the dropwdawn and indicates which option was chosen
  it("should signal an option was selected and close the dropdown", () => {
    // function mock
    const onSelect = jest.fn()

    render(<Dropdown title={title} options={options} onSelect={onSelect} />);

    //find the button and its click
    userEvent.click(
      screen.getByRole("button", {
        name: title,
      })
    );

    // checks that you  have these values on the screen
    expect(
      screen.getByRole("menuitem", {
        name: options[0],
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", {
        name: options[1],
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", {
        name: options[2],
      })
    ).toBeInTheDocument();

    userEvent.click(screen.getByRole("menuitem", {name: options[1]}))

    // step to function which option is being selected
    expect(onSelect).toHaveBeenCalledWith(options[1])

    // checks that you don't have these values on the screen
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });
});
