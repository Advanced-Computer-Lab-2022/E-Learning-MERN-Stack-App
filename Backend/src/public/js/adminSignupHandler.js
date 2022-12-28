adminFnameInput = document.getElementById('adminFnameInput');
adminLnameInput = document.getElementById('adminLnameInput');
adminUpEmailInput = document.getElementById('adminUpEmailInput');
adminUpPasswordInput = document.getElementById('adminUpPasswordInput');
adminUpGenderInput = document.getElementById('adminUpGenderInput');

adminSignupBtn = document.getElementById('adminSignup');
adminSignupBtn.addEventListener('click', async function (e) {
    e.preventDefault();
    const res = await fetch('/api/admin/signup', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            firstName: adminFnameInput.value,
            lastName: adminLnameInput.value,
            email: adminUpEmailInput.value,
            password: adminUpPasswordInput.value,
            gender: adminUpGenderInput.value,
        })
    })
})