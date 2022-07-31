const mongoose = require("mongoose");
const validator = require("validator");

// connection creation and create a new db if not exist
mongoose.connect("mongodb://localhost:27017/prajapati", {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true}).then( () => console.log("connection successfull...")).catch( (err) => console.log(err));

// schema 

const playlistSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minlength: 2,
        maxlength:10
    },
    ctype: {
        type: String,
        required: true,
        // lowercase: true,
        enum: ["frontend", "backend", "database"]
    },
    videos: {
        type: Number,
        validate(value){
            if(value < 0){
                throw new Error("Vidoes count should not be negative");
            }
        }

        // validate: {
        //     validator: function(value){
        //         return value.length < 0
        //     },
        //     message : "Vidoes count should not be negative"
        // }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
            }
        }
    },
    active: Boolean,
    date:{
        type: Date,
        default: Date.now
    }
})

// Collection creation 
 
const Playlist = new mongoose.model("Playlist", playlistSchema);

const createDocument = async () =>{
    try{
        // const angularPlaylist = new Playlist({
        // name: "Angular Js",
        // ctype: "Front End",
        // videos: 70,
        // active: true
        // })
        const javascriptPlaylist = new Playlist({
        name: "Advance Js",
        ctype: "frontend",
        videos: 50,
        email:"sid@yah.co",
        active: true
        })
        // const nodejsPlaylist = new Playlist({
        // name: "Node Js",
        // ctype: "Back End",
        // videos: 86,
        // active: true
        // })
        // const mongoPlaylist = new Playlist({
        // name: "MongoDb",
        // ctype: "Database",
        // videos: 46,
        // active: true
        // })
    
        // const result = await Playlist.insertMany([angularPlaylist, javascriptPlaylist, nodejsPlaylist]);
        const result = await javascriptPlaylist.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

createDocument();



const getDocument = async () => {
        try{
            // const r = await Playlist.find({ctype: "Front End"}).select({name:1}).limit(2);
            // const r = await Playlist.find({ctype:{$nin: ["Back End", "Database"]}}).select({name:1})
            // const r = await Playlist.find({ctype:{$in: ["Back End", "Database"]}}).select({name:1})
            // const r = await Playlist.find({$and: [{ctype:"Front End"},{name:"React Js"}]}).select({name:1})
            // const r = await Playlist.find({$or: [{ctype:"Front End"},{name:"React Js"}]}).select({name:1})


            // const r = await Playlist.find({ctype:"Front End"}).count();
            // const r = await Playlist.find({ctype:"Front End"}).countDocuments();

            // const r = await Playlist.find({active:true}).select({name:1}).sort({name:1})
            const r = await Playlist.find({active:true}).select({name:1}).sort({name:-1})

            console.log(r);
        }catch(err){
            console.log(err);
        }
}

// getDocument();


// update the document 

const updateDocument = async (_id) => {
    try {
        // const u = await Playlist.updateOne({_id},{
        // const u = await Playlist.findOneAndUpdate({_id},{
        const u = await Playlist.findByIdAndUpdate({_id},{
            $set: {
                name:"JavaScript"
            }
        },{
            new:true,  //--->this is for showing the updated value in the terminal or console
            useFindAndModify: false
        });
        console.log(u);
    } catch (error) {
        console.log(error);
    }
}

// updateDocument("611c07be27136f00dc39bbdf");


// delete the document


const deleteDocument = async (_id) => {
    try {
        // const d = await Playlist.deleteOne({_id});
        const d = await Playlist.findByIdAndDelete({_id});

        console.log(d);
        
    } catch (error) {
        console.log(error);
    }
}

// deleteDocument("611c07be27136f00dc39bbde");