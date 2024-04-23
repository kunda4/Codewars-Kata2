function alphabetPosition(text) {
  
    let result = "";
     for (let i = 0; i < text.length; i++) {
         let char = text[i];
         if (char.match(/[a-z]/i)) {
             let position = char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
             result += position + " ";
         }
     }
     // Remove the trailing space
     return result.trim();
 
 }