guestSigninBtn = document.getElementById('guestSignin');
guestEmailInput = document.getElementById('guestEmailInput');
guestPasswordInput = document.getElementById('guestPasswordInput');

guestSigninBtn.addEventListener('click', async function (e) {
    e.preventDefault()
    const res = await fetch('/api/guest/signin', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            email: guestEmailInput.value,
            password: guestPasswordInput.value
        })
    })
})