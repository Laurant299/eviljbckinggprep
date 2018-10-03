var express=require("express"),
bodyParse=require("body-parser"),
mongoose=require("mongoose"),
app = express();

mongoose.connect("mongodb://localhost/restfulblogapp",{ useNewUrlParser: true });
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParse.urlencoded({extended:true}));

var blogSchema=new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created: {type:Date, default:Date.now}
});

//mongoose/model config
var Blog=mongoose.model("Blog",blogSchema);

Blog.create({
    title:"Test Blog",
    image:"https://images.unsplash.com/photo-1538475501351-ddcf9a9333bd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c04574d04afc0d40c36bf0e70ff99a0f&auto=format&fit=crop&w=500&q=60",
    body:"Hello this is test"
});
//restful routes
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server start")
});
