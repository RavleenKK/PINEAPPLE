import logo from '../images/logo_black.png';
function Razorpay({amount , order_id}){
    var options = {
        "key": "rzp_test_uY9lNpacaDbu5m", // Enter the Key ID generated from the Dashboard
        "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Pineapple fashion",
        "description": "Test Transaction",
        "image": logo,
        "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            console.log(response);
        },
        "prefill": {
            "name": "Mayank Sharma",
            "email": "ms772254@gmail.com",
            "contact": "8750355389"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    });
    document.getElementById('rzp-button1').onclick = function(e){
        rzp1.open();
        e.preventDefault();
    }
}