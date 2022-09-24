fetch(
    'https://sheets.googleapis.com/v4/spreadsheets/1mXGnxpDCp_bTnma_6yLzX8Q69kTA2mbn4pQGs5Ce_y4?includeGridData=true&key=AIzaSyDlQMJFTSXTJJ71J4jyVa41bchoN-8cTcE')
    .then(function(response) {
      return response.json();
    })
    .then(function(obj) {
      inflate2(obj.sheets[3].data[0].rowData);
    })
    .catch(function(error) {
      console.log(error);
    });

function inflate2(array) {
  var code = '';
  array.forEach((item, index) => {
    var color;
    if (item.values[4].formattedValue == 'bleu')
      color = 'team_member';
    else if (item.values[4].formattedValue == 'vert')
      color = 'team_member alt';
    else
      color = 'team_member alt2';

    code += `
                <div class="${color}">
                    <div class="team_img">
                        <img src="images/staff/${
        item.values[3].formattedValue}" alt="Team_image">
                    </div>
                    <h3>${item.values[0].formattedValue}</h3>
                    <p class="role">${item.values[1].formattedValue}</p>
                    <p>${item.values[2].formattedValue}</p>
                </div>
            `
  });

  document.getElementById('staffMembers').innerHTML = code;
}