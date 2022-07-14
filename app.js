$('#name').blur(function ()
{
    nameValidation()
});


function nameValidation()
{
    var name = $('#name').val();
    if (name.length > 0)
    {
        var regExp = new RegExp("^[a-zA-Z. ]{3,20}$");
        if (regExp.test(name))
        {
            $('#nameError').text(' ');
            return true;
        }
        else
        {
            $('#nameError').text('Needs to 3 to 20 character & use only small or capital a to z.');
            return false;
        }
    }
    else
    {
        $('#nameError').text('Name filed is required.');
        return false;
    }
}

$('#email').blur(function ()
{
    emailValidation();
});

function emailValidation()
{
    var email = $('#email').val();
    if (email.length > 0)
    {
        var regExp = new RegExp("^([a-zA-Z0-9_.-])+\\@(([a-zA-Z0-9-])+\\.)+([a-z]){2,4}$");
        if (regExp.test(email))
        {
            $('#emailError').text(' ');
            return true;
        }
        else
        {
            $('#emailError').text('Invalid email format.');
            return false;
        }
    }
    else
    {
        $('#emailError').text('Email filed is required.');
        return false;
    }
}

$('#password').blur(function ()
{
    passwordValidation();
});

function passwordValidation()
{
    var password = $('#password').val();
    if (password.length > 0)
    {
        var regExp = new RegExp("^[A-Za-z0-9\\d=!\\-@._*]{6,10}$");
        if (regExp.test(password))
        {
            $('#passwordError').text(' ');
            return true;
        }
        else
        {
            $('#passwordError').text('Invalid password format.');
            return false;
        }
    }
    else
    {
        $('#passwordError').text('Password filed is required.');
        return false;
    }
}

$('#confirmPassword').blur(function ()
{
    confirmPassword();
});
function confirmPassword()
{
    var confirmPassword = $('#confirmPassword').val();
    var password = $('#password').val();
    if (confirmPassword == password)
    {
        $('#confirmPasswordError').text(' ');
        return true;
    }
    else
    {
        $('#confirmPasswordError').text('Password & confirm password are not same');
        return false;
    }
}

$('#registrationForm').submit(function () {
    if (nameValidation() == true && emailValidation() == true && passwordValidation() == true && confirmPassword() == true)
    {
        return true;
    }
    else
    {
        return false;
    }
});