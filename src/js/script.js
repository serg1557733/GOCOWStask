fetch("js/data.json")
  .then(function (response) {
    return response;
  })
  .then(function (data) {
    return data.json();
  })
  .then(function (Normal) {
    const html = Normal.map(
      (data) => ` 
        <tr>
            <td>${data.Ticker}</td>
            <td>${data.name}</td>
            <td>${data.SCTR}</td>
        </tr>`
    );
    document.getElementById("data").innerHTML = html;
  })
  .catch(function (err) {
    console.log("Fetch problem show: " + err.message);
  });
