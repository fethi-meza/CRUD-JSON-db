const generator = require("../Util/genrator");
const model = require("../module/user_module");

const fs = require('fs')

//get all users 
exports.getAllUsers =(req ,res)=>{

   fs.readFile('./'+'user.json' , 'utf8', (err, Data)=>{
    console.log(Data)
    res.send(Data)
    });

}

//get element by id 
exports.getUserById =(req ,res)=>{

    

}



// Create a new user
exports.CreateUser = (req, res) => {
    var seqId = generator.generate();
    var createdOn = new Date();
  
    //  request body
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
  
    // Check if required fields are empty
    if (!firstname || !lastname || !email) {
      return res.status(500).send("Please provide a valid firstname, lastname, and email.");
    }
  
    // Create a new user object
    var user = new model.User(seqId, firstname, lastname, email, createdOn);
    
    // Read existing users from a JSON file
    fs.readFile('./'+'user.json' , 'utf8',(err, Data)=> {
      if (err) {
        return res.status(500).send("Error reading users file.");
      }
  
      var Users = JSON.parse(Data)
  
      // Add the new user to the users array
      Users.push(user);
  
      // Save the updated users array back to the JSON file
      fs.writeFile("./" + "user.json", JSON.stringify(Users), 'utf8',(err)=> {
        if (err) {
          return res.status(500).send("Error saving user.");
        }
  
        // Return success response
        return res.status(200).send("User created successfully.");
      });
    });
  };
  


//Update user
exports.upDateuser =(req ,res)=>{

    res.send('all users is here')

}
//Delete user 
exports.deleteUser =(req ,res)=>{

    res.send('your user is deleted')

}