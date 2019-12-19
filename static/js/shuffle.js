function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleChildren(list) {
  const shuffledChildren = shuffleArray([...list.children]);
  while (list.children.length) {
    list.children[0].remove();
  }
  for (let child of shuffledChildren) {
    list.appendChild(child);
  }
  list.classList.remove("shuffle");
}

document.addEventListener("DOMContentLoaded", () => {
  const lists = [...document.querySelectorAll(".shuffle")];
  lists.map(shuffleChildren);
});
