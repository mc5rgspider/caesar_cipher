/*
Julius Caesar protected his confidential information by encrypting it using a cipher. 
Caesar's cipher shifts each letter by a number of letters. 
If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y, and z would map to z, a, b and c. 
Code the Caesar Cipher in Javascript and submit it here.
/*


/*
Convert text1 into ASCII code and put it into the temp variable -> 'ascii'
Add 'text1.length' to 'ascii' and store it into ascii

1. if 'ascii' is between 97 and 122 then it is okay
2. if 'ascii' is greater than 122 then do 'ascii' - 25 and put it back to 'ascii'

Convert ascii into string and store it into text2
Do it until the loop finishes going through all the element in 'text1'
*/

function Caesar() {

    let text1 = "abcd";
    let text2 = "bcde";
    let ascii = 0;

    
    //Loop through 'before'
    for(let i = 0; i < text1.length; i++)
    {

        //Convert text1 into ASCII code and put it into the temp variable -> 'ascii'
        ascii = text1[i].charCodeAt(0);

        //Add 'text1.length' to 'ascii' and store it into 'text2'
        ascii = ascii + text1.length;

        if(ascii > 122)
        {
            ascii = ascii - 25;
        }

        //Convert ascii into string and store it into text2
        //Doesn't work
        text2[i] = String.fromCharCode(ascii);

        console.log(String.fromCharCode(ascii));
    }

}


Caesar()