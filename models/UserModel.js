

const kind = "Users";
const Datastore = require('@google-cloud/datastore');


var projectId = process.env.PROJECT;
if( process.env.GOOGLE_CLOUD_PROJECT ){
    projectId = process.env.GOOGLE_CLOUD_PROJECT;
    console.log('UserModel: Project ID ', projectId);
}

console.log('UserModel: projectId - from user', projectId);
const datastore = new Datastore({
    projectId: projectId
});
const transaction = datastore.transaction();

exports.addUser = function(user, callback){
    debugger;
    let email = user.email;
    const query = datastore.createQuery(kind).filter('email', '=', email);
    datastore.runQuery(query).then(function(results){
        console.log(results[0].length);
        if(results[0].length!=0){
            return callback(results[0], null);
        }else{
            console.log("Saving user");
            const userSave = {
                key:datastore.key(kind),
                data:{
                    username: user.username,
                    email: user.email,
                    role:user.role
                }
            };
            datastore.save(userSave).then(function(){
                console.log(userSave);
                callback(userSave, null);
            }).catch(function(error){
                console.log(error);
                callback(null, error.errmsg);
            });
        }
    }).catch(function(error){
        callback(null, error);
    });
    
}

exports.findIdByEmail = function(email, callback){
    const query = datastore.createQuery(kind).filter('email', '=', email);
    datastore.runQuery(query).then(function(results){
        callback((results[0])[0], null);
    }).catch(function(error){
        callback(null, error);
    });
}

exports.getEntityList = function(filter, callback){
    const query = datastore.createQuery(kind);

    datastore.runQuery(query).then(results => {
        console.log(results);
        const entities = results[0];
        const info = results[1];

        if (info.moreResults !== Datastore.NO_MORE_RESULTS) {
            // If there are more results to retrieve, the end cursor is
            // automatically set on `info`. To get this value directly, access
            // the `endCursor` property.
            return runPageQuery(info.endCursor).then(results => {
                // Concatenate entities
                results[0] = entities.concat(results[0]);
                return results;
            });
        }
        callback(entities,null);
    }).catch(function(error){
        callback(null, error);
    });    
}