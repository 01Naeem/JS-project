async function dataShow() {
    let api = "http://localhost:3000/car";
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
  </tr>`;

    const myObj = await fetch(api);
    //console.log(myObj);
    const Data = await myObj.json();
    console.log(Data);
    Data.map((item) => {
        Table += `<tr>
                         <td> ${item.Name} </td>
                         <td> ${item.Phone} </td>
                         <td> ${item.Email} </td>
                         <td> ${item.PickUpDate} </td>
                         <td> ${item.PickUpTime} </td>
                         <td> ${item.DropDate} </td>
                         <td> ${item.DropTime} </td>
                         <td> ${item.LicenceNumber} </td>
                         <td> ${item.CarAvailable} </td>
                       </tr> `
    })
    Table += `</table>`;
    document.getElementById("demo").innerHTML = Table;
}

    dataShow();


    // let Table1 = "<table border='1'><tr><th>Rollno</th><th>Name</th><th>City</th><th>Fees</th></tr>";
    // fetch(api).then((res) => {
    //     // console.log(res);
    //     return res.json()
    // }).then((Data) => {


    //     Data.map((item) => {
    //         Table1 += `<tr>
    //                      <td> ${item.rollno} </td>
    //                      <td> ${item.name} </td>
    //                      <td> ${item.city} </td>
    //                      <td> ${item.fees} </td>
    //                    </tr> `
    //     })

    //     Table1 += `</table>`;
    //     document.getElementById("demo1").innerHTML = Table1;
    //     console.log(Data);
    // }).catch((err) => {
    //     console.log(err);
    // });