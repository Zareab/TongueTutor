// Dummy data
const a = [
    { course: "Portuguese", score: "5/6", comment: "Excellent Job", grades: "A" },
    { course: "Mandarin", score: "3/5", comment: "Well done but still scope of improvement.", grades: "B" },
    { course: "Spanish", score: "4/5", comment: "Well done!", grades: "B" },

  
    // Add more dummy data as needed
];

  
  // Function to populate the table with dummy data
  function populateTable() {
    const tableBody = document.querySelector(".course-list tbody");
    a.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.course}</td>
        <td>${item.score}</td>
        <td>${item.comment}</td>
        <td>${item.grades}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Call the function to populate the table when the document is loaded
  document.addEventListener("DOMContentLoaded", () => {
    populateTable();
  });
