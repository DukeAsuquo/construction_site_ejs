import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/projects', (req, res) => {
    res.render('projects.ejs')
  })

app.get('/services', (req, res) => {
    res.render('services.ejs')
  })

app.get('/about', (req, res) => {
    res.render('projects.ejs')
  })

 app.get('/history', (req, res) => {
    res.render('history.ejs')
  })
app.get('/team', (req, res) => {
    res.render('team.ejs')
  })

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
  })

  app.get('/blog', (req, res) => {
    res.render('blog.ejs')
  })

  app.get('/shop', (req, res) => {
    res.render('shop.ejs')
  })

app.post('/submit', (req,res)=>{
    const user = req.body["name"];
    const mail = req.body["email"];
    res.render('contact.ejs', {person:user, userMail: mail});

});




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
