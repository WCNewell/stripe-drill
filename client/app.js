const stripe = Stripe('pk_test_KTbKaGW7CdETzcGFc6ASKK93')
const elements = stripe.elements()

const style = {
    base: {
        color: '#32325d',
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif'",
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
            color: '#aab7c4'
        }
    },
    invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
    }
}

const card = elements.create('card', { style: style })
card.mount('#card-element')

const form = document.getElementById('payment-form')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    stripe.createToken(card).then(result => {
        stripeTokenHandler(result.token, event.target)
    })

    function stripeTokenHandler(token, form) {
        const success = document.createElement('h2')
        const paidAmount = document.querySelector('#amount').value

        success.textContent = `Your payment of ${paidAmount} dollars has been accepted.`
        form.appendChild(success)
    }
})