const routes = (app) => {

    app.route('/contact')
    .get((req, res, next)=>{
        // middleware
        console.log(`Request of: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, (req, res)=>{
        res.send('GET SUCCESSFULL')
    })
    .post((req, res)=>{
        res.send('POST SUCCESSFULL')
    })

    app.route('/contact/:contactId')
    .put((req, res)=>{
        res.send('PUT SUCCESSFULL')
    })
    .delete((req, res)=>{
        res.send('DELETE SUCCESSFULL')
    })
}

export default routes;