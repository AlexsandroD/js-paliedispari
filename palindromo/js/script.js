
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

// palindromo con reverse 

// let parola = prompt('inserisci una parola ');

// if(parola == reverse(parola)){
//     console.log(parola + 'questa parola é palindroma')
// }else{
//     console.log(parola + ' questa parola non é palindroma')
// }

// function reverse(s){
//     return s.split("").reverse().join("");
// }



let parola = prompt('inserisci una parola ');

if(isPalindromo(parola)){
    console.log('la parola é palindromo ');
}else{
    console.log('la parola non é palindroma ');
}



function isPalindromo(word){
    for(let i = 0; i < word.length/2; i++){
        if(word[i] != word[word.length -(i+1)]){
            return false;
        } 
    } 
    return true;
}                                                                                        

// function power (base,esponente){
//     for(  = 0 ; i < esponente; i++){ 
//         base = base * base;
        
//     }
//    return base;
// }

// const b = 2;
// const p = 10;
// let res = power(b,p);

// console.log(res);






