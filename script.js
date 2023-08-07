document.querySelector('.loan_form').addEventListener('submit', calculateResults);
function calculateResults(e){
    // alert('Fix issues')
    console.log('Fix issues');
    const amount = document.getElementById('loan_amount');
    const interest = document.getElementById('loan_interest');
    const years = document.getElementById('repayment_years');
    const monthlyPayment = document.getElementById('monthly_payment');
    const totalPayment = document.getElementById('total_payment');
    const totalInterest = document.getElementById('total_interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value)*12;

    //compute monthly payment
    const x  = Math.pow(1+calculatedInterest, calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value =((monthly * calculatedPayment) - principal).toFixed(2)
    } else{
        showError('Please check your numbers')
    }





    e.preventDefault();
}

function showError(error){
    //create div
    const errorDiv = document.createElement('div');
    errorDiv.style.background = '#FADAD8'
    errorDiv.style.color = '#AE867A'
    errorDiv.style.padding = '10px 8px'
    errorDiv.style.textAlign = 'center'
    //add class
    errorDiv.className = 'danger';
    //Get element;
    const card = document.querySelector('.card');
    const heading = document.querySelector('h1')
    //Create textNode and Append to div
    errorDiv.appendChild(document.createTextNode(error));
    //Insert error before heading
    card.insertBefore(errorDiv, heading)
    setTimeout(clearError, 3000);
}
function clearError(){
    document.querySelector('.danger').remove();
}
