const express = require("express")
const users = require('./MOCK_DATA.json')


 const app = express();

 const PORT = 8000;

    //Routes
    app.get('/',(req,res)=> {
        return res.json(users);
    })
    app.get('/user',(req,res)=>{
        const html = `
        <ul>
        ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
        </ul>
        `;
        return res.send(html);
    })

        //Dynamic Path Parameter(:)
      //  /user/:id             ":" lagne se dynamic hota h 


      app.get('/user/:id', (req,res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id ===id);

            return res.json(user);
      });






 app.listen(PORT , ()=> console.log(`Server Started at PORT :${PORT}`));