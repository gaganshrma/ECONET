document.addEventListener("DOMContentLoaded", () => {
  const gdpCard = document.getElementById("gdp-card");
  const inflationCard = document.getElementById("inflation-card");
  const unemploymentCard = document.getElementById("unemployment-card");

  // Fetch Data (Example: Fake API)
  axios.get("https://api.example.com/macro-data")
    .then(response => {
      const data = response.data;
      gdpCard.textContent = `GDP Growth: ${data.gdp}%`;
      inflationCard.textContent = `Inflation: ${data.inflation}%`;
      unemploymentCard.textContent = `Unemployment: ${data.unemployment}%`;
    })
    .catch(error => console.error("Error fetching data:", error));

  // Visualization Example
  const ctx = document.getElementById("chartContainer").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [{
        label: "GDP Growth",
        data: [2.1, 2.3, 1.8, 2.5],
        borderColor: "blue",
        fill: false
      }]
    },
    options: {
      responsive: true
    }
  });
});
