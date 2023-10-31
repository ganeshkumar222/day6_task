class Movie{
   constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
   } 
   getPG(arr){
      let output =[]
      for(let i =0;i<arr.length;i++)
      {
        if(arr[i].rating==="PG"){
            output.push(arr[i])
        }
      }
      return output
   }
}

const cm = new Movie("Casino Royale","Eon Productions","PG13")
const cm1 = new Movie("Casino Royale1","Eon Productions","PG1")
const cm2 = new Movie("Casino Royale2","Eon Productions","PG2")
const cm3 = new Movie("Casino Royale3","Eon Productions")
const cm4 = new Movie("Casino Royale4","Eon Productions")
const cm5 = new Movie("Casino Royale5","Eon Productions","PG6")
console.log(cm.getPG([cm1,cm2,cm3,cm4,cm5]))