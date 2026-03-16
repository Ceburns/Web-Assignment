let lstUsers = [
    {id:1, name:"Henrique", email:"john@example.com", password:"john123", permission:1},
    {id:2, name:"Jane", email:"jd@aol.com", password:"jd123", permission:2},
    {id:2, name:"John Doe", email:"jd@icloud.com", password:"jd123", permission:2},
]


exports.readAll= function(){
    return lstUsers;
}

exports.read=function(uid){
    let user= null;
    for(let i=0; i<lstUsers.length; i++){
        if(lstUsers[i].id == uid){
            user = lstUsers[i];
            break;
        }
    }
    return user;    
}

exports.create=function(user){
    let genID = lstUsers [ lstUsers.length-1].id + 1;
    user._id = genID;
    lstUsers.push(user);
    return user;

}

exports.update=function(user){
    let pos = -1;
    for(let i=0; i<lstUsers.length; i++){
        if(lstUsers[i].id == user.id){
            pos = i;
            
        }
    }
    if (pos >=0 && pos < lstUsers.length){
        lstUsers[pos] = user;
        
    }
    
}

exports.del= function(uid){
    let user= null;
    let pos = -1;
    for(let i=0; i<lstUsers.length; i++){
        if(lstUsers[i].id == uid){
            pos = i;
            break;
        }
    }
    if (pos >=0 && pos < lstUsers.length){
        lstUsers.splice(pos,1);
    }
    return user;
}



