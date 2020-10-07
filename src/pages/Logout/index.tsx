import React,{useRef,useCallback} from'react';
import { Image, KeyboardAvoidingView, Platform, View, ScrollView, TextInput, Alert} from 'react-native';

import {useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import getValidationErros from '../../utils/getValidationError';




import Icon from 'react-native-vector-icons/Feather';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, 
    Title, 
    BackToSignin, 
    BackToSigninText,
} from './styles';

import logoimg from '../../assets/logo.png';

import api from '../../services/api';

interface LogoutFormData{
    name:string;
    email:string;
    password:string;



}



const Logout : React.FC = () =>{
    const formRef = useRef<FormHandles>(null);

    const navigation = useNavigation();

    const emailInputRef = useRef<TextInput>(null)
    const passwordInputRef = useRef<TextInput>(null)

  

   const handleLogout = useCallback(
       async(data:LogoutFormData)=>{
           try{
               formRef.current?.setErrors({});
               
               const schema = Yup.object().shape({
                   name: Yup.string().required('Nome Obrigatorio'),
                   email:Yup.string()
                   .required('email obrigatorio')
                   .email('Digite um email valido'),
                   password: Yup.string().min(8, 'no minimo 8 cararter'),
               });
               await schema.validate(data,{
                   abortEarly:false,
               });

               await api.post('/users', data);
               

               Alert.alert('Cadastro deu Good')
               navigation.navigate('Logon')

               
           
        }catch(err){
            if(err instanceof Yup.ValidationError){
                const errors = getValidationErros(err);

                formRef.current?.setErrors(errors);
                return;
            }
            Alert.alert(
                'erro no cadastro ',
                );
            }
            
       }, []);
   

    

    return(
        <>
        <KeyboardAvoidingView 
        style={{flex:1, backgroundColor:'#131413',}}
        behavior={Platform.OS  === 'ios' ? 'padding' : undefined}
        enabled
        >
        <ScrollView keyboardShouldPersistTaps="handled"
         contentContainerStyle={{flex:1}}> 
        <Container>

            <Image source={logoimg}/>
            <View>
            <Title>Crie sua Conta</Title>
            </View>

           
            <Form ref={formRef} onSubmit={(data)=>{console.log(data)}}>
            <Input
            autoCapitalize="words"
             name="name" 
             returnKeyType="next"
             icon="user"
             onSubmitEditing={()=>{emailInputRef.current?.focus();}}
            placeholder="Name"/>

            <Input 
            ref={emailInputRef}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            name="email"
            icon="mail"
            returnKeyType="next"
            onSubmitEditing={()=>{passwordInputRef.current?.focus()}}

            placeholder="E-mail"/>
            
           
            <Input 
            ref={passwordInputRef}
            secureTextEntry
            name="passowrd"
             icon="lock"
             textContentType="newPassword" 
            placeholder="Password"
            returnKeyType="send"
            onSubmitEditing={()=>formRef.current?.submitForm()}
            
            
            />
            
            
          
            

            <Button onPress={()=>formRef.current?.submitForm()}>
                Entrar
            </Button>
            </Form>
            
           
       </Container>
       </ScrollView>
       </KeyboardAvoidingView>


        <BackToSignin onPress={()=>{}}>
            <Icon name="arrow-left" size={20} color="#fff"/>


            <BackToSigninText onPress={()=> navigation.navigate('Logon')}>Voltar para Logon</BackToSigninText>
        </BackToSignin>


        </>
    );
};

export default Logout;