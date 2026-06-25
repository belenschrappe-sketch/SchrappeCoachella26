function startCheckout() {
    const checkout = document.querySelector(".checkout");
    checkout.classList.add("active");
    goToStep(1);
}

function goToStep(step) {
    const steps = document.querySelectorAll(".checkout-step");
    steps.forEach(s => s.classList.remove("active"));

    const target =
        typeof step === "number"
            ? document.getElementById("step" + step)
            : document.getElementById(step);

    if (target) {
        target.classList.add("active");
        target.scrollIntoView({ behavior: "smooth" });
    }
}

function finishPurchase() {
    goToStep("confirmation");
}

function goHome() {
    window.location.href = "index.html";
}