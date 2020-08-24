async function demo (){
     console.log(111)
     return 1
}

demo().then((val)=>{
  console.log(val)
})

console.log(222)