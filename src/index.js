import dva from 'dva';
import './index.html';
import 'antd/dist/antd.less';
// 1. Initialize
const app = dva();

app.router(require('./router'));

app.start('#root');
