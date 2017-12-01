$(document).ready(function(){
    $("#secondaryMenu").hide();

});
var menuOn = false;
var openOn = 0;
function toogleSecondaryMenu(id)
{
    switch(id)
    {
        case 1:
            if(openOn == 1 || openOn == 0)
            {
                if(menuOn)
                {
                    $("#secondaryMenu").slideUp();
                    openOn = 0;
                    menuOn = !menuOn;
                } 
                else 
                {
                    $("#secondaryMenu").slideDown();
                    openOn = 1;
                    menuOn = !menuOn;
                }
            }
            else openOn = 1;
            
            
            break;
        case 2:
            if(openOn == 2 || openOn == 0)
            {
                if(menuOn)
                {
                    $("#secondaryMenu").slideUp();
                    openOn = 0;
                    menuOn = !menuOn;
                } 
                else 
                {
                    $("#secondaryMenu").slideDown();
                    openOn = 2;
                    menuOn = !menuOn;    
                }
            }
            else openOn = 2;

            break;
        case 3:
            if(openOn == 3 || openOn == 0)
            {
                if(menuOn)
                {
                    $("#secondaryMenu").slideUp();
                    openOn = 0;
                    menuOn = !menuOn;
                } 
                else 
                {
                    $("#secondaryMenu").slideDown();
                    openOn = 3;
                    menuOn = !menuOn;    
                }
            }
            else openOn = 3;

            break;
        case 4:
            if(openOn == 4 || openOn == 0)
            {
                if(menuOn)
                {
                    $("#secondaryMenu").slideUp();
                    openOn = 0;
                    menuOn = !menuOn;
                } 
                else 
                {
                    $("#secondaryMenu").slideDown();
                    openOn = 4;
                    menuOn = !menuOn;    
                }
            }
            else openOn = 4;

            break;
        case 5:
            if(openOn == 5 || openOn == 0)
            {
                if(menuOn)
                {
                    $("#secondaryMenu").slideUp();
                    openOn = 0;
                    menuOn = !menuOn;
                } 
                else 
                {
                    $("#secondaryMenu").slideDown();
                    openOn = 5;
                    menuOn = !menuOn;
                }
            }
            else openOn = 5;
            
            break;
    }
}

function homeIMG(imgSelected, stateChange)
{
    if(stateChange == 0)
    {
        switch(imgSelected)
        {
            case 1:
                document.getElementById("hImg2").style = "filter: grayscale(100%);"
                document.getElementById("hImg3").style = "filter: grayscale(100%);"
                document.getElementById("hImg4").style = "filter: grayscale(100%);"
                break;
            case 2:
                document.getElementById("hImg1").style = "filter: grayscale(100%);"
                document.getElementById("hImg3").style = "filter: grayscale(100%);"
                document.getElementById("hImg4").style = "filter: grayscale(100%);"
                break;
            case 3:
                document.getElementById("hImg1").style = "filter: grayscale(100%);"
                document.getElementById("hImg2").style = "filter: grayscale(100%);"
                document.getElementById("hImg4").style = "filter: grayscale(100%);"
                break;
            case 4:
                document.getElementById("hImg1").style = "filter: grayscale(100%);"
                document.getElementById("hImg2").style = "filter: grayscale(100%);"
                document.getElementById("hImg3").style = "filter: grayscale(100%);"
                break;
        }
    }
    else
    {
        switch(imgSelected)
        {
            case 1:
                document.getElementById("hImg2").style = "";
                document.getElementById("hImg3").style = "";
                document.getElementById("hImg4").style = "";
                break;
            case 2:
                document.getElementById("hImg1").style = "";
                document.getElementById("hImg3").style = "";
                document.getElementById("hImg4").style = "";
                break;
            case 3:
                document.getElementById("hImg1").style = "";
                document.getElementById("hImg2").style = "";
                document.getElementById("hImg4").style = "";
                break;
            case 4:
                document.getElementById("hImg1").style = "";
                document.getElementById("hImg2").style = "";
                document.getElementById("hImg3").style = "";
                break;
        }
    }
}
function closeSecondaryMenu()
{

    $("#secondaryMenu").slideUp();
    openOn = 0;
    menuOn = !menuOn;

}