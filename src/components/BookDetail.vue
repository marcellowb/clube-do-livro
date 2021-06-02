<template>
  <div>
    <div class="book-container">
      <div class="book-cover">
        <img
          v-if="book.volumeInfo.imageLinks == undefined"
          src="../assets/no-cover.jpg"
          alt="Book cover"
        />
        <img
          v-else
          :src="book.volumeInfo.imageLinks.thumbnail"
          alt="Book cover"
        />
      </div>
      <div class="book-details">
        <p class="book-title">{{ book.volumeInfo.title }}</p>
        <p class="book-author">{{ book.volumeInfo.authors[0] }}</p>
        <div class="book-info">
          <p>{{ book.volumeInfo.description }}</p>
        </div>
        <p class="book-categories">
          Categorias: {{ book.volumeInfo.categories[0] }}
        </p>
        <div class="book-buttons">
          <button class="reservar-button">Reservar</button>
          <a href="/" class="home-button"><h1>Voltar para Home</h1></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  setup() {
    const book = ref({});
    const route = useRoute();
    const resp = ref(null);

    onBeforeMount(async () => {
      resp.value = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${route.params.id}`
      );
      book.value = resp.value.data;
      console.log(book.value);
    });

    return { book };
  },
};
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;500;700&display=swap");

.book-container {
  display: flex;
  flex-direction: column;

  background-color: #5f4b8bff;
  padding: 3rem;

  .book-cover {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  img {
    max-width: 150px;
  }

  .book-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fcf6f5ff;
    text-shadow: 0px 1px 5px black;
  }

  .book-author {
    padding-bottom: 1.5rem;
  }

  .book-info {
    max-height: 45vh;
    overflow-y: scroll;
    scroll-behavior: smooth;

    border-top: 1px solid black;
    border-bottom: 1px solid black;

    padding-top: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .book-categories {
    font-size: 0.95rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: #fcf6f5ff;
    opacity: 0.9;
  }

  .book-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .reservar-button {
    padding: 1rem;

    background-color: #fc766aff;
    color: #fcf6f5ff;

    outline: none;
    border: none;
    border-radius: 5px;

    font-size: 1.5rem;
    font-weight: bold;
    font-family: "Open sans", sans-serif;

    margin-bottom: 1rem;
  }

  .home-button {
    font-size: 0.5rem;
    text-decoration: none;
    text-align: center;
  }

  a {
    width: 100%;
    background-color: #5f4b8bff;
  }

  a:hover {
      color: rgb(191, 169, 238);
      transition: 0.6s;
  }
}

@media screen and (min-width: 700px) {
  .book-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    height: 100vh;
    background-color: #5f4b8bff;
    padding: 3rem;

    .book-cover {
      display: flex;
      margin-bottom: 5rem;

      img {
        width: initial;
        height: initial;
      }
    }

    .book-container {
      display: flex;
      flex-direction: column;
    }

    .book-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #fcf6f5ff;
      text-shadow: 0px 1px 5px black;
    }

    .book-author {
      color: rgb(224, 215, 243);
    }

    .book-info {
      max-height: initial;
      overflow-y: initial;

      background-color: aliceblue;
      padding: 1rem;
      border-radius: 5px;

      border-top: none;
      border-bottom: none;

      padding-top: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .book-categories {
      font-size: 0.95rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      color: #fcf6f5ff;
      opacity: 0.9;
    }

    .book-buttons {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

        a {
            width: initial;
        }

    }

    .reservar-button {
      padding: 1rem;

      background-color: #fc766aff;
      color: #fcf6f5ff;

      outline: none;
      border: none;
      border-radius: 5px;

      font-size: 1.5rem;
      font-weight: bold;
      font-family: "Open sans", sans-serif;

      margin-bottom: 1rem;
    }

    .home-button {
      font-size: 0.5rem;
      text-decoration: none;
      text-align: center;
    }

    a {
      width: 100%;
      background-color: #5f4b8bff;
    }
  }
}
</style>