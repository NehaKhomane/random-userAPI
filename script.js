var btn=document.querySelector('.header button')
var loading= document.querySelector('.container .loading')
var info=document.querySelector('.container .info')
var actionatext=document.querySelector('.container .loading p')

btn.addEventListener('click',()=>{
    if(loading.style.display==='none'){
        info.style.opacity='0'
        info.style.display='none'
        loading.style.display='block'
        loading.style.opacity='1'
    }
    btn.setAttribute('disabled',true)
    actionatext.innerHTML='Loading user..'
    setTimeout(async()=>{
        let response=await fetch('https://randomuser.me/api/')
        let data=await response.json()
        console.log(data.results)
        if(data){
            btn.removeAttribute('disabled')
            loading.style.display='none'
            loading.style.opacity='0'
            info.style.opacity='1'
            info.style.display='block'
            
            let profile=document.querySelector('#profile')
            let fullName=document.querySelector('#fullName')
            let Address=document.querySelector('#Address')
            let emailAddress=document.querySelector('#emailAddress')
            let DOB =document.querySelector('#DOB')
            let Age=document.querySelector('#Age')

            let imgsrc=data.results[0].picture.large
            let fullname=data.results[0].name.title +'.'+data.results[0].name.first+' '+data.results[0].name.last
            let address = data.results[0].location.street.number+','+data.results[0].location.street.name+' '+data.results[0].location.city+','+data.results[0].Address
            location.state+','+data.results[0].location.country+'-'+data.results[0].location.postcode

        let email=data.results[0].email
        let dob=new Date(data.results[0].dob.date)
        let age =data.results[0].dob.age

        profile.setAttribute('src',imgsrc)
        fullName.innerHTML=fullname
        Address.innerHTML=address
        emailAddress.innerHTML=email
Age.innerHTML=age+'year old'
DOB.innerHTML=dob.toLocaleDateString()
        }
    },1000)

})