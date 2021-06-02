import styled from 'styled-components/native';
import {Platform} from 'react-native'

export const ModalContainer = styled.View`
flex: 1;
`;
export const Container = styled.View`
flex: 1;
background-color: white;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
padding: 0 15px;
`;
export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
margin-top: 15px;
margin-left: 0;
margin-right: 0;
`;

export const LinkArea = styled.View`
flex:1;
justify-content: center;
`;

export const Title = styled.Text`
font-size: 33px;
font-weight: bold;
color: #1ccbae;
`;

export const LongUrl = styled.Text`
font-size: 17px;
color: #a7a7a7;
margin-bottom: 30px;
`;

export const ShortLinkArea = styled.TouchableOpacity`
height: 45px;
width: 100%;
background-color: #172742;
border-radius: 7px;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 10px;
`;

export const ShortLinkUrl = styled.Text`
width: 90%;
color: white;
font-size: 16px;
`;