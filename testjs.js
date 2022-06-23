
function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Shri Janani" && password == "Janani@11")
    {
        
        return redir()
    }
    else
    {
        alert("Access denied. Valid username and password is required.");
}
}
function redir()
{
    window.location.href = 'testreg.html';
}