
let starsEl = document.querySelectorAll('#stars img')
let emojisEl = document.querySelectorAll('#emojis img')
let showEmoji = document.querySelector('#show-emoji')

starsEl.forEach((starEl, index) =>{
    starEl.addEventListener('click', (e) =>{
        updateRatings(index)
    });
});


let updateRatings = function (index) {
    starsEl.forEach((starEl, idx) => {
        if(idx < index+1){
            starEl.classList.add('active')
        }else {
            starEl.classList.remove('active')
        }
    })

    emojisEl.forEach((emoji, idex) => {
       if (idex === index) {
           emoji.style.display = 'block'
           showEmoji.appendChild(emoji)
       }else {
           emoji.style.display = 'none';
       }
    })
}
updateRatings(0)











    // checkBoxEl.forEach((chkBox, index) =>{
    //     chkBox.addEventListener('change', (e) =>{

    //          if(e.target.checked){
    //             console.log("item just been checked")
    //             for(let i=0; i < checkBoxEl.length; i++){
    //                 if(i < index){
    //                     checkBoxEl[i].checked = true;
    //                 }
    //             }
            

    //          }
    //          else{
    //              console.log("item has been unchecked")
    //              for(let i=0; i < checkBoxEl.length; i++){
    //                 if(i < index){
    //                     checkBoxEl[i].checked = true;
    //                     e.target.checked = true
    //                 }else{
    //                     checkBoxEl[i].checked = false;
    //                 }
    //             }

    //          }
    //      });
    //  });

     






