const choice = [];
const amount = [];

function readFormData() {
    const formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["Amount"] = document.getElementById("Amount").value;
    formData["Address"] = document.getElementById("Address").value;
    return formData;
}

function luckyStore(){
    const d = readFormData();
    choice.push(d.Name);
    amount.push(d.Amount);
    document.getElementById("Name").value="";
    document.getElementById("Amount").value="";
    document.getElementById("Address").value="";
}

$(document).ready(function () {
    const t = $('#record').DataTable();
 
    $('#addRow').on('click', function () {
        const data = readFormData();
        t.row.add([data.Name,data.Amount,data.Address]).draw(false);   
    });
 
    // Automatically add a first row of data
    $('#addRow').click();
});

function totalPrizeMoney(){
    let total=0;
    for(let i=0; i<amount.length; i++){
        total = total + Number(amount[i]);
    }
    return total;
}


function lucky(){
    const total = totalPrizeMoney();
    const index_no = Math.floor(Math.random() * choice.length);
    const p = document.createElement('p');
    const prize = document.getElementById('prizeMoney');
    p.textContent = choice[index_no];
    $("#win").empty().append(p);
    prize.innerText = "PrizeMoney: " + total + " Cash";
    const element = document.getElementById("random_");
    element.onclick = "";
}
   

