//module.exports.getDate=getDate;
//module.exports.getDay=getDay;
exports.getDate=function(){
  const d = new Date();
  const option={
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
//  let day=d.toLocaleString('en-US',option);
//return day;
return d.toLocaleString('en-US',option);
}
exports.getDay=function(){
  const d = new Date();
  const option={
    weekday: 'long',
  };
  //let day=d.toLocaleString('en-US',option);
//return day;
return d.toLocaleString('en-US',option);
}
