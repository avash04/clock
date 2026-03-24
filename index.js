function nowTime(){
    const newTime=new Date();
    let hours=newTime.getHours();
    const timeSetter= hours>=12 ? "PM":"AM";
    hours= hours % 12||12;
     hours=hours.toString().padStart(2,0);
     const min=newTime.getMinutes().toString().padStart(2,0);
      const sec=newTime.getSeconds().toString().padStart(2,0);
      const updatedDate=`${hours}:${min}:${sec} ${timeSetter}`;
      document.getElementById('clock').textContent=updatedDate;

}
nowTime();
setInterval(nowTime,1000);