// chat.js

let totalMessages = 0;
const maxMessages = 15;

// Toggle chat box visibility
function toggleChat() {
  const chatBox = document.getElementById("chat-box");
  chatBox.classList.toggle("hidden");
}

// Check if user pressed Enter
function checkEnter(e) {
  if (e.key === "Enter") sendMessage();
}

// Send a message
function sendMessage() {
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");
  const text = input.value.trim();
  if (text === "") return;

  // Limit messages
  if (totalMessages >= maxMessages) {
    showPremiumPrompt();
    input.value = "";
    return;
  }

  // Add user message
  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.textContent = text;
  messages.appendChild(userMsg);

  // Auto-bot reply (for demo)
  const botMsg = document.createElement("div");
  botMsg.className = "bot-message";
  botMsg.textContent = "This is a support reply from our team.";
  messages.appendChild(botMsg);

  totalMessages += 2; // Count both user + bot
  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}

// Show premium prompt after 15 messages
function showPremiumPrompt() {
  const messages = document.getElementById("chat-messages");
  const premiumMsg = document.createElement("div");
  premiumMsg.className = "premium-prompt";
  premiumMsg.innerHTML = `
    <strong>Upgrade to Premium</strong><br>
    Premium Amount: <span id="premium-amount">$10</span><br>
    Voice Call Fee: <span id="voice-amount">$5</span><br>
    Human Escalation: <span id="human-amount">$7</span><br>
    Urgency Fee: <span id="urgency-amount">$3</span>
  `;
  messages.appendChild(premiumMsg);
  messages.scrollTop = messages.scrollHeight;
}
