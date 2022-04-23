import userData from "../models/users.json"
const userDB = {
    users: userData, 
    setUsers: function (data) { this.users = data; },
  };
import { appendFile, writeFile, writeFileSync } from 'fs';
import * as path from 'path';
import * as bcrypt from 'bcrypt';
const __dirname = path.resolve();

export const handelNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if(!user || !pwd) return res.status(400).json({'message': 'User name and password is required'});

  //const duplicate = userDB.users.find(person => person.username === user);
  //if(duplicate) return res.sendStatus(409);
  try {
      const hashedPwd = await bcrypt.hash(pwd,10);
      const newUser = {"username": user, "password": hashedPwd};
      
      userDB.setUsers([...userDB.users, newUser]);

      
      await writeFile(
        path.join(__dirname, '..', 'server', 'models', 'users.json'),
        JSON.stringify(userDB.users),
        "UTF-8",
        (err) => {
            if(err) throw err;
        }
    );
      console.log(userDB.users);
      res.status(201).json({'success': `New user ${user} created.`})
  } catch (error) {
      res.status(500).json({'message': error.message})
  }
};
