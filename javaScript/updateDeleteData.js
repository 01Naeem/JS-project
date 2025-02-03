function updateData(id) {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let pickUpDate = document.getElementById('pickUpDate').value;
    let pickUpTime = document.getElementById('pickUpTime').value;
    let dropDate = document.getElementById('dropDate').value;
    let dropTime = document.getElementById('dropTime').value;
    let licence = document.getElementById('licence').value;
    let carModel = document.getElementById('carModel').value;

    let api = `http://localhost:3000/car/${id}`;

    fetch(api, {
        method: 'PUT',
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
    })
    .then(res => res.json())
    .then(() => alert("Data updated successfully!"))
    .catch(error => console.error("Error updating data:", error));
}

function myDel(id) {
    let api = `http://localhost:3000/car/${id}`;
    fetch(api, { method: 'DELETE' })
        .then(() => alert("Record Deleted!!!"))
        .catch(error => console.error("Error deleting record:", error));
}

async function myEdit(id) {
    let api = `http://localhost:3000/car/${id}`;

    try {
        const response = await fetch(api);
        const MyData = await response.json();

        document.getElementById("demo1").innerHTML = `
            <div class="bookYourCar">
                <div class="information">
                    <label for="name">Name:</label><br>
                    <input type="text" id="name" value="${MyData.Name}" required>
                </div>
                <div class="information">
                    <label for="phone">Phone:</label><br>
                    <input type="number" id="phone" value="${MyData.Phone}" required>
                </div>
                <div class="information">
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" value="${MyData.Email}" required>
                </div>
                <div class="information">
                    <label for="pickUpDate">Pick Up Date:</label><br>
                    <input type="date" id="pickUpDate" value="${MyData.PickUpDate}" required>
                </div>
                <div class="information">
                    <label for="pickUpTime">Pick Up Time:</label><br>
                    <input type="time" id="pickUpTime" value="${MyData.PickUpTime}" required>
                </div>
                <div class="information">
                    <label for="dropDate">Drop Date:</label><br>
                    <input type="date" id="dropDate" value="${MyData.DropDate}" required>
                </div>
                <div class="information">
                    <label for="dropTime">Drop Time:</label><br>
                    <input type="time" id="dropTime" value="${MyData.DropTime}" required>
                </div>
                <div class="information">
                    <label for="licence">Licence Number:</label><br>
                    <input type="text" id="licence" value="${MyData.LicenceNumber}" required>
                </div>
                <div class="information">
                    <label for="carModel">Car Available:</label><br>
                    <select id="carModel">
                        <option value="${MyData.CarAvailable}">${MyData.CarAvailable}</option>
                        <option value="Audi Q3">Audi Q3</option>
                        <option value="Mercedes-Benz S-Class">Mercedes-Benz S-Class</option>
                        <option value="BMW 3 Series">BMW 3 Series</option>
                        <option value="ScorpioN">ScorpioN</option>
                        <option value="Toyota Corolla">Toyota Corolla</option>
                        <option value="Honda CR-V">Honda CR-V</option>
                        <option value="Hyundai i20">Hyundai i20</option>
                        <option value="Hyundai Creta">Hyundai Creta</option>
                        <option value="Maruti Ertiga">Maruti Ertiga</option>
                        <option value="Suzuki Swift Hatchback">Suzuki Swift Hatchback</option>
                    </select>
                </div>
            </div>
            <button onclick="updateData(${MyData.id})">Update Data</button>
        `;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function dataShow() {
    let api = "http://localhost:3000/car";

    try {
        const response = await fetch(api);
        const Data = await response.json();

        let Table = `<table id='table'>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>PickUpDate</th>
                <th>PickUpTime</th>
                <th>DropDate</th>
                <th>DropTime</th>
                <th>LicenceNumber</th>
                <th>CarAvailable</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>`;

        Data.forEach(key => {
            Table += `<tr>
                <td>${key.Name}</td>
                <td>${key.Phone}</td>
                <td>${key.Email}</td>
                <td>${key.PickUpDate}</td>
                <td>${key.PickUpTime}</td>
                <td>${key.DropDate}</td>
                <td>${key.DropTime}</td>
                <td>${key.LicenceNumber}</td>
                <td>${key.CarAvailable}</td>
                <td>
                    <a href="#" onclick="myDel(${key.id})"><img src="/images/bin.png" width="25"></a>
                </td>
                <td>
                    <a href="#" onclick="myEdit(${key.id})"><img src="/images/updated.png" width="28"></a>
                </td>
            </tr>`;
        });

        Table += "</table>";
        document.getElementById("demo").innerHTML = Table;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

dataShow();
