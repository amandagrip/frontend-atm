import { render, screen, fireEvent } from "@testing-library/react";
import Balance from "./Balance";

test("visa saldo samt sínsättning av pengar", () => {
    render(<Balance />);

    expect(screen.getByText("Ditt saldo är: 0.00 kr")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Kolla saldo"));

    expect(screen.getByText("Ditt saldo är: 1500.00 kr")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Sätt in belopp"), {
        target: { value: "1000"},
    });

    fireEvent.click(screen.getByText("Sätt in pengar"));
})