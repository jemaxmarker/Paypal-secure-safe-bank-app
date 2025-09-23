// Load admin settings from localStorage
const premiumAmount = localStorage.getItem('premiumAmount') || 0;
const voiceAmount = localStorage.getItem('voiceAmount') || 0;
const humanEscalation = localStorage.getItem('humanEscalation') || 0;
const urgencyFee = localStorage.getItem('urgencyFee') || 0;
const currency = localStorage.getItem('currency') || '₦';

// Example: display premium prompt after 15 messages
let totalMessages = 0;

function incrementMessages() {
  totalMessages++;
  if (totalMessages >= 15) {
    showPremiumPrompt();
  }
}

function showPremiumPrompt() {
  const premiumDiv = document.createElement('div');
  premiumDiv.classList.add('premium-popup');
  premiumDiv.innerHTML = `
    <p>You’ve reached the free message limit.</p>
    <p>Upgrade to Premium for more messages:</p>
    <ul>
      <li>Premium amount: ${currency}${premiumAmount}</li>
      <li>Voice call: ${currency}${voiceAmount}</li>
      <li>Human escalation: ${currency}${humanEscalation}</li>
      <li>Urgency: ${currency}${urgencyFee}</li>
    </ul>
    <button onclick="closePremiumPopup()">Upgrade Now</button>
  `;
  document.body.appendChild(premiumDiv);
}

function closePremiumPopup() {
  document.querySelector('.premium-popup').remove();
}

// Call incrementMessages() each time user sends a message
