<template>
  <div class="books-container">
    <a href="/" class="title"><h1>Clube do livro</h1></a>
    <form @submit.prevent="SearchBook" class="search-container">
      <input v-model="search" type="text" placeholder="Encontre um livro!" />
      <input type="submit" value="Search" />
    </form>
    <div class="flex-list">
      <div v-for="(book, index) in books" :key="index" class="books-list">
        <router-link :to="'/book/' + book.id">
          <div class="book">
            <img
              class="img-resize"
              v-if="book.volumeInfo.imageLinks == undefined"
              src="../assets/no-cover.jpg"
              alt="Book cover"
            />
            <img
              v-else
              :src="book.volumeInfo.imageLinks.thumbnail"
              alt="Book cover"
            />
            <div class="book-info">
              <p>{{ book.volumeInfo.title }}</p>
              <div class="book-detail">
                <p>{{ book.volumeInfo.authors[0] }}</p>
                <p>{{ book.volumeInfo.publishedDate }}</p>
              </div>
            </div>
          </div>
        </router-link>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import env from "../env";
export default {
  setup() {
    const resp = ref([]);
    const books = ref([]);
    let search = ref("");

    const SearchBook = async () => {
      if (search.value != "") {
        resp.value = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${search.value}&key=${env.key}`
        );
        console.log(resp.value.data.items);
        books.value = resp.value.data.items;
        search.value = "";
      }
    };

    return { books, SearchBook, search };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;500;700&display=swap");
.books-container {
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: #5f4b8bff;
  padding-top: 1rem;
}

.title {
  color: #fc766aff;
  text-decoration: none;
  font-size: 1.3rem;
  text-shadow: 0px 1px 10px black;
}

h1 {
  cursor: pointer;
}

.search-container {
  font-family: "Opens Sans", sans-serif;
  input[type="text"] {
    outline: none;
    border: none;
    padding: 1rem;
    border-radius: 5px 0px 0px 5px;
  }

  input[type="submit"] {
    outline: none;
    border: none;
    padding: 1rem;
    border-radius: 0px 5px 5px 0px;
  }

  margin-bottom: 1rem;
}

.books-list {
  background-color: #5f4b8bff;
  cursor: pointer;

  .img-resize {
    width: 35%;
  }

  img:hover {
    transform: rotate(1deg);
    transition: 0.9s ease-in-out;
    box-shadow: 1px 1px 5px black;
  }

  a {
    text-decoration: none;
    font-family: "Open sans", sans-serif;
    font-weight: bold;
    color: #fc766aff;
    text-shadow: 0px 1px 1px black;
  }

  .book {
    display: flex;
    padding: 1.5rem;
    justify-content: space-between;
    // background-color: aqua;
    padding-bottom: 1rem;

    .book-info p:nth-child(1) {
      padding-left: 2rem;
    }

    .book-detail {
      padding-top: 0.35rem;
      display: flex;
      justify-content: center;
      align-items: center;
      p:nth-child(1) {
        border-right: 1px solid rgba(232, 236, 241, 0.3);
        padding-right: 0.3rem;
      }
      p:nth-child(2) {
        padding-left: 0.3rem;
      }
      p {
        font-size: 0.65rem;
      }
    }
  }
}

hr {
  width: 90%;
  margin: 0 auto;
  opacity: 0.1;
}

//Media screen 
@media screen and (min-width: 700px) {
  .flex-list{
    background-color: #5f4b8bff;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 3rem;
  }


.books-list {
  background-color: #5f4b8bff;
  cursor: pointer;

  .img-resize {
    max-width: 140px;
  }

  img {
    max-width: 140px;
  }

  img:hover {
    transition: 0.3s ease-in-out;
  }

  .book {
    display: flex;
    flex-direction: column;
    padding: 0;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;

    .book-info{
      margin-top: 1rem;
    }

    .book-info p:nth-child(1) {
      padding-left: 0;
      max-width: 300px;
    }

  }
}

  hr {
    display: none;
  }
}
</style>