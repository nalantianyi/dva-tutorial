import dva from 'dva';
import './index.html';
// 1. Initialize
const app = dva();
console.log(app);

app.router(require('./router'));

app.start('#root');
