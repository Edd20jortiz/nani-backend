module.exports = {
    getAll : (req, res) => {
        res.json({list: [{'name':'deck1'},{'name':'deck2'}]});
    },
    getByID : (req, res) => {
        var id_card=req.params.id;
        res.json({card: [{'id':id_card,'name':'jesus','lastname':'asdasd'}]});
    },
    deleteDeck : (req, res) => {
        var id_deck=req.params.id;
        res.json({deck: [{'msj':'eliminar al deck '+id_deck}]});
    },
    updateDeck : (req, res) => {
        var id_deck=req.params.id;
        res.json({deck: [{'msj':'editar el deck '+id_deck}]});
    }
}