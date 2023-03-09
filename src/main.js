import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/router.js'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// createApp(App).use(router).mount('#app')

// [앱 생성 실시]
const app = createApp(App)

// [axios / http 통신]
app.config.globalProperties.$axios = axios

// [라우터 사용 설정]
app.use(router)

//[Vuex 사용법]
app.use(store)

//[sweetalert2 사용법]
app.use(VueSweetalert2)

// [main 아이디 : 렌더링 시작점]
app.mount('#app')
