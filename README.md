<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Econet</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <header>
        <h1>Econet</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Publications</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="indicators">
            <h2>Major Economic Indicators</h2>
            <ul>
                <li>GDP: $XX trillion</li>
                <li>Inflation Rate: X%</li>
                <li>Unemployment Rate: X%</li>
                <li>Interest Rates: X%</li>
                <li>Exchange Rates: $1 = NPR XX</li>
                <li>Fiscal Deficit/Surplus: $XX billion</li>
                <li>Trade Balance: $XX billion</li>
                <li>FDI: $XX billion</li>
                <li>Public Debt: $XX trillion</li>
                <li>Consumer Confidence Index: XX</li>
            </ul>
        </section>
        <section id="latest-research">
            <h2>Latest Research</h2>
            <ul>
                <li><a href="#">Research Title 1</a></li>
                <li><a href="#">Research Title 2</a></li>
                <li><a href="#">Research Title 3</a></li>
            </ul>
        </section>
        <section id="interactive-features">
            <h2>Interactive Features</h2>
            <canvas id="chart1"></canvas>
            <canvas id="chart2"></canvas>
            <canvas id="chart3"></canvas>
        </section>
    </main>
    <footer>
        <p>© 2024 Econet | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
    </footer>
    <script>
        const ctx1 = document.getElementById('chart1').getContext('2d');
        const chart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'GDP Growth',
                    data: [3, 2, 1, 4, 5, 6],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const ctx2 = document.getElementById('chart2').getContext('2d');
        const chart2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Inflation Rate',
                    data: [2, 3, 4, 5, 6, 7],
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const ctx3 = document.getElementById('chart3').getContext('2d');
        const chart3 = new Chart(ctx3, {
            type: 'pie',
            data: {
                labels: ['Sector 1', 'Sector 2', 'Sector 3', 'Sector 4'],
                datasets: [{
                    label: 'Sector Distribution',
                    data: [10, 20, 30, 40],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true
            }
        });
    </script>
</body>
</html>
