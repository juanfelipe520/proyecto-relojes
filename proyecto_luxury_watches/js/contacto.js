const map = L.map('map').setView([40.4167, -3.70325], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; OpenStreetMap'
}).addTo(map);

L.marker([40.4167, -3.70325])
.addTo(map)
.bindPopup('Luxury Watches')
.openPopup();