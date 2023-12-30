function checkPassword() {
    const password = "1277";  
    let userPassword = prompt("Please enter the password to access this page:");

    if (userPassword === password) {
        document.getElementById('content').classList.remove('hidden');
    } else {
        document.body.innerHTML = 'Access Denied';
    }
}

function incrementCoffee() {
    let coffeeDrankInput = document.getElementById("coffee_drank");
    coffeeDrankInput.value = parseInt(coffeeDrankInput.value) + 1;
}

function updateInformation() {
    let customerInfo = {
        coffeeDrank: document.getElementById("coffee_drank").value,
        amountOwed: document.getElementById("amount_owed").value,
        paymentDueDate: document.getElementById("payment_due_date").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phone_number").value,
        registrationDate: document.getElementById("registration_date").value,
        contractTerminationDate: document.getElementById("contract_termination_date").value
    };

    localStorage.setItem('customerInfo_Sunny', JSON.stringify(customerInfo));
    alert('Customer information updated successfully');
}

function loadCustomerInformation() {
    let storedInfo = localStorage.getItem('customerInfo_Sunny');
    if (storedInfo) {
        let customerInfo = JSON.parse(storedInfo);

        document.getElementById("coffee_drank").value = customerInfo.coffeeDrank;
        document.getElementById("amount_owed").value = customerInfo.amountOwed;
        document.getElementById("payment_due_date").value = customerInfo.paymentDueDate;
        document.getElementById("email").value = customerInfo.email;
        document.getElementById("phone_number").value = customerInfo.phoneNumber;
        document.getElementById("registration_date").value = customerInfo.registrationDate;
        document.getElementById("contract_termination_date").value = customerInfo.contractTerminationDate;
    }
}

window.onload = function() {
    checkPassword();
    loadCustomerInformation();
};
