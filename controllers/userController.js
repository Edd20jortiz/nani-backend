module.exports = {
    login : (req, res) => {
        var name_user=req.params.username;
        var pass_user=req.params.pass;
        res.json({list: [{'name':name_user},{'pass':pass_user}]});
    },
    getAll : (req, res) => {
        res.json({list: [{'name':'jesus'},{'name':'test'}]});
    },
    getByID : (req, res) => {
        var id_user=req.params.id;
        res.json({user: [{'id':id_user,'name':'jesus','lastname':'asdasd'}]});
    },
    deleteUser : (req, res) => {
        var id_user=req.params.id;
        res.json({user: [{'msj':'eliminar al usuario '+id_user}]});
    },
    updateUser : (req, res) => {
        var id_user=req.params.id;
        res.json({user: [{'msj':'editar el usuario '+id_user}]});
    }
}