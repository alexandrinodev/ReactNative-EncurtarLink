import React, { useState, useEffect } from "react";
import { Modal, ActivityIndicator } from "react-native";

import { useIsFocused } from "@react-navigation/native";

import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";
import ListItem from "../../components/ListItem";
import ModalLink from "../../components/ModalLink";

import { getLinkSave, deleteLink } from "../../utils/storeLinks";

import {
  Container,
  Title,
  ListLinks,
  ContainerEmpty,
  WarningText,
} from "./styles";

export default function MyLinks() {
  const isFocused = useIsFocused();

  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoadgin] = useState(true);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinkSave("sujeitolinks");
      setLinks(result);
      setLoadgin(false);
    }

    getLinks();
  }, [isFocused]);

  function handleItem(item) {
    setData(item);
    setModalVisible(true);
  }

  async function handlerDelete(id) {
    const result = await deleteLink(links, id);
    setLinks(result);
  }

  return (
    <Container>
      <StatusBarPage barStyle="light-content" backgroundColor="#132742" />

      <Menu />

      <Title>Meus Links</Title>

      {links.length === 0 && (
        <ContainerEmpty>
          <ActivityIndicator color="white" size={25} />
        </ContainerEmpty>
      )}

      {!loading && links.length === 0 && (
        <ContainerEmpty>
          <WarningText>Voce nao tem nenhum link :) </WarningText>
        </ContainerEmpty>
      )}

      <ListLinks
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListItem
            data={item}
            selectedItem={handleItem}
            deleteItem={handlerDelete}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalLink onClose={() => setModalVisible(false)} data={data} />
      </Modal>
    </Container>
  );
}
