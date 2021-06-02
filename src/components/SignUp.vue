<template>
  <div>
    <h1>Crie uma nova conta</h1>
     <input type="text" placeholder="Seu nome" v-model="nome"/>
     <br>
    <input type="email" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Senha" v-model="senha"/>
    <br />
    <div class="btn-login">
      <button @click="signUp">Registrar</button>
    </div>
    <p>Ou retorne ao<router-link to="/login"> login</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase';
import {useRouter} from 'vue-router';

export default {
    name: 'signUp',
    data(){
        return {
            nome: '',
            email: '',
            senha: '',
            router: useRouter(),
        };
    },
    methods: {
        signUp(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
                (user) => {
                    this.router.replace('/')
                },
                (err) => {
                    alert(`Aconteceu algo inesperado. ${err.message}`)
                }
            );
        }
    },
}
</script>

<style>

</style>