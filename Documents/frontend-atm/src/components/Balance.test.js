import { render, screen, fireEvent } from "@testing-library/react";
import Balance from "./Balance";

test("Visa saldo samt insättning av pengar.", () => {
    render(<Balance />);

    expect(screen.getByText("Ditt saldo: 0 kr")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Kolla saldo"));

    expect(screen.getByText("Ditt saldo: 1500 kr")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Ange insättningsbelopp"), {
        target: { value: "1000"},
    });

    fireEvent.click(screen.getByText("Sätt in pengar"));

    expect(screen.getByText("Ditt saldo: 2500 kr")).toBeInTheDocument();
});
