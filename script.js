/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((obj) => {
  if(obj.profession === "developer"){
      console.log(obj);
    }
  });
  
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach ((obj) => {
  if(obj.profession === "developer"){
      console.log(obj);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = {
    id:4,
    name:"susan",
    age:"20",
    profession:"intern"
  };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter((obj) => {
    if(obj.profession !== "admin"){
      console.log(obj);
    }
  });
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "jagan", age: "29", profession: "designer" },
    { id: 6, name: "harinath", age: "27", profession: "manager" },
    { id: 7, name: "karuna", age: "23", profession: "data_analyst" },
  ];

  const newArr = arr.concat(arr2);
  console.log(newArr);
}
