export default{
    getTime(time){
        if(time){
            console.log(time);
            var date = new Date(time);
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = (date.getMonth() + 1).toString();
            var strDate = date.getDate().toString();
            if (Number(month) >= 1 && Number(month) <= 9) {
                month = "0" + month;
            }
            if (Number(strDate) >= 0 && Number(strDate) <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            return currentdate;
        }
    }
}