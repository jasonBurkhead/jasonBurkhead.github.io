function countWord(){  
  const text =
      document.getElementById("post").value;

    const wordArray = text.split(" ");
    
    const wordCheck = wordArray.length;
    
    if(wordCheck < 50) {
      alert('Your post is a good length');
    }else{
      alert('Your post is to long.')
    }
  }