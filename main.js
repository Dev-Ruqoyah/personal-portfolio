
document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggleButton");
  var itemList = document.querySelector(".item-list");

  toggleButton.addEventListener("click", function () {
    // Toggle the visibility of the list on small screens
    if (window.innerWidth <= 1024) {
      itemList.style.display =
        itemList.style.display === "none" || itemList.style.display === ""
          ? "block"
          : "none";
          if(itemList.style.display === "block"){
            itemList.style.display = "flex"
            itemList.style.gap = "20px"

          }
    } else {
      // Hide the list on big screens
      itemList.style.display = "none";
    }
  });
})

function toggleSection(sectionId) {
  // Hide all sections
  var allSections = document.querySelectorAll('section');
  allSections.forEach(function(section) {
    section.classList.add("hidden");
    
   
  });
 
  // Show the selected section
  var selectedSection = document.getElementById(sectionId);
  selectedSection.classList.remove("hidden");
}

console.log(section1);
console.log(allSections);