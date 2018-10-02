
const userModel = require("../models/UserModel");

// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client("424866252249-rnmr12b3jo5ab7iacdrh1q56jcrq3al4.apps.googleusercontent.com");


exports.addTenant = async function(req,res,next){
    // let token = req.body.idtoken;
    // const ticket = await client.verifyIdToken({
    //     idToken: token,
    //     audience: "424866252249-rnmr12b3jo5ab7iacdrh1q56jcrq3al4.apps.googleusercontent.com"
    // });
    // console.log(token);
      debugger;

    let query = {};
    query.email = req.body.email;
    query.username = req.body.username;
    query.role = "TENANT";
    // query.token = token;
    userModel.addUser(query,function(user, error){
        if(error){
            res.send('Cannot save user : ' + error, null, {
                type: 0,
                title: 'error',
                message: 'Something went wrong. Cannot update details'
            });
        } else{
            res.send(user);
        }
    });
    
    
}

exports.addLandlord = async function(req,res,next){
    // let token = req.body.idtoken;
    // const ticket = await client.verifyIdToken({
    //     idToken: token,
    //     audience: "424866252249-rnmr12b3jo5ab7iacdrh1q56jcrq3al4.apps.googleusercontent.com"
    // });
    // console.log(token);
      
    let query = {};
    query.email = ticket.payload.email;
    query.username = ticket.payload.name;
    query.role = "LANDLORD";
    query.token = token;
    userModel.addUser(query,function(user, error){
            if(error){
                res.send('Cannot save user : ' + error, null, {
                    type: 0,
                    title: 'error',
                    message: 'Something went wrong. Cannot update details'
                });
            } else{
                res.send(user);
            }
        });
    
}


exports.getEntityList = async function(req,res,next){

    let query = {};
    query.role = "TENANT";
    userModel.getEntityList(query,function(userList, error){
        if(error){
            res.send('Cannot get user list : ' + error, null, {
                type: 0,
                title: 'error',
                message: 'Something went wrong. Cannot update details'
            });
        } else{
            debugger;
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(userList));
            // res.send(userList);
        }
    });    

}