
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');


        inputRub.addEventListener('input', ()=> {

            function getRequest() {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                   

                    request.open('GET', '/js/current.json');
                   
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    request.onload = ()=> {
                        resolve(request.response);
                    }
                    request.send();
                    
                  })

            }
            getRequest().then(data => console.log(data));
            
        });

        //             let data = JSON.parse(request.response);
        //             console.log('3');
        //             console.log(request.readyState);
        //             console.log(request.status);
        //             console.log(request.response);
        //             request.addEventListener('readystatechange', function() {
        //                 if (request.readyState === 4 && request.status == 200) {
                            
        //                     resolve();
        //                 } else {
                          
        //                     reject();
                            
        //                 }
        //             });

                
        //     });
        // }

        //     getRequest()
        //         .then(()=> {
                    
        //             inputUsd.value = inputRub.value / data.usd;
        //             console.log("Ok");
        //         })
        //         .catch(()=> {
                 
        //             inputUsd.value = "Что-тоoo пошло не так!";
                  
        //         })

        // });






        // inputRub.addEventListener('input', () => {
        //     let request = new XMLHttpRequest();

        //     request.open('GET', 'js/current.json');
        //     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        //     request.send();
            
        //     request.addEventListener('readystatechange', function() {
        //         if (request.readyState === 4 && request.status == 200) {
        //             let data = JSON.parse(request.response);
        //                 console.log(request.readyState);
        //             inputUsd.value = inputRub.value / data.usd;
        //         } else {
        //             inputUsd.value = "Что-то пошло не так!";
        //         }
        //     });

        // });