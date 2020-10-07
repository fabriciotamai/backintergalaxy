import React,{useCallback, useRef} from 'react';
import { Image, KeyboardAvoidingView, Platform, View, ScrollView} from 'react-native';

import {useNavigation } from '@react-navigation/native';

import { Form} from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Icon from 'react-native-vector-icons/Feather';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, 
    Title, 
    ForgotPassword, 
    ForgotPasswordText, 
    CreateAccountButton, 
    CreateAccountButtonText,
    

} from './styles';

import logoimg from '../../assets/logo.png';
import { TextInput } from 'react-native-gesture-handler';

const Logon : React.FC = () =>{
    
    const formRef = useRef<FormHandles>(null) 
    const passwordInputRef = useRef<TextInput>(null);

    const navigation = useNavigation();
    

    const handleLogon = useCallback((data: object)=>{
        console.log(data);


    },[])

   
  

   

    return(
        <>
        <KeyboardAvoidingView 
        style={{flex:1}}
        behavior={Platform.OS  === 'ios' ? 'padding' : undefined}
        enabled
        >
        <ScrollView keyboardShouldPersistTaps="handled"
         contentContainerStyle={{flex:1}}
         > 
        <Container>

            <Image source={logoimg}/>

            <View>
            <Title>Faca seu Logon</Title>
            </View>

           
            <Form ref={formRef} onSubmit={handleLogon}>
            <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email" icon="mail" placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={()=>{
                passwordInputRef.current?.focus();

            }}

            />
           
            <Input
            ref={passwordInputRef}
             name="passowrd"
             secureTextEntry
             returnKeyType="send"
             icon="lock"
            placeholder="Password"
            onSubmitEditing={()=>{
                formRef.current ?.submitForm();
            }}/>

            <Button onPress={()=>{formRef.current?.submitForm()}}
            >Logon
            </Button>
            </Form>
            
            <ForgotPassword onPress={()=>{}}>
                <ForgotPasswordText>
                    Esqueci minha senha

                </ForgotPasswordText>
            </ForgotPassword>
            <Icon name="facebook" size={20} color="#ff9000"/>
           
       </Container>
       </ScrollView>
       </KeyboardAvoidingView>


        <CreateAccountButton onPress={()=> navigation.navigate('Logout')}>
            <Icon name="log-in" size={20} color="#ff9000"/>


            <CreateAccountButtonText >Criar uma Conta</CreateAccountButtonText>
        </CreateAccountButton>


        </>
    );
};

export default Logon;