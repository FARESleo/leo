const interactions = [
  "ما رأيك في فكرة التعليم الذاتي؟ ❤️ 👎 💬",
  "هل تؤمن أن الشغف أهم من الخبرة؟ 🔥 ❌ 💭",
  "ماذا تختار: الحرية أم الأمان؟ 🕊️ 🛡️ 💬",
  "أيهم أهم في حياتك الآن؟ 💰 🧠 ❤️",
  "هل تفضل العمل من المنزل أم في مكتب؟ 🏠 🏢 💬"
];

function showRandomInteraction() {
  const box = document.getElementById("interactionPreview");
  const randomIndex = Math.floor(Math.random() * interactions.length);
  box.textContent = interactions[randomIndex];
}

showRandomInteraction();

// يمكنك تحديث التفاعل كل فترة إن أحببت (مثلاً كل 10 ثوانٍ):
// setInterval(showRandomInteraction, 10000);
