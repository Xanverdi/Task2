let cardsDiv=document.querySelector(".cards")
async function GetDatas() {
    try {
        let datas = await axios.get("https://northwind.vercel.app/api/suppliers")
        console.log(datas.data)



        for(let i=0; i<datas.data.length;i++){
            cardsDiv.innerHTML+=` <div class="cards">
                    <div class="card">
                        <div class="cardtop">
                            <h1 class="cc1">${datas.data[i].companyName}</h1>
                            <h3>${datas.data[i].contactName}</h3>
                            <h5>${datas.data[i].contactTitle}</h5>
                            <p>${datas.data[i].address.street}</p>
                        </div>
                        <div class="cardbuttom">
                            <button>
                                <span>More Info</span>
                            </button> 
                        </div>
                    </div>`
        }
    }
    catch(err){
        console.log(err)
    }
}
GetDatas()
