require('./bootstrap');

window.Vue = require('vue');

// Routes
import Routes from './routes.js'

// Component file
import App from './views/App'

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
});

export default app;