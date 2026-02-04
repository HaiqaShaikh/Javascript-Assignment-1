let season = prompt ("Choose Your Favourite Season or Weather type.  \n 1. Summer \n 2. Winter  \n 3. Autumn \n 4. Spring \n 5. Stormy \n 6. Post-Rain \n 7. Snowy \n  ");
   season = season.toLowerCase();
if (season === "summer")
    { window.location.href = "summer.html"}

else if(season === "winter")
    { window.location.href = "winter.html"}

else if(season === "autumn")
    { window.location.href = "autumn.html"}

else if(season === "spring")
    { window.location.href = "spring.html"}

else if(season === "snowy")
    { window.location.href = "snowy.html"}

else if(season === "stormy")
    { window.location.href = "stormy.html"}

else if(season === "post-rain")
    { window.location.href = "post-rain.html"}

else{
    alert("This season is not in the list. ")
}

