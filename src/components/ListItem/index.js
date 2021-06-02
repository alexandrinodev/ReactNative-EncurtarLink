import React from 'react'
import {View, Text} from 'react-native'
import { Container } from '../../pages/MyLinks/styles'

import { Feather } from '@expo/vector-icons'

import { ContainerButton, Item} from './styles'

export default function ListItem(){
    return(
        <View>
            <ContainerButton activeOpacity={0.8} onPress={ () => (alert('teste')) }>
                <Feather 
                name="link"
                color="#FFF"
                size={24}
                />
                <Item numberOfLines={1} >https://app.bitly.com/Bl62cPItmOw/bitlinks/3ifeQlY/3ifeQlY</Item>
            </ContainerButton>
        </View>
    )
}