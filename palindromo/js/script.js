
// const parola = prompt('inserire parola');

// is_palindrome(parola);



// // function check_palindrome( str )
// // {
// //   let j = str.length -1;
// //   for( let i = 0 ; i < j/2 ;i++)
// //   {
// //     let x = str[i] ;//forward character
// //     let y = str[j-i];//backward character
// //     if( x != y)
// //     {
// //       // return false if string not match
// //       return false;
// //     }
// //   }
// //   /// return true if string is palindrome
// //   return true;
   
// // }

// // //function that print output is string is palindrome
// // function is_palindrome( str )
// // {
// //   // variable that is true ig string is pallindrome
// //   let ans = check_palindrome(str);
// //   //condition checking ans is true or not
// //   if( ans == true )
// //   {
// //     console.log("passed string is palindrome ");
// //   }
// //   else
// //   {
// //     console.log("passed string not a palindrome");
// //   }
// // }
// // // test variable

// const numeri = [1,2,3,4,5,6,7];

// //1 <6
// for(let i = 0; i < numeri.length ; i++){
//     console.log(numeri[i])//2
// } 



let parola = prompt('inserisci una parola ')
reverse(parola)

if(parola == reverse(parola)){
    console.log(parola + 'questa parola é palindroma')
}else{
    console.log(parola + ' questa parola non é palindroma')
}

function reverse(s){
    return s.split("").reverse().join("");
}
