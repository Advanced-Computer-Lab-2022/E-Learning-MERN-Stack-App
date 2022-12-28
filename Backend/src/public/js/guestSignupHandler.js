guestFnameInput = document.getElementById('guestFnameInput');
guestLnameInput = document.getElementById('guestLnameInput');
guestUpEmailInput = document.getElementById('guestUpEmailInput');
guestUpPasswordInput = document.getElementById('guestUpPasswordInput');
guestUpGenderInput = document.getElementById('guestUpGenderInput');
guestSignup = document.getElementById('guestSignup');

guestSignup.addEventListener('click', async function (e) {
    e.preventDefault();
    const res = await fetch('/api/guest/signup', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            firstName: guestFnameInput.value,
            lastName: guestLnameInput.value,
            email: guestUpEmailInput.value,
            password: guestUpPasswordInput.value,
            gender: guestUpGenderInput.value,
        })
    })
})