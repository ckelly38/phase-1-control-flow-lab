function scuberGreetingForFeet(ridelen){
  if (ridelen < 400 || ridelen == 400)
  {
    return "This one is on me!";
  }
  else if (ridelen > 400 && (ridelen < 2000 || ridelen == 2000))
  {
    return "That will be twenty bucks.";
  }
  else if (ridelen > 2000 && ridelen < 2500)
  {
    return "I will gladly take your thirty bucks.";
  }
  else
  {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  return (city === "NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tip){
  switch(true)
  {
    case tip === "generous":
      return "Thank you so much.";
    case tip === "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
