// Select form elements
const adminForm = document.querySelector('form');

adminForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get values
  const premiumAmount = document.getElementById('premium-amount').value;
  const voiceAmount = document.getElementById('voice-amount').value;
  const humanEscalation = document.getElementById('human-escalation').value;
  const urgencyFee = document.getElementById('urgency-fee').value;
  const currency = document.getElementById('currency').value;

  // Save to localStorage
  localStorage.setItem('premiumAmount', premiumAmount);
  localStorage.setItem('voiceAmount', voiceAmount);
  localStorage.setItem('humanEscalation', humanEscalation);
  localStorage.setItem('urgencyFee', urgencyFee);
  localStorage.setItem('currency', currency);

  alert('Settings updated successfully!');
});
