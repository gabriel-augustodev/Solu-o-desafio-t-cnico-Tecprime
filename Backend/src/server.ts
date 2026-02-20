import app from './app'

const PORT = 3000

app.listen(PORT, () => {//Inicia o servidor na porta definida
    console.log(`🚀 Server running on port ${PORT}`)
})