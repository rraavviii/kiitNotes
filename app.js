const express=require('express')
const userModel=require('./model/user')
const path=require('path')
const dotenv=require('dotenv')
dotenv.config();
const app=express()

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', function(req, res) {
    res.render('index');
 });
app.get('/signup', function(req, res) { res.render('signup'); });
app.post('/register',async function(req,res){
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) return res.status(300).send('User already exist');
    let users = await userModel.create({
       
        email,
        password
       
     });
    console.log(req.body)
    res.redirect('/login')
})


app.get('/login',function(req,res){ 
    res.render('signin');
});

app.get('/newe',function(req,res){ 
    res.render('newe');
});

app.get('/user',function(req,res){ 
    res.render('user');
});

app.post('/usepage',async function(req,res){ 
      let{name,email,query} = req.body;
        res.redirect('/user')
    });

app.post('/login',async function(req,res){
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) return res.status(500).send('something went wrong');
    if (user.password!== password) return res.status(401).send('Invalid credentials');
    if(user.email==email){
        if(email=='ravikumar@gmail.com'){
            return res.render('admin',{user})
        }
        else{
            return res.render('user',{user})
        }
    }
})
app.listen(process.env.PORT,()=>console.log(`Server running on port ${process.env.PORT}`))