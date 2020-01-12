function getDay(timeInterval){
    let day = parseInt(timeInterval/(24*60*60));
    return day
}
function getHour(timeInterval){
    let hour = parseInt(timeInterval/(60*60)%24);
    return hour
}
function getMinute(timeInterval){
    let minute = parseInt(timeInterval/60%60);
    return minute
}
function getSecond(timeInterval){
    let second = parseInt(timeInterval%60);
    return second
}


function timer(dataString,interval,callback){
    let set = setInterval(() => {
        let now = new Date().getTime();
        let futureTime = new Date(dataString).getTime();
        let offsetTime = parseInt((futureTime-now)/1000);
        let out = getSecond(offsetTime);
        if(out < 1){
            callback('bang!!!')
            clearInterval(set);
        }else{
            let time = `距离结束还有${getDay(offsetTime)}天${getHour(offsetTime)}小时${getMinute(offsetTime)}分${getSecond(offsetTime)}秒`
            callback(time)
        }
    }, interval);
}

export default timer