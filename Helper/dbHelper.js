module.exports.formateMongoData = (data)=>{
    let newDataList = [];
    if(Array.isArray(data)){
        for(value of data){
            newDataList.push(value.toObject());
        }
        return newDataList;
    }
    return data.toObject();
}