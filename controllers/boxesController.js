module.exports = {
    getAll : (req, res) => {
        res.json({list: [{'name':'jesus'},{'name':'test'}]});
    },
    getByID : (req, res) => {
        var id_user=req.params.id;
        res.json({user: [{'id':id_user,'name':'jesus','lastname':'asdasd'}]});
    },
    deleteBox : (req, res) => {
        var id_user=req.params.id;
        res.json({user: [{'msj':'eliminar al usuario '+id_user}]});
    },
    updateBox : (req, res) => {
        var id_user=req.params.id;
        res.json({user: [{'msj':'eliminar al usuario '+id_user}]});
    }
}