export default function BookList() {
   let pageTitle = "Books I've Read";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/f/f8/JourneyToTheEast.jpg";
   let book2 = "https://upload.wikimedia.org/wikipedia/en/2/22/Exhalation_-_Stories.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626710416i/58446227.jpg";

   return (
      <div style={{marginBottom: "40px"}}>
         <h3>{pageTitle}</h3>
         <img src={book1} width={150} height={220} alt="Journey to the East by Hermann Hesse" />
         <img src={book2} width={150} height={220} alt="Exhalation by Ted Chiang" />
         <img src={book3} width={150} height={220} alt="Sea of Tranquility by Emily St. John Mandel" />
      </div>      
   );
}