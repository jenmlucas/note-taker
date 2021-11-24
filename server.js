const express= require("express");
const Port = process.env.PORT || 3001;
const hmtlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

// routes
app.use("/api", apiRoutes);
app.use("/", hmtlRoutes);


app.listen(Port, () => {
    console.log(`API server now on port ${Port}`);
});


//apiRoutes is notes.html