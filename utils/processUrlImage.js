// let trataImage 
export default (img)=>{
    return process.env.NODE_ENV === 'production' ? '/portifolio' : '' + img

}