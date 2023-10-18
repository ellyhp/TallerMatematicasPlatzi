
    const btnRectangle = document.getElementById('btnRectangle');
    const btnResultRectangle = document.getElementById('btnResultRectangle');

    const btnTriangle = document.getElementById('btnTriangle');
    const btnResultTriangle = document.getElementById('btnResultTriangle');

    const btnCircle = document.getElementById('btnCircle');
    const btnResultCircle = document.getElementById('btnResultCircle');
    const circleContent = document.getElementById('circleContent');

    const rectangleContent = document.getElementById('rectangleContent');
    const triangleContent = document.getElementById('triangleContent');


    btnRectangle.addEventListener('click', () => {
        rectangleContent.classList.remove('hidden');
        triangleContent.classList.add('hidden');
        circleContent.classList.add('hidden');
    });

    btnTriangle.addEventListener('click', () => {
        triangleContent.classList.remove('hidden');
        rectangleContent.classList.add('hidden');
        circleContent.classList.add('hidden');
    });

    btnCircle.addEventListener('click', () => {
        triangleContent.classList.add('hidden');
        rectangleContent.classList.add('hidden');
        circleContent.classList.remove('hidden');
    });

    btnResultRectangle.addEventListener('click', rectangle);

    btnResultTriangle.addEventListener('click', triangle);

    btnResultCircle.addEventListener('click', circle)




function rectangle(){

    const baseRectangle = document.getElementById('baseRectangle').value;
    const heightRectangle = document.getElementById('heightRectangle').value;
    const resultRectangle = document.getElementById('resultRectangle');
    const alertRectangle = document.getElementById('alertRectangle');
    const alertRectangleContent = document.getElementById('alertRectangleContent');


    if(baseRectangle  == 0){

        resultRectangle.innerText = '';

        alertRectangleContent.classList.remove('hidden');
        alertRectangle.innerText = "please add a value";


    }else if(heightRectangle == 0){

        resultRectangle.innerText = '';

        alertRectangleContent.classList.remove('hidden');
        alertRectangle.innerText = "please add a value";

    }else{
        alertRectangleContent.classList.add('hidden')

        const resultArea = baseRectangle * heightRectangle;
        const resultHeight = (baseRectangle * 2) + (heightRectangle * 2);
        resultRectangle.innerText = 'Area: ' + resultArea + ' - ' + 'Perimeter: ' + resultHeight;

    }


}

function triangle(){

    const baseTriangle = document.getElementById('baseTriangle').value;
    const heightTriangle = document.getElementById('heightTriangle').value;
    const TextresultTriangle = document.getElementById('resultTriangle');
    const side1Triangle = document.getElementById('side1Triangle').value;
    const side2Triangle = document.getElementById('side2Triangle').value;
    const alertTriangleContent = document.getElementById('alertTriangleContent');

    if(baseTriangle == 0){
        alertTriangleContent.classList.remove('hidden');
    }else if(heightTriangle == 0){ 
        alertTriangleContent.classList.remove('hidden');
    }else if(side1Triangle == 0){
        alertTriangleContent.classList.remove('hidden');
    }else if(side2Triangle == 0){
        alertTriangleContent.classList.remove('hidden');
    }else{
        
        alertTriangleContent.classList.add('hidden');

        const resultTriangleArea = (baseTriangle * heightTriangle) / 2;
        const resultTrianglePerimeter =  parseFloat(baseTriangle) + parseFloat(side1Triangle) + parseFloat(side2Triangle);
    
        TextresultTriangle.innerText =  'Area: ' + resultTriangleArea + ' - ' + ' Perimeter: ' + resultTrianglePerimeter; 

    }



}

function circle(){
    

    const diameterCircle = document.getElementById('diameterCircle').value;
    const resultCircle = document.getElementById('resultCircle');
    const alertCircleContent = document.getElementById('alertCircleContent');

    if(diameterCircle == 0){

        alertCircleContent.classList.remove('hidden')

    }else{

        alertCircleContent.classList.add('hidden')

        const circleResultPerimeter = (diameterCircle * 2) * Math.PI;
        const circleResultArea = Math.PI * Math.pow(diameterCircle,2); 
    
        resultCircle.innerText = 'Area: '+  circleResultArea  +' - '  + 'Perimeter: ' + circleResultPerimeter;    
    }


}