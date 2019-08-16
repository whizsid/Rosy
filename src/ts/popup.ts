import Rosy from './rosy';

const inputElement =  document.getElementById('quickInput') as HTMLInputElement;
const rowElement = document.getElementById('quickRow') as HTMLElement;
const displayElement = document.getElementById('quickResult') as HTMLElement;

if(inputElement){

    const callback = function (this:HTMLInputElement){

        const value:string =  this.value;

        if(value.length>0){
            rowElement.setAttribute('style','display:unset');

            // tslint:disable-next-line: radix
            displayElement.innerHTML = Rosy(parseInt(value));
        } else {
            rowElement.setAttribute('style','display:none');
        }
    }

    inputElement.addEventListener('change',callback);
    inputElement.addEventListener('keyup',callback);
}


const switchButton = document.getElementById('switch-blue') as HTMLInputElement;

switchButton.addEventListener('change',function(this){
    console.log(this.checked)
});