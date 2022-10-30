adminEmailInput = document.getElementById('adminEmailInput')
adminPasswordInput = document.getElementById('adminPasswordInput')
adminSigninBtn = document.getElementById('adminSignin')

adminSigninBtn.addEventListener('click', async function (e) {
    e.preventDefault();
    const res = await fetch('/api/admin/signin', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            email: adminEmailInput.value,
            password: adminPasswordInput.value
        })
    })
})