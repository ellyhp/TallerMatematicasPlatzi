
    const plus = document.getElementById('plus');
    const newInput = document.getElementById('newInput');
    const remove = document.getElementById('remove');

    const resultMeanContent = document.getElementById('resultMeanContent');
    const resultMeanInput = document.getElementById('resultMeanInput');
    const alertStatistics = document.getElementById('alertStatistics');

    const resultStatistics = document.getElementById('resultStatistics');

    plus.addEventListener('click', addInput);
    remove.addEventListener('click', removeInput);
    


    function addInput(){

        let div = document.createElement('div');
        div.innerHTML = `<input value='0' type="number" min="0"" class="inputStatistics border inputRemove border-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  shadow-lg shadow-blue-500/50" placeholder="value"  required>`;
        newInput.appendChild(div);

       
    }

    function removeInput(){
        
        let divToRemove = document.querySelector('.inputRemove');

        if (divToRemove) {

            divToRemove.parentNode.removeChild(divToRemove);
          
        }
    }



    function inputsContent(){
        
        let inputStatistics = document.querySelectorAll('.inputStatistics');

        let numberNewArray = [];
        inputStatistics.forEach((input) => {
            
            let numbers = input.value;
            let numbersArrays = Array.from(numbers);
            let newArray = numbersArrays.join('');

            numberNewArray.push(newArray);           

        });

       return numberNewArray;

    }


    function mean(){

        let arrayInputs =  inputsContent();
        const sumInputs = arrayInputs.reduce( (a,b) => parseInt(a) + parseInt(b) );
        const meanResult = sumInputs / arrayInputs.length;

        if(meanResult > 0){
            resultMeanContent.classList.remove('hidden');
            alertStatistics.classList.add('hidden');
            resultMeanInput.innerText = meanResult;
        }else{
            alertStatistics.classList.remove('hidden');
            resultMeanContent.classList.add('hidden');
        }

         resultStatistics.addEventListener('click', mean);


    }
 

    function median(){


        let arrayInputs =  inputsContent();
        let arrayNumber = [];

    
        for(let i = 0; i < arrayInputs.length; i++){
            arrayNumber.push(parseInt(arrayInputs[i]))
        }

        arrayOrder = arrayNumber.sort( (a,b) => a - b);

        resultStatistics.addEventListener('click', median);


        function even(arrayOrder){
            return !(arrayOrder.length % 2);
        }
        
        function odd(arrayNumber){
            return (arrayOrder.length % 2);
        }


        if(even(arrayOrder))  {
           
            let even1 = Math.floor(arrayOrder.length / 2);
            let even2 = Math.floor(arrayOrder.length / 2) - 1;
            evenTotal = (arrayOrder[even1] + arrayOrder[even2]) / 2;

            resultMeanContent.classList.remove('hidden');
            resultMeanInput.innerText = evenTotal;

        }else if(odd(arrayOrder)){

            oddTotal = Math.floor(arrayOrder.length / 2);
            oddResult = arrayOrder[oddTotal];

            resultMeanContent.classList.remove('hidden');
            resultMeanInput.innerText = oddResult;
        }


        resultStatistics.addEventListener('click', median);



    }


    function mode(){

        let arrayInputs =  inputsContent();
        let arrayNumber = [];

        for(let i = 0; i < arrayInputs.length; i++){
            arrayNumber.push(parseInt(arrayInputs[i]))
        }

        let frequencyMap = {};
        for (let i = 0; i < arrayNumber.length; i++) {
            let num = arrayNumber[i];
            if (frequencyMap[num]) {
                frequencyMap[num]++;
            } else {
                frequencyMap[num] = 1;
            }
        }

        let frequencyMapArray = Object.entries(frequencyMap).map(quantity => [quantity[0], quantity[1]])

        arrayOrder = frequencyMapArray.sort( (a,b) => a[1] - b[1]);

        modeResult = arrayOrder[arrayOrder.length - 1];

        resultMeanContent.classList.remove('hidden');
        resultMeanInput.innerText = modeResult[0];

        resultStatistics.addEventListener('click', mode);

    }


    selectedRadio()
    function selectedRadio(){

        const radioInput = document.querySelectorAll("input[name='list-radio']");

        function findSelect(){
            let selected = document.querySelector("input[name='list-radio']:checked").value;

            if(selected == 'radio1'){
               median();
            }else if(selected == 'radio2'){
                mean();
            }else if(selected == 'radio3'){
                mode();
            }

        }

        let selectedRadio = radioInput.forEach( radioInput => {
            radioInput.addEventListener("change",
            findSelect);
        });

    }




  