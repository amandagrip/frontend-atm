import React, { useState } from "react";

function Balance() {
    const [balance, setBalance] = useState(0);
    const [depositAmount, setDepositAmount] = useState("");

    const checkBalance = () => {
        setBalance(1500.00);
    }

    const handleDeposit = () => {
        const amount = parseFloat(depositAmount);
        if (!isNaN(amount) && amount > 0.00) {
            setBalance(balance + amount);
            setDepositAmount("")
        }
    }

    return (
        <div>
        <button onClick={checkBalance}>Kolla saldo</button>
        <p>Ditt saldo: {balance} kr</p>

        <input
        type="number"
        placeholder="Ange insättningsbelopp"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button onClick={handleDeposit}>Sätt in pengar</button>
        </div>
    )
}

export default Balance; 