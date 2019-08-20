let myGrade = function(current,total)
{
    let per = (current/total)*100
    //console.log(per)
    let grade = "F"
    if(per>=90)
    {
        grade= "A"
    }else if(per>=75)
    {
        grade = "B"
    }else if(per>=65)
    {
        grade = "C"
    }
    else if(per>=50)
    {
        grade ="D"
    }else if(per>=35)
    {
        grade = "E"
    }

    return grade
}

console.log(myGrade(516,600))