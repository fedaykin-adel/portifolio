
export default (img)=>{
    if (process.env.NODE_ENV === 'production'){
        return '/portifolio' + img 
    }
    return img
}