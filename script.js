document.getElementById('sendForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;
    const messageDiv = document.getElementById('message');

    // Placeholder for sending USDT logic
    try {
        // Here you would implement the blockchain transaction
        // For example: await sendUSDT(recipient, amount);

        messageDiv.textContent = `Successfully sent ${amount} USDT to ${recipient}!`;
        messageDiv.style.color = 'green';
    } catch (error) {
        messageDiv.textContent = 'Transaction failed!';
        messageDiv.style.color = 'red';
    }
});
