addCompanyName = document.getElementById('addCompanyName');
addCompanyDomain = document.getElementById('addCompanyDomain');
addCompanyPassword = document.getElementById('addCompanyPassword');
addCompanyBtn = document.getElementById('addCompany');

addCompanyBtn.addEventListener('click', async function (e) {
    e.preventDefault();
    const res = await fetch('/api/admin/addCompany', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            name: addCompanyName.value,
            email: addCompanyDomain.value,
            password: addCompanyPassword.value
        })
    })

})  