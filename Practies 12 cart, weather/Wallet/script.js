// ---------variable----------
const nameInput = document.getElementById("name");
const amountIn = document.getElementById("amountIn");
const amountOut = document.getElementById("amountOut");


// ----------Storage--------
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];



// ---------------Function-----------
// add



function handleSubmit(event){
    event.preventDefault();

    let amount1 = 0
    let amount2 = 0
    let amountInValue = parseInt(amountIn.value);
    let amountOutValue = parseInt(amountOut.value);

    if (isNaN(amountInValue)) {
        amountInValue = 0;
    }
    if (isNaN(amountOutValue)) {
        amountOutValue = 0;
    }



    amount1 += amountInValue;
    amount2 += amountOutValue;




    // Add new datum
    const transaction = {
        id: Date.now(),
        name: nameInput.value,
        amountIn: amount1,
        amountOut: amount2,
    };
    transactions.push(transaction);

//     Save data
    save();
    history()

//     clear input
    document.getElementById("name").value = "";
    document.getElementById("amountIn").value = "";
    document.getElementById("amountOut").value = "";
}


// Save transactions to localStorage
function save() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// appear history list
// function history(){
// //     clear input
//     document.getElementById("name").value = "";
//     document.getElementById("amountIn").value = "";
//     document.getElementById("amountOut").value = "";
//
//     const list = document.getElementById("list");
//     list.innerHTML = "";
//     if(transactions.length>0){
//         transactions.forEach((transaction,index)=>{
//             let empty = "";
//             if(transaction.name===empty){
//                 empty += "Empty"
//             }else{
//                 empty += transaction.name
//             }
//
//
//             list.innerHTML += `
//             <tr>
//             <td>${index+1}</td>
//             <td>${empty}</td>
//             <td>${transaction.amountIn}</td>
//             <td>${transaction.amountOut}</td>
//             <td><button onclick="updateList(${index})" class="styleNone">✏️</button></td>
//             <td><button onclick="deleteList(${index})" class="styleNone">❌</button></td>
//             </tr>
//             `;
//
//         })
//     }else{
//         list.innerHTML = "Empty";
//     }
// }

function history() {
    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("amountIn").value = "";
    document.getElementById("amountOut").value = "";

    const list = document.getElementById("list");
    list.innerHTML = "";

    if (transactions.length > 0) {
        // Render rows in reverse order
        transactions.slice().reverse().forEach((transaction, index) => {
            // Date create----------------
            const milliseconds = transaction.id; // Example milliseconds from transaction id
            const date = new Date(milliseconds);

            // Get individual date components
            const day = String(date.getDate()).padStart(2, '0');
            const month = date.toLocaleString('en-us', { month: 'short' }); // 'Dec'
            const year = date.getFullYear();
            let hours = date.getHours();
            const minutes = String(date.getMinutes()).padStart(2, '0');

            // Determine AM/PM
            const ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12 || 12; // Convert 24hr to 12hr format

            // Construct the formatted string
            const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}${ampm}`;

            // Handle empty name case
            let empty = transaction.name.trim() === "" ? "Empty" : transaction.name;

            // Render the row
            list.innerHTML += `
            <tr>
                <td>${transactions.length - index}</td> 
                <td>${formattedDate}</td>
                <td>${empty}</td>
                <td>${transaction.amountIn}</td>
                <td>${transaction.amountOut}</td>             
                <td><button onclick="updateList(${transactions.length - index - 1})" class="styleNone">✏️</button></td>
                <td><button onclick="deleteList(${transactions.length - index - 1})" class="styleNone">❌</button></td>
            </tr>
            `;
        });
    } else {
        list.innerHTML = "Empty";
    }
    balance()
}



function deleteList(index){
    const confirmMess = confirm("Are you sure you want to delete?");
    if (confirmMess){
        transactions.splice(index, 1);
        save();
        history();

    }
}

function updateList(index){

    document.getElementById("name").value = transactions[index].name;
    document.getElementById('amountIn').value = transactions[index].amountIn;
    document.getElementById('amountOut').value = transactions[index].amountOut;


    document.getElementById("submit").style.cssText =  "display:none;";
     document.getElementById("update").innerHTML = `
     <button onclick="changeList(${index})" class="greenButton">Change</button>
     <button onclick="cancelUpdate()" class="redButton">Cancel</button>
     `;
}

function changeList(i){
    let amount1 = 0
    let amount2 = 0
    let amountInValue = parseInt(amountIn.value);
    let amountOutValue = parseInt(amountOut.value);

    if (isNaN(amountInValue)) {
        amountInValue = 0;
    }
    if (isNaN(amountOutValue)) {
        amountOutValue = 0;
    }



    amount1 += amountInValue;
    amount2 += amountOutValue;

    transactions[i] = {
        id: Date.now(),
        name: nameInput.value,
        amountIn: amount1,
        amountOut: amount2,
    };
    save();
    location.reload();
}

function cancelUpdate(){
    location.reload()
}

function balance(){

   if (transactions.length > 0){
       let positive = 0
       let negative = 0
       let total = 0
       transactions.forEach((transaction)=>{

           positive += transaction.amountIn;
           negative += transaction.amountOut;

       })
       total += positive - negative;
       document.getElementById("balance").innerText = `${total}`;
   }else{
       document.getElementById("balance").innerText = `0.00`;
   }

}

