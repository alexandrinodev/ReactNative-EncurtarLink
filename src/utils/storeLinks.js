import AsyncStorage from "@react-native-async-storage/async-storage";

//buscar link salvo
export async function getLinkSave(key) {
  const myLinks = await AsyncStorage.getItem(key);

  let linkSaves = JSON.parse(myLinks) || [];

  return linkSaves;
}

//salvar link
export async function saveLink(key, newLink) {
  let linksStored = await getLinkSave(key);

  //se tiver algum salvo com ID igual ou duplicado precisa ignorar.
  const hasLink = linksStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    console.log("esse link ja existe");
    return;
  }

  linksStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linksStored));
  console.log("Link Salo com sucesso");
}

//deletar link
export async function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("sujeitolinks", JSON.stringify(myLinks));
  console.log("link deletado");
  return myLinks;
}
