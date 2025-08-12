import { getPokemonData } from "./modules/HttpRequest";
import { extractData } from "./modules/PokemonData";



    // const fetchPokemon = async (id) => {
    //   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    //   return await res.json();
    // };


    const showData = (data) => {
      const gallery = document.getElementById("gallery");
      const html = `
        <div class="pokemon-card">
          <h3>ID:${data.id} ${data.name}</h3>
          <img src="${data.img}" alt="${data.name}" />
          <p><strong>Type: ${data.types}</strong></p>
        </div>
      `;
      gallery.insertAdjacentHTML("beforeend", html);
    };

    const loadGallery = async (count = 1025) => {
      for (let i = 1; i <= count; i++) {
        try {
          const pokemon = await getPokemonData(String(i));
          const extracted = extractData(pokemon);
          showData(extracted);
        } catch (e) {
          console.warn(`ID ${i} skipped`, e);
        }
      }
    };

    loadGallery();
