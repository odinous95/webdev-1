document.addEventListener("click", (e) => {
  if (e.target.matches(".more-btn")) {
    const card = e.target.closest(".animal-card");
    if (!card) return;
    const name = card.dataset.name || "Okänt";
    const type = card.dataset.type || "Okänt";
    const color = card.dataset.color || "Okänt";
    const birth = card.dataset.birth || "Okänt";
    const desc = card.dataset.desc || "";
    alert(`${name}\nTyp: ${type}\nFärg: ${color}\nFödd: ${birth}\n\n${desc}`);
  }
});
