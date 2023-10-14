        let array3 = JSON.parse(localStorage.getItem('array3')) || [];
        function renderItemArray3(){
            let todoHtml='';
            for(i=0; i<array3.length;i++){
                todoHtml+= `<p class="name">${array3[i].name}</p> 
                <p class="date">${array3[i].date}</p>
                <button class="delete-button" onclick="
                    array3.splice(${i},1);
                    renderItemArray3();
                    localStorage.removeItem('array3');
                    ">Delete</button>`;
            }

            document.querySelector('.display3').innerHTML=todoHtml;

            
        }

        function addItemToArray3(){
            let elem = document.querySelector('.placeholder3');
            let elem2 = document.querySelector('.date-class');
            array3.push({name: elem.value,
                        date: elem2.value});
            localStorage.setItem('array3', JSON.stringify(array3));

            elem.value=null;
            elem2.value=null;
            renderItemArray3();
        }