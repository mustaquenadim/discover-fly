// Increment - Decrement function
function handleSitChange(sitType, isIncrease)
{
    let sitCount = Number(document.getElementById(sitType + '-count').value);
    if(isIncrease == false)
    {
        if(sitCount > 0)
        {
            sitCount--;
        }
    }
    else
    {
        sitCount++;
    }
    document.getElementById(sitType + '-count').value = sitCount;
    totalAmount();
}

// Total Amount
function totalAmount()
{
    let subTotal = Number((sitCount('first') * 150) + (sitCount('economy') * 100));
    Number(document.getElementById('sub-total').innerText = '$' + subTotal);
    let charge = Number(subTotal * 0.1);
    Number(document.getElementById('charge').innerText = '$' + charge);
    let total = Number(subTotal + charge);
    Number(document.getElementById('total').innerText = '$' + total);
    return total;
}

function sitCount(sitType)
{
    if (sitType == 'first')
    {
        let sitCount = Number(document.getElementById(sitType + '-count').value);
        return sitCount;
    }
    else
    {
        let sitCount = Number(document.getElementById(sitType + '-count').value);
        return sitCount;
    }
}

// Confirmation
function bookNow()
{
    const bookNowSec = document.getElementById('booking-area');
    bookNowSec.style.display = 'none';
    const confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'block';
    message();
}

function message()
{
    let firstBooked = Number(document.getElementById('first-booked').innerText = sitCount('first'));
    let economyBooked = Number(document.getElementById('economy-booked').innerText = sitCount('economy'));
    let amount = Number(document.getElementById('amount').innerText = totalAmount());
}