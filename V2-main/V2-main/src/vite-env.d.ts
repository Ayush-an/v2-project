/// <reference types="vite/client" />
app.use(express.static("./V2-main/V2-main/build"));
  app.get("*",(req,res)=>{

    res.sendFile(Path2D.resolve(_dirname,"V2-main/V2-main","build","index.html"))
  });