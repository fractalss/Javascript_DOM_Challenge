// from data.js
var tableData = data;

// Data for the third entry
thirdEntry =  {
    datetime: "1/28/1996",
    city: "dallas",
    state: "tx",
    country: "us",
    shape: "star",
    durationMinutes: "5 mins.",
    comments: "Cowboys win a superbowl, that's alien!."
    };

// Pushing it in the overall data set in data.js  
    tableData.splice(2, 0,thirdEntry);
    console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");
// Populating the table 
tableData.forEach((alienData) => {

    var row = tbody.append("tr");
  
    Object.values(alienData).forEach((value) => {
  
      row.append("td").text(value);
  
    });
  });  
  

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
// Get the value property of the input element
var selectedTime = d3.select("#datetime").property("value");
console.log(`Date: ${selectedTime}`);
var selectedCountry = d3.select("#countryName").property("value");
console.log(`Country: ${selectedCountry}`);
var selectedState = d3.select("#stateName").property("value");
console.log(`State: ${selectedState}`);
var selectedCity = d3.select("#cityName").property("value");
console.log(`City: ${selectedCity}`);
var selectedShape = d3.select("#shapeName").property("value");
console.log(`Shape: ${selectedShape}`);

    // Filter reports

    if (selectedTime) {
     var filteredData =  filterData('datetime',selectedTime)
    }
    if (selectedCountry) {
    var filteredData  =  filterData('country',selectedCountry)
    }
    if (selectedState) {
    var filteredData  =  filterData('state',selectedState)
    }
    if (selectedCity) {
    var filteredData  =  filterData('city',selectedCity)
    }
    if (selectedShape) {
    var filteredData  =  filterData('shape',selectedShape)
    };
    // Define filter function
    function filterData(key, selectedValue) {
        var filteredData = tableData.filter(tableData => tableData[key]=== selectedValue);
        return filteredData
    }

// Getting the table element from html
var table1 = document.getElementById("ufo-table");
var tbodyNew = d3.select("tbody");
// Deleting the rows of initial data set
 for(var i = 1;i<table1.rows.length;){
   table1.deleteRow(i);
}
// Populating a new table with the filtered data set
filteredData.forEach((filterAlienData) => {
   
    var row = tbodyNew.append("tr");
  
    Object.values(filterAlienData).forEach((value) => {
  
      row.append("td").text(value);
  
    });
  });

  console.log(filteredData);
});

 