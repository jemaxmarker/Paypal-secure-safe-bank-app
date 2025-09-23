// chat.js
let totalMessages = 0;
const maxMessages = 15;
let initialMessagesSent = 0;

// Toggle chat box visibility
function toggleChat() {
  const chatBox = document.getElementById("chat-box");
  chatBox.classList.toggle("hidden");

  // Send initial messages when chat opens for the first time
  if(initialMessagesSent === 0) {
    sendInitialMessages();
  }
}

// Send the first 1–3 automated messages
function sendInitialMessages() {
  const messages = document.getElementById("chat-messages");
  const automated = [
    "Hello! Welcome to PayPal Bank Support.",
    "I’m here to assist you before our team joins.",
    "Feel free to ask your questions!"
  ];

  automated.forEach((text, idx) => {
    setTimeout(() => {
      const msg = document.createElement("div");
      msg.className = "bot-message";
      msg.textContent = text;
      messages.appendChild(msg);
      messages.scrollTop = messages.scrollHeight;
      initialMessagesSent++;
    }, idx * 1000); // 1 second interval between messages
  });
}

// Check for Enter key press
function checkEnter(e) {
  if (e.key === "Enter") sendMessage();
}

// Send a message
function sendMessage() {
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");
  const text = input.value.trim();
  if (text === "") return;

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

  // Auto bot response only for initial messages (1–3)
  if(initialMessagesSent <= 3) {
    const botMsg = document.createElement("div");
    botMsg.className = "bot-message";
    botMsg.textContent = "This is a support reply.";
    messages.appendChild(botMsg);
    initialMessagesSent++;
  }

  totalMessages += 2; // counting both user and bot
  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}

// Show premium prompt
function showPremiumPrompt() {
  const messages = document.getElementById("chat-messages");
  const premiumMsg = document.createElement("div");
  premiumMsg.className = "premium-prompt";
  premiumMsg.innerHTML = `
    <strong>Upgrade to Premium</strong><br>
    Premium Amount: $<span id="premium-amount">10</span><br>
    Voice Call Fee: $<span id="voice-amount">5</span><br>
    Human Escalation: $<span id="human-amount">7</span><br>
    Urgency Fee: $<span id="urgency-amount">3</span>
  `;
  messages.appendChild(premiumMsg);
  messages.scrollTop = messages.scrollHeight;
}
