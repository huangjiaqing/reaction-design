import dva from 'dva';
import './index.css';
import 'normalize.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/base').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
