function calculate()
{
    p=document.getElementById("p").value;
    y=document.getElementById("y").value;
    r=document.getElementById("r").value;
    check=document.getElementById("check");
    check.innerHTML="The interest is "+(p*y*r/100);
}