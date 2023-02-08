



let cart = document.querySelector('#cart');

cart.addEventListener('click', () => {

    let cartSection = document.querySelector('#cartSection');
    cartSection.classList.toggle("hide");
    cart.classList.toggle('fa-xmark');

    //    hide items 
    let vegItems = document.querySelectorAll('.vegitems');

    vegItems.forEach(hide => {
        hide.style.display = "none";
    })

    calculation();

    // quntity function 
    let quntity = document.querySelectorAll("#quntity");
    // let price = document.querySelectorAll('#price');
    //  let finalQuntity;

    quntity.forEach(e => {
        e.addEventListener("input", () => {

            calculation();

            //    for(let i=0;i<=quntity.length;i++){
            //      finalQuntity = quntity[i].value + price[i].value +"+";
            //    }
            //    console.log(finalQuntity);


            //     e.value;
            //     let qnt = parseInt(e.value);
            // let parent =  e.parentElement;
            // let itemvalue =parseInt(parent.querySelector('#price').value);


            // totalQuntity = (qnt*itemvalue);
            // finalQuntity += totalQuntity;
            // document.getElementById('BillAmount').value = finalQuntity;

        })
    })



})

let cartzerovalue = () => {
    document.getElementById('BillAmount').value = 0;
}


let calculation = () => {

    let bill = document.querySelectorAll('.itemAmount');
    let quntity = document.querySelectorAll("#quntity");//
    let pricebill = 0;

    //for (let i = 0; i < quntity.length; i++) {

    for (let i = 0; i < bill.length; i++) {

        pricebill = pricebill + (quntity[i].value * bill[i].value);


    }


    // }




    // pricebill = pricebill.substring(1, pricebill.length - 1);
    // let amount = eval(pricebill);
    // console.log(amount);
    document.getElementById('BillAmount').value = pricebill;



}



const removeItem = document.querySelectorAll('.removeItem');
removeItem.forEach(box => {
    box.addEventListener('click', () => {
        box.parentElement.parentElement.remove();

    })
})



let vegitems = document.querySelector('.vegitems');
let vegItem = () => {

    vegitems.style.display = "block";
}

let hide = () => {

    vegitems.style.display = "none";
}


// main logic starts here 

let cartBtn = document.querySelectorAll('.cartBtn');
cartBtn.forEach(box => {
    box.addEventListener('click', () => {
        box.style.background = "green";
        box.disabled = true;
        box.innerText = "Added To Cart";
        cart.style.color = "green";

        let parent = box.parentElement.parentElement;

        let imgSrc = parent.getElementsByTagName('img')[0].src; //img src get here
        let itemName = parent.getElementsByClassName('item-name')[0].innerText; //item name
        let itemPrice = parent.getElementsByClassName('form-control')[0].value; //item price

        let cartHtml = `<div class="cartItems">
            <div class="flex">
              <div class="cartImg">
                <img src="${imgSrc}" alt="">
             </div>
               <div class="cartHeading flex-col">
                  <h3 class="nameOfItem">${itemName}</h3>
                
                <div class="flex">
                    <input type="number" id="price" name="price" class="form-control itemAmount" value="${itemPrice}"
                        readonly>
                    <b> &#8377;</b>
                </div>

                <input type="number" class="form-control" name="quntity" id="quntity" placeholder="enter quntity" value="1" required>

                
            </div>
        </div>
        <div class="remove mt-4">
            <button type="button" class="btn btn-danger btn-lg btn-block removeItem">Remove From cart</button>
        </div>

        <hr>
    </div>`;

        let CartSection = document.querySelector('#cartSection');
        let section = document.createElement('div');
        CartSection.appendChild(section);
        section.classList.add('cartItems');
        section.innerHTML = cartHtml;

        const removeitem = document.querySelectorAll('.removeItem');
        removeitem.forEach(box => {
            box.addEventListener('click', () => {
                box.parentElement.parentElement.remove();

                cartzerovalue();
                calculation();

            })
        })

    })
})


// main logic starts here 


let nonvegItem = document.querySelector('.nonvegItem');

let NonVegItem = () => {
    nonvegItem.style.display = "block";
}

let hideNonVeg = () => {
    nonvegItem.style.display = "none";
}

let BreakFirst = document.querySelector('.vegBreakFirst');

let vegBreakFirst = () => {
    BreakFirst.style.display = "block";
}
let hideBreakFirst = () => {
    BreakFirst.style.display = "none"
}

let nonVegBreakFirst = document.querySelector('.nonVegBreakFirst');
let NonVegBreakFirst = () => {
    nonVegBreakFirst.style.display = "block";
}

let hideNonVegBreakFirst = () => {
    nonVegBreakFirst.style.display = "none";
}

let vegthali = document.querySelector('.vegthali');

let vegThali = () => {
    vegthali.style.display = "block";
}

let hideVegThali = () => {
    vegthali.style.display = "none";
}

let nonvegthali = document.querySelector('.nonvegthali');

let nonVegThali = () => {
    nonvegthali.style.display = "block";
}

let hideNonVegThali = () => {
    nonvegthali.style.display = "none";
}



let Desert = document.querySelector('.desert');

let desert = () => {
    Desert.style.display = "block";
}

let hideDesert = () => {
    Desert.style.display = "none";
}

let Sweet = document.querySelector('.sweet');

let sweet = () => {
    Sweet.style.display = "block";
}

let hideSweet = () => {
    Sweet.style.display = "none";
}








const scriptURL = 'https://script.google.com/macros/s/AKfycbzVDWE4625EnLITovbU5pzNZOJMVbGGMgqZKRWiCWQZAxDuXbBXtVr8ueoYeV5k-Eah/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
            //   form data 
            let button = document.getElementById("submit");
            button.addEventListener('click', ()=>{
                button.disabled = true;
            })
            document.querySelector('.buy').style.background = "grey";
            let order = document.getElementById('textorder');
        
            // const date = new Date();
        
            // let day = date.getDate();
            // let month = date.getMonth() + 1;
            // let year = date.getFullYear();
            
        
            // // This arrangement can be altered based on how we want the date's format to appear.
            // let currentDate = `${day}-${month}-${year}`;
            
        
            // order.value += currentDate+" ";
        
            let nameOfItem = document.querySelectorAll('.nameOfItem');
            nameOfItem.forEach(name => {
                order.value += name.innerHTML + " , ";
        
            })
        
            let quntity = document.querySelectorAll("#quntity");
            quntity.forEach(qnt => {
                order.value += " quntity:- " + qnt.value;
        
            })
        
            let bill = document.getElementById('BillAmount');
            order.value += " Total Bill :-" + bill.value + " RS ";
        
            let table = document.getElementById("table").value;
            order.value += " table number " + table;
            // formdata ends 
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Ordering food! We Will serve You Soon..."))
                .catch(error => console.error('Error!', error.message))

               
            })