module.exports = {
    getAll : (req, res) => {
        res.json({list: [{'name':'jesus'},{'name':'test'}]});
    },
    getByID : (req, res) => {
        var id_card=req.params.id;
        res.json({card: [{'id':id_card,'name':'jesus','lastname':'asdasd'}]});
    },
    deleteCard : (req, res) => {
        var id_card=req.params.id;
        res.json({card: [{'msj':'eliminar al usuario '+id_card}]});
    },
    updateCard : (req, res) => {
        var id_card=req.params.id;
        res.json({card: [{'msj':'editar el card '+id_card}]});
    },
    respuestaCard : (req, res) => {
        var id_card=req.params.id;
        var rpta=req.params.rpta;
        res.json({card: [{'msj':'responde el card '+id_card,'rpta':rpta}]});
    }
}