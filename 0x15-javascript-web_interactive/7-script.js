
const characterDiv = document.querySelector("#character");

async function fetchCharacter() {
  try {
    const response = await fetch(
      "https://swapi-api.alx-tools.com/api/people/5/?format=json"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch character.");
    }

    const data = await response.json();
    characterDiv.textContent = data.name;
  } catch (error) {
    characterDiv.textContent = "Unable to load character.";
  }
}

fetchCharacter();
