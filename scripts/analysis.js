
    const contentUsersSalary = document.getElementById('contentUsersSalary');
    const selectCompany = document.getElementById('selectCompany');

    const btnMedianUser = document.getElementById('btnMedianUser');
    const btnCalculateCompany = document.getElementById('btnCalculateCompany');

    const CompanyUserName = document.getElementById('CompanyUserName');

    btnMedianUser.addEventListener('click', DataUser);
    btnCalculateCompany.addEventListener('click', DataCompany);


function searchPerson (PersonArray){
    return salarios.find( person => person.name == PersonArray);
}

function DataUser(){

    const nameUsertxt = document.getElementById('nameUsertxt');
    const lastJobUser = document.getElementById('lastJobUser');
    CompanyUserName.innerHTML = '';

    const namePerson = getOption();
    const userArray  = searchPerson(namePerson);
    const userJobs = userArray.trabajos;
    const userLastJobs = userJobs[userJobs.length - 1].empresa;


    let userNameJobArray = [];
    for (let i = 0; i < userJobs.length; i++) {
        userNameJobArray.push(userJobs[i].empresa)
    }

    let userSalayJobArray = [];
    for (let i = 0; i < userJobs.length; i++) {
        userSalayJobArray.push(userJobs[i].salario)
    }

    const uniqueCompaniesSet = new Set(userNameJobArray);
    const uniqueCompaniesArray = [...uniqueCompaniesSet];


    for (let i = 0; i < uniqueCompaniesArray.length; i++) {

      

        const divElement = document.createElement('div');
        divElement.className = 'flex items-top justify-center space-x-4 gap-3';
    
        divElement.innerHTML = `
            <div class="flex items-top justify-center space-x-4 gap-3 w-full">
                <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src="img/company-icon.png" alt="Neil image">
                </div>
                <div class="flex-1 min-w-0">
                    <div class="text-sm font-medium text-gray-900 truncate dark:text-gray-500 companyNameID">
                    </div>
                    <p class="text-sm text-gray-500 truncate">
                        <ul class="list-disc list-inside dark:text-gray-400 p-2 li-year-salary flex justify-between flex-col items-between">
                        </ul>
                    </p>
                </div>
            </div>
        `;
    
        const companyNameElements = divElement.querySelector('.companyNameID');
        companyNameElements.innerText = uniqueCompaniesArray[i];
    
        CompanyUserName.appendChild(divElement);
    
        // Ahora, en el mismo bucle, procesamos userJobs para esta compañía.
        const ulList = divElement.querySelector('.li-year-salary');
        for (let j = 0; j < userJobs.length; j++) {
            if (userJobs[j].empresa === uniqueCompaniesArray[i]) {
                const liChildren = document.createElement('li');
                liChildren.className = 'text-sm flex justify-between';
    
                liChildren.innerHTML = `
                    <p>${userJobs[j].year}</p>
                    <p>-</p>
                    <span class="text-green-600 font-bold">$${userJobs[j].salario}</span>
                `;
    
                ulList.appendChild(liChildren);
            }
        }
    }

    nameUsertxt.innerText = namePerson;
    lastJobUser.innerText = userLastJobs;

    addContentSalary(userSalayJobArray);

}


function addUsers(){

    let arrayName = [];
    for (const user of salarios) {
        arrayName.push(user.name)
    }

    arrayName.forEach((item) => {
        const option = document.createElement('option');
        option.className = 'nameUsersAdd';
        option.textContent = item;
        option.value = item;
        contentUsersSalary.appendChild(option);
      });

    return arrayName;

}
addUsers()

function DataCompany(){

    const companiesData = {};

    for (let i = 0; i < salarios.length; i++) {
      const trabajos = salarios[i].trabajos;
      for (let j = 0; j < trabajos.length; j++) {
        const company = trabajos[j].empresa;
        const salary = trabajos[j].salario;
        const year = trabajos[j].year;
  
        if (!companiesData[company]) {
          companiesData[company] = {
            years: [],
            salaries: [],
          };
        }
  
        companiesData[company].years.push(year);
        companiesData[company].salaries.push(salary);
      }
    }

  
    const nameCompany = Object.keys(companiesData);


    nameCompany.forEach((object) => {
        const optionCompany = document.createElement('option');
        optionCompany.className = 'nameCompanyAdd';
        optionCompany.textContent = object;
        optionCompany.value = object;
        selectCompany.appendChild(optionCompany);
      });

    const onlyNameCompany = getOptionCompany();

    let arrayCompanyName =  [];
    for (const company in companiesData) {
        arrayCompanyName.push(company);
      }

      for (let index = 0; index < arrayCompanyName.length; index++) {

        if(onlyNameCompany == arrayCompanyName[index]){

            const nameCompanyTxt = document.getElementById('name-company');

            while (nameCompanyTxt.firstChild) {
                nameCompanyTxt.removeChild(nameCompanyTxt.firstChild);
              }
          

            const h4NameCompanyTxt = document.createElement('h4');
            h4NameCompanyTxt.className = 'text-gray-600';
            h4NameCompanyTxt.textContent =arrayCompanyName[index] ;
            nameCompanyTxt.appendChild(h4NameCompanyTxt);

            Object.entries(companiesData).forEach((entry) => {
                const companyName = entry[0]; 
                const companyData = entry[1]; 
                const companySalaries = companyData.salaries;
                const companyYears = companyData.years;
  
                if(companyName == onlyNameCompany){

                    const divUlCompanySalary = document.getElementById('divUlCompanySalary');

                    while (divUlCompanySalary.firstChild) {
                        divUlCompanySalary.removeChild(divUlCompanySalary.firstChild);
                      }                      

                    const ulElement = document.createElement('ul');
                    ulElement.className = 'list-disc list-inside dark:text-gray-400 p-2 overflow-x-auto';

                    const SalaryForYear = {};

                    for (let i = 0; i < salarios.length; i++) {
                    const trabajos = salarios[i].trabajos;
                    for (let j = 0; j < trabajos.length; j++) {
                        const company = trabajos[j].empresa;
                        const salary = trabajos[j].salario;
                        const year = trabajos[j].year;

                        if (!SalaryForYear[year]) {
                            SalaryForYear[year] = [];
                        }

                        SalaryForYear[year].push(salary);
                    }
                    }

                    const values = Object.values(SalaryForYear);
                    const arrayOfArrays = Array.from(values);
                                   
                    const uniqueYears = new Set(companyYears);
                    const uniqueYearsArray = [...uniqueYears];


                    for(let i=j = 0; j < uniqueYearsArray.length; j++){

                            ulElement.innerHTML += `
                            <li class="text-sm flex justify-between">
                                <p>${uniqueYearsArray[j]}</p>
                                <p>-</p>
                                <span class="text-green-600 font-bold">${arrayOfArrays[j]}</span>
                            </li>
                            `;
                    }

                    divUlCompanySalary.appendChild(ulElement);             
                
                }

              });

         }

      }

      

    //   console.log(arrayCompanyName);
    //   console.log(companiesData);
    //   console.log(getOptionCompany());

}
DataCompany()


function getOption() {
    const selectedValue = contentUsersSalary.value;
    return selectedValue;

}

function getOptionCompany(){
    const SelectValueCompany = selectCompany.value;
    return SelectValueCompany;
}

