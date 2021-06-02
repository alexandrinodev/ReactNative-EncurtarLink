import styled from 'styled-components/native'
import {Platform} from 'react-native'

export const Container = styled.View`
flex: 1;
background-color: #134742;
`;

export const Title = styled.Text`
margin-top: ${Platform.OS === 'ios' ? 35+'%' : 20+'%'};
margin-left: 20px;
font-size: 32px;
font-weight: bold;
color: white;
`;

export const ListLinks = styled.FlatList`

`;