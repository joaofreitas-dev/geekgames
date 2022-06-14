const Jogo = require("../models/Jogos");
let message = "";

const getAll = async (req, res) => {
    try{
        const jogos = await Jogo.findAll();
        res.render("index",{
           jogos, 
           jogosPut: null, 
           jogosDel: null,
           message,
        });
    }catch(err){
        res.status(500).send({err: err.message});

    };
};

const getById = async (req, res) => {
    try{
        const jogo = await Jogo.findByPk(req.params.id);
        res.render("detalhes", {
            jogo
        });

    }catch(err){
        res.status(500).send({err: err.message});
    };
};

const cadastro = (req, res) => {
    try{
        res.render("cadastro", {message});

    }catch(err){
        res.status(500).send({err: err.message});
    };
}

const cadastroAdd = async (req, res) => {
    try{
        const jogo = req.body;
        if(
            !jogo.titulo ||
            !jogo.imagem ||
            !jogo.descricao ||
            !jogo.genero ||
            !jogo.plataforma ||
            !jogo.preco ||
            !jogo.desenvolvedor ||
            !jogo.reqmin ||
            !jogo.reqideal
        ){
            message = "Preencha todos os campos do formulário!"
            type = "danger"
            return res.redirecr("/cadastro");
        }
        await Jogo.create(jogo);
        res.redirect("/")
        
    }catch(err){
        res.status(500).send({err: err.message});
    };

};

const editar1 = async (req, res) => {
    const jogo = await Jogo.findByPk(req.params.id);
    if(!jogo){
        res.render("editar",{
        message: "Filme não encontrado!"});
    }

        res.render("editar",{
        jogo,
        message: ""
     });
};

const editar = async (req, res) => {
    try{
        const jogo = await Jogo.findByPk(req.params.id);
        const {titulo, imagem, descricao, genero, plataforma, preco, desenvolvedor, reqmin, reqideal} = req.body;

        jogo.titulo = titulo;
        jogo.imagem =imagem;
        jogo.descricao =descricao;
        jogo.genero = genero;
        jogo.plataforma = plataforma;
        jogo.preco = preco;
        jogo.desenvolvedor = desenvolvedor;
        jogo.reqmin = reqmin;
        jogo.reqideal = reqideal;

        const jogoAtualizado = await jogo.save(); 
        res.redirect("/"); 

    }catch(err){
        res.status(500).send({err: err.message});
    };

};

const deletar = async (req,res) => {
    try{
      const jogo = await Jogo.findByPk(req.params.id);
  
      if(!jogo){
        res.render("delete", {
          message: "Jogo não foi encontrado!",
          type: "danger",
        });
      }
      res.render("delete", {
        jogo, message:"",
      });
    }catch (err) {
      
      res.status(500).send({ err: err.message }); 
  }
  };
  
  const deletar1 = async (req,res) => {
    const jogo = await Jogo.findByPk(req.params.id);
  
    if(!jogo){
      res.render("delete", {
        message: "Jogo não encontrado",
      });
    }
  
    await jogo.destroy();
    res.redirect("/");
  };

 

module.exports = {
    getAll,
    getById,
    cadastro, 
    cadastroAdd, 
    editar1,
    editar,
    deletar,
    deletar1
};