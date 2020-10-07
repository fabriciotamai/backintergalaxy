import styled from 'styled-components/native';
import { Platform } from 'react-native';


export const Container = styled.View`
flex:1;
align-items:center;
justify-content:center;
background:#131413;

padding: 0px 10px;
padding: 0 30px ${Platform.OS === 'android' ? '150' : '40'}px;
margin-top:10px;

`;

export const Title = styled.Text`
    font-size:24px;
    color:#f4ede8;
    font-family:'RobotoSlab-Medium';
    margin:30px 0 24px;

`;



export const BackToSignin = styled.TouchableOpacity`
position:absolute;
left:0;
bottom:0;
right:0;
background:#7400ca;
border-top-width:1px;
border-color:#7400ca;
padding:16px ;



justify-content:center;
align-items:center;
flex-direction:row;

`;

export const BackToSigninText = styled.Text`

color:#f4ede8;
font-size:18px;
font-family:'RobotoSlab-Regular';
margin-left:16px;

`;