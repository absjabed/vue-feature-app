import Hello from '../components/Hello.vue'
import Test from '../components/Test.vue'

export const routes = [
    {
        path: '',
        component: Hello
    },
    {
        path: '/test/:id',
        component: Test
    }
]