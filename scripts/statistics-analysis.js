
function medianUsers(arrayNumber){

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


        return evenTotal;

    }else if(odd(arrayOrder)){

        oddTotal = Math.floor(arrayOrder.length / 2);
        oddResult = arrayOrder[oddTotal];

        resultMeanInput.innerText = oddResult;

        return oddResult;

    }



}

function nextSalary(arrayNumber){

    let percentagesIncrease = [];
    for (let i = 1; i < arrayNumber.length; i++) {
        let deduct = ( (arrayNumber[i])  - (arrayNumber[i - 1]));
        let percentages = (deduct  / (arrayNumber[i - 1]));
        percentagesIncrease.push(percentages);

    }

    let result = ((arrayNumber[arrayNumber.length -1]) * medianUsers(percentagesIncrease));
    let increase = ((arrayNumber[arrayNumber.length -1]) + (result));

    return increase;

}

function addContentSalary(salaryUser){
    
    const contentMedian = document.getElementById('contentMedian');
    contentMedian.innerHTML = ``;

    const trMedian = document.createElement('tr');
    trMedian.className = 'bg-white border-b dark:bg-white dark:border-gray-300';

    trMedian.innerHTML = `
        <td class="px-6 py-4" id='medianUser'>
        ${medianUsers(salaryUser)}
        </td>
        <td class="px-6 py-4" id='nextSalaryUser'>
            ${nextSalary(salaryUser)}
        </td>
    `;
    contentMedian.appendChild(trMedian);

}