class HomeController{

    async index(req, res){

        res.send("Zoid says hello world!");
        
    }

}

module.exports = new HomeController();