<template>
  <div>
    <button @click="hello">Hello world</button>
    <button @click="form">멀티 인풋</button>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  setup() {
    const title = 'World'

    const hello = () => {
      Swal.fire({
        title: 'OPPS',
        text: 'wow',
        icon: 'warning'
      })
    }

    const form = () => {
      Swal.fire({
        title: '글작성',
        html: `작성자:<input type="text" id="login" class="swal2-input" placeholder="작성자"><br>
               제목 :<input type="password" id="password" class="swal2-input" placeholder="제목"><br>
               글내:<textarea type="textarea" id="contents" cols="23.5" class="swal2-textarea" placeholder="글내용">`,
        confirmButtonText: '',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`Please enter login and password`)
          }
          return { login: login, password: password }
        }
      }).then((result) => {
        Swal.fire(
          `
    Login: ${result.value.login}
    Password: ${result.value.password}
  `.trim()
        )
      })
    }

    return { hello, form }
  }
}
</script>

<style scoped></style>
