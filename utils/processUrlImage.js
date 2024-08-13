
export default (img)=>{
    if (process.env.NODE_ENV === 'production'){
        return img 
    }
    return img
}