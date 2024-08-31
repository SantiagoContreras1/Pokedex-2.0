const limit = 1

export const reqPoke = async (nombre) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/?`);
    const { data } = await resp.json();

    const { id, name, sprites, types, abilities } = data;
    console.log(
      id,
      name,
      sprites.other["official-artwork"].front_default,
      types[0].type.name,
      abilities[0].ability.name
    );

    return data;
  } catch (err) {
    console.log(err)
  }
};
