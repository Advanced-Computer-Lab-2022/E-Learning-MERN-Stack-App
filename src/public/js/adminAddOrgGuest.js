addOrgGuestEmail = document.getElementById('addOrgGuestEmail');
addOrgGuestPassword = document.getElementById('addOrgGuestPassword');
addOrgGuestFirstName = document.getElementById('addOrgGuestFirstName');
addOrgGuestLastName = document.getElementById('addOrgGuestLastName');
addOrgGuestCompany = document.getElementById('addOrgGuestCompany');
addOrgGuestBtn = document.getElementById('addOrgGuest');

addOrgGuestBtn.addEventListener('click', async function (e) {
    e.preventDefault()
    const res = await fetch('/api/admin/addOrgGuest', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            email: addOrgGuestEmail.value,
            password: addOrgGuestPassword.value,
            firstName: addOrgGuestFirstName.value,
            lastName: addOrgGuestLastName.value,
            company: addOrgGuestCompany.value
        })
    })
})

