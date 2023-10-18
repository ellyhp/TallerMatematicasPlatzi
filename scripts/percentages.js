    
    const btnDiscount = document.getElementById('btnDiscount');
    const btnDiscountCoupon = document.getElementById('btnDiscountCoupon');
    const btnHaveCopun = document.getElementById('btnHaveCopun');

    const contentDiscount = document.getElementById('contentDiscount');
    const contentCoupon = document.getElementById('contentCoupon');

    btnHaveCopun.addEventListener('click', () =>{
        contentCoupon.classList.remove('hidden');
        contentDiscount.classList.add('hidden');

        btnHaveCopun.innerText = 'I do not have a coupon '
       
    });

    btnHaveCopun.addEventListener('dblclick', () =>  {
        contentCoupon.classList.add('hidden');
        contentDiscount.classList.remove('hidden');

        btnHaveCopun.innerText = 'I have a coupon ';
    });

    btnDiscount.addEventListener('click', discount);
    btnDiscountCoupon.addEventListener('click', couponFunction);


    function discount(){

        const price = document.getElementById('price').value;
        const discount = document.getElementById('discount').value;
        const resultDiscuount = document.getElementById('resultDiscuount');
        const alertDiscount = document.getElementById('alertDiscount');
        const alertDiscountContent = document.getElementById('alertDiscountContent');


        if(!price == 0){
            
            alertDiscountContent.classList.add('hidden');

            const discountTotal= (discount / 100) * price;
            const discountResult =   price - discountTotal;
    
            resultDiscuount.innerText = "You will pay: " + discountResult  + "$";

            if(discount > 100){

                resultDiscuount.innerText = '';
    
                alertDiscountContent.classList.remove('hidden');
                alertDiscount.innerText = "A percentage greater than 100% cannot be calculated."
    
            }

        }else{
            
            resultDiscuount.innerText = '';

            alertDiscountContent.classList.remove('hidden');
            alertDiscount.innerText = "you can't leave empty fields"
        }

       
    }

    function couponFunction(){

        const priceCoupon = document.getElementById('priceCoupon').value;
        const alertCoupun = document.getElementById('alertCoupun');
        const alertComponent = document.getElementById('alertComponent');
        const couponInput = document.getElementById('couponInput').value;
        const resultCoupon = document.getElementById('resultCoupon');
        const resultContentCoupon = document.getElementById('resultContentCoupon');

        const couponObjet  = {
            ellygmr : 30,
            ikselly : 20,
            jejo : 50
        }      

        const couponArray = Object.entries(couponObjet);

        const searchCoupon = couponArray.find( (couponParameter) =>  { return couponParameter[0] === couponInput } )


        if(searchCoupon){

            alertComponent.classList.add('hidden')
            resultContentCoupon.classList.remove('hidden');

            let coupunTotal = (searchCoupon[1] / 100) * priceCoupon;
            let resultCoupun = priceCoupon - coupunTotal;

            resultCoupon.innerText = "You will pay: " + resultCoupun + "$";
        }else{
            
            alertComponent.classList.remove('hidden')
            resultContentCoupon.classList.add('hidden');

            return alertCoupun.innerText =  'That discount code does no exist ';

        }


    }




