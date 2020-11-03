const express = require('express');
const app = express();


//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json space', 2);

//middlewares

app.use(express.urlencoded({extended: false}));
app.use(express.json());


// rutas
app.use(require('./routes/index'));
app.use('/api/notes',require('./routes/notes'));

//Empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})