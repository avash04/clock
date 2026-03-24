function nowTime(){
    const newTime=new Date();
    const hour=newTime.getHours().toString().padStart(2,0);
     const min=newTime.getMinutes().toString().padStart(2,0);
      const sec=newTime.getSeconds().toString().padStart(2,0);
      const updatedDate=`${hour}:${min}:${sec}`;
      document.getElementById('clock').textContent=updatedDate;

}
nowTime();
setInterval(nowTime,1000);