import React, { useState } from "react";

function Balance() {
    const [balance, setBalance] = useState(0);
    const [depositAmount, setDepositAmount] = useState("");

    const checkBalance = () => {
        setBalance(1500);
    }

    const handleDeposit = () => {
        const amount = parseFloat(depositAmount);
        if (!isNaN(amount) && amount > 0) {
            setBalance(balance + amount);
            setDepositAmount("")
        }
    }

    return {
        <div>
        <button onClick={checkBalance}>Kolla saldo</button>
        <p>Ditt saldo: {balance} kr</p>
    }
}