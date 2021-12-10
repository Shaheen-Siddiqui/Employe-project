    // topics covering
    // using filter here to filter the name user is asking
    // and includes too
    // using tolowercase()
    // desturcturizing an object

var employeesList=[
    {
        name:"shikha rawat",
        id:1,
        state:"Andhra Pradesh",
        city:"Bangalore",
        level:1
    },
    {
        name:"rohit roy",
        id:2, state:"Delhi",
        city:"Utter pradesh",level:1
    },
    {
        name:"Abhishek yadav",
        id:3, state:"Mumbai",
        city:"Muzafferpur",level:2
    }
]

function getInputData() {

    const input1=document.getElementById("input1")
    search=input1.value;
    allocations(search)
    }

function allocations(search){
    let newTagTr=""
    const listOfData= document.getElementById("listOfData")
    const input1=document.getElementById("input1")
    document.getElementById("listOfData").style.width = "80%"
    document.getElementById("listOfData").style.height = "200px"
    document.getElementById("listOfData").style.border = "2px solid black"
    listOfData.style.fontWeight="bold"
    listOfData.style.fontSize="20px"

    newTagTr+= `
                <tr align='center'class="table-header">
                    <td>Name.

                    </td>
                    <td>State</td>
                    <td>City</td>
                    <td>See Salary</td>
                </tr>
                😀


             `
    employeesList.filter((element) => {
        const { name } = element; // desturcturizing an object
        if (name.toLowerCase().includes(search.toLowerCase())){

                

            newTagTr+= `
                <tr align='center'class="table-body">
                    <td>${element.name}</td>
                    <td>${element.state}</td>
                    <td>${element.city}</td>
                    <td>
                        <button class='button' onclick="showSalary(${element.level})">Show Salary</button>
                    </td>
                </tr>
             `
         
        }
        });
     listOfData.innerHTML=newTagTr
    input1.value="";
    const title=document.getElementById("title")
    // title.innerHTML=`These many ${search}'s are there in the company`
    title.innerHTML=`Searched results`
}

// create an arrow function
const showSalary = (level) => {
    switch (level){
        case 1:
            alert(`His salry is 1 lakh per annum`);
            break;
        case 2:
            alert(`His salry is 2 lakh per annum`);
            break;
    }

}
//==============================================================================//


// var employeesList=[
//     {
//         name:"shikha rawat",
//         id:1,
//         state:"Andhra Pradesh",
//         city:"Bangalore",
//         level:1
//     },
//     {
//         name:"Anshika Mhatma",
//         id:3, state:"bhagalpuri",
//         city:"patna",level:3
//     },
//     {
//         name:"Rohit roy",
//         id:2, state:"Delhi",
//         city:"Utter pradesh",level:1
//     },
//     {
//         name:"bhishek yadav",
//         id:3, state:"Mumbai",
//         city:"Mharastra",level:2
//     }
// ]


// function getInputData() {
//     input1=document.getElementById("input1")
//     search=input1.value
    
// showListOfData(search)
    
// }
// function showListOfData(search) {
    
//     document.getElementById("listOfData").style.border="5px groove darkgreen";
//     input1=document.getElementById("input1")
//     document.getElementById("listOfData").style.height="200px"
//     document.getElementById("listOfData").style.width="900px"
//     document.getElementById("listOfData").style.fontSize="29px"
//     document.getElementById("listOfData").style.textAlign="center"
//     tr=""
//     tr+=`
//                     <tr>
//                       <td>name</td>
//                       <td>state</td>
//                       <td>city</td>
//                       <td>Selery</td>
//                       </tr>`
      
            
// employeesList.filter(function (element) {
//     const {name}=element
    
    
//      if (name.toLowerCase().includes(search.toLowerCase())){
//         tr=""
        
//     tr+=`
//     <tr>
//       <td>${element.name}</td>
//       <td>${element.state}</td>
//       <td>${element.city}l</td>
//       <td>
//       <button onclick="seeSELERY(${element.level})">Selery </button>
//       </td>
//       </tr>`


//     }
    
// })  
          
// listOfData.innerHTML=tr    
// input1.value=""

// }
// seeSELERY=(level)=> {
//     switch (level) {
//         case 1:
//             alert('one lakh per year')
//             break;
//         case 2 :
//             alert('two lakh per year')
//             break;
//         case 3 :
//             alert('two lakh per year')
//         default:
//             break;
//     }
// }

                
            
    















































