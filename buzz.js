var Blynk=require('blynk-library');
var AUTH='1179c23d85e24db6a2b408b48d09764f';
var blynk=new Blynk.Blynk(AUTH,options={connector:new Blynk.TcpClient()});

var v1=new blynk.VirtualPin(1);
const{exec}=require('child_process');
exec('gpio mode 15 out');exec('gpio mode 7 out');
toggleBlue();setTimeout(function(){toggleBlue();},2000);

function toggleBlue(){exec('gpio toggle 7');}
function turnOff(){exec('gpio write 15 0');}
turnOff();

v1.on('write',function(param){
  exec('gpio write 15 1');console.log('time');
  setTimeout(function(){turnOff();},3000);
});
