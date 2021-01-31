window.onload = function() {

    //initalize validation both form
    const firstForm = document.querySelectorAll('#form input');


    function validName() {
        let userData = document.getElementById('name').value;
        if (userData.length > 2) {
            document.getElementById('name').classList.remove('error');
            return true;
        } else {
            return false;
        }
    }

    let goodValid = false;
    function validEmail() {
        let userData = document.getElementById('email').value;
        

        if (userData) {
            function validateEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }

            function validate() {
                const email = userData;
                if (validateEmail(email)) {
                    document.getElementById('email').classList.remove('error');
                    console.log('good email');
                    goodValid = true;
                } else {
                    console.log('bad email');
                    document.getElementById('email').classList.add('error');
                     goodValid = false;
                }
            }

            validate();

            return goodValid;
        } else {
            return false;
        };
    }

    $("#phone").mask("+(380) 999-999-999");

    function validPhone() {

        let userData = document.getElementById('phone').value;
       
        if (userData.length > 7) {
            document.getElementById('phone').classList.remove('error');
            return true;
        } else {
            return false;
        }
    }



    function firstFormSubmit() {
        for (var i = 0; i < firstForm.length; i++) {
            firstForm[i].classList.add('error');
        }

        validName();
        validEmail();
        validPhone();

        // console.log(validName());
        // console.log(validEmail());
        // console.log(validPhone());

        if (validName() && validEmail() && validPhone()) {
            alert('validate ok');
        } else {
            console.log('validate bad');
        }
    }

    document.getElementById('submit').addEventListener('click', (event) => {
        event.preventDefault();
        firstFormSubmit();
    })


}