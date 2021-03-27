var fs=require('fs');
var http=require('http');

http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
     var url=req.url;

if (url=='/'){
 fs.readFile('Homepag.html',function (error,data){
     if (error==null){
        res.write(data);
        res.end();
     }else {
         res.end(error);
     }
 });
}else if (url=='/lab3'){
    fs.readFile('lab3.html',function (error,data){
        if (error==null){
            res.write(data);
            res.end();
        }else {
            res.end(error);
        }
    });


}else if (url=='/insert'){
    fs.writeFile('thongtin.txt', 'Learn Data', function (error){
        if (error == null){
            res.end("Ghi thanh cong");
        }else {
            res.end(error);
        }
    });
}else if (url=='/append'){
    fs.appendFile('thongtin.txt','Lean DATA lan2',function (error){
  if (error==null){
    res.end("Ghi thanh cong lan2");
 }else {
     res.end(error);
}
    });
} else if (url=='/rename'){
    fs.rename('thongtin.txt','mssv.txt',function (error){
        if (error==null){
            res.end("Rename succesfully");
        }else {
            res.end(error);
        }

    });
}else if (url=='/appendFileSync'){
    fs.appendFileSync('thongtin.txt','Chào Chí Mạnh nha!',function (error){
        if (error==null){
            res.end("Data append to file succsesfully");
        }else {
            res.end(error);
        }

    });
}else {
    res.end('404 Not Found');
}

}).listen(process.env.PORT|| '3000');