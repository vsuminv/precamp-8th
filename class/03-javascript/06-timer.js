// const aaa=()=>{
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
//     document.getElementById("qqq").innerText= token

//     setInterval(function(){
//             const num = Number(document.getElementById("bbb").innerText) -1
//             if(num >=0){
//                 document.getElementById("bbb").innerText = num
//             }     
//         },1000)
//     }

let isStarted = false
            const aaa=()=>{
                    if(isStarted === false){
                        isStarted = true
                        const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
                        document.getElementById("qqq").innerText= token

                        let time = 180
                        setInterval(function(){
                            if(time>=0){
                                const minutes = String(Math.floor(time/60)).padStart(2,"0")
                                const seconds = String(time % 60).padStart(2,"0")
                                document.getElementById("bbb").innerText = minutes + ":"+seconds
                                time = time - 1
                            }
                        },1000)
                    }else{
                        alert('이미 실행되었습니다.')
                    }
                        // setInterval(function(){
                        //     const num = Number(document.getElementById("bbb").innerText) -1
                        //     if(num >=0){
                        //         document.getElementById("bbb").innerText = num
                        //     }     
                        // },1000)
            }

// const aaa=()=>{
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
//      document.getElementById("qqq").innerText= token

//      let time = 180
//      setInterval(function(){
//          if(time>=0){
//              const minutes = Math.floor(time/60)
//              const seconds = String(time % 60).padStart(2,"0")
//              document.getElementById("bbb").innerText = minutes + ":"+seconds
//              time = time - 1
//          }
//      },1000)
// }
// 3분 만들기
let time = 180
setInterval(function(){
    if(time>=0){
        const minutes = Math.floor(time/60)
        const seconds = time % 60
        console.log(minutes + ":" + seconds)
        time = time - 1
    }
},1000)
