<template>
  <div>
    <h1>Login</h1>
    <input type="email" placeholder="Email" v-model="email"/>
    <br />
    <input type="password" placeholder="Senha" v-model="senha"/>
    <br />
    <div class="btn-login">
      <button @click="login">Login</button>
    </div>
    <p>
      Você não tem conta?
      <router-link to="/sign-up">Crie uma conta</router-link>
    </p>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import firebase from 'firebase';

export default {
 name: 'login',
 data(){
     return {
         email: '',
         senha: '',
         router: useRouter(),
     };
 },
 methods: {
     login: function(){
         firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
             (user) => {
                 this.router.replace('/')
                 alert(`Bem vindo, ${{email}}`)
             },
             (err) => {
                 alert(`Não foi possível realizar o login ${err.message}`)
             }
         );
     }
 }
};
</script>

<style>
</style>