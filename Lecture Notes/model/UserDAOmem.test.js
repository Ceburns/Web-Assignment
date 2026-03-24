const dao = require('./UserDAOmem');

test("Always green test", function(){
    expect(1).toBe(1);
});

test("ReadAll mem had the predefined users", function(){
    let lstUsers = dao.readAll();
    expect(lstUsers.length).toBe(3);
});

test("Create method", function(){
    //setup- configuration - fixture
    let newuser= {name:"Johnny Test",login:"test@t.com", password:'123456', permission: 1};
    dao.create(newuser);

    let created = dao.create(newuser);
    let found = dao.read(created._id);

    

    expect(created._id).toBeDefined(); //assertions
    expect(created.login).toBe(found.login);

    dao.del(created._id); //clean up


});