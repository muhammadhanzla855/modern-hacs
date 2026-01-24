 fetch('booking.html')
    .then(res => res.text())
    .then(data => document.getElementById('booking-placeholder').innerHTML = data)
    .catch(err => console.error('Error loading booking section:', err));
// ==================== LOAD FOOTER ====================
fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
});