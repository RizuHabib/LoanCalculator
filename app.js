const calculateBtn = document.querySelector
    ('.button');
const loanAmount = document.querySelector
    ('.loanAmount').children[1];
const Interest = document.querySelector('.Interest').children[1];
const YearsToRepay = document.querySelector('.YearsToRepay').children[0];
const MonthlyPayment = document.querySelector('.MonthlyPayment');
const TotalPayment = document.querySelector('.TotalPayment');
const TotalInterest = document.querySelector('.TotalInterest');
const Results = document.querySelector('.Results');

calculateBtn.addEventListener('click', runEvent);
function runEvent() {
    let value = parseFloat(loanAmount.value) * parseFloat(Interest.value) * parseFloat(YearsToRepay.value) / 100;
    console.log(" value ", value);

    if (isFinite(value) && isFinite(YearsToRepay.value)) {


        TotalPayment.children[1].value = (parseFloat(value) + parseFloat(loanAmount.value)).toFixed(2);

        MonthlyPayment.children[1].value = (TotalPayment.children[1].value / (YearsToRepay.value * 12)).toFixed(2);

        TotalInterest.children[1].value = parseFloat(value).toFixed(2);
        document.querySelector('.loading').style.display = 'block';
        setTimeout(displayResult, 300);

    }
    else {
        let heading = document.querySelector('.heading');
        let div = document.createElement('div');
        div.appendChild(document.createTextNode('Error,Please check input'));
        div.style.color = 'brown';
        div.style.background = 'rgba(253, 195, 195, 0.95)';
        let upper = document.querySelector('.upper');
        let main = document.querySelector('.main');
        div.className = 'errorDiv';
        div.style.width = '90%';
        div.style.marginTop = '10px';
        div.style.height = '40px';
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        main.insertBefore(div, upper);
        setTimeout(eraseError, 3000);

    }

}
function eraseError() {
    document.querySelector('.errorDiv').remove();
}
function displayResult() {
    document.querySelector('.Results').style.display = 'block';
    document.querySelector('.loading').style.display = 'none';
}