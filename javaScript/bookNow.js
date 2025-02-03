document.getElementById("bookNow").addEventListener("click", insertData);

async function insertData() { 
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let pickUpDate = document.getElementById('pickUpDate').value;
    let pickUpTime = document.getElementById('pickUpTime').value;
    let dropDate = document.getElementById('dropDate').value;
    let dropTime = document.getElementById('dropTime').value;
    let licence = document.getElementById('licence').value;
    let carModel = document.getElementById('carModel').value;  // Get selected car model value

    let api = "http://localhost:3000/car";

    const response = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            "Name": name,
            "Phone": phone,
            "Email": email,
            "PickUpDate": pickUpDate,
            "PickUpTime": pickUpTime,
            "DropDate": dropDate,
            "DropTime": dropTime,
            "LicenceNumber": licence,
            "CarAvailable": carModel
        })
    });

    if (response.ok) {
        alert("Data Saved Successfully");
    } else {
        alert("Error saving data. Please try again.");
    }
}
