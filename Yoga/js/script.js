window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab');
    let info = document.querySelector('.info-header');
    let tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

        let deadline = '2019-07-23';

        function getTimeRemaning(endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000/60) % 60),
            hours = Math.floor(t/(1000*60*60));
            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
        }

        function setClock(id, endtime) {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaning(endtime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
            }
            
        }

        setClock('timer', deadline);

        // Modal

        let more = document.querySelector('.more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close'),
            description = document.querySelector('.info');


        more.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function() {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';    
        });   
        description.addEventListener('click', function() {
            let target = event.target;
            if (target && target.classList.contains('description-btn')){
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            }
            
            
        
        });


    // Form

        let message = {
            loading: 'loading...',
            success: 'Thank you! See soon',
            failure: 'Something wrong...'
        };

        let form = document.getElementsByClassName('main-form')[0],
                formBottom = document.getElementById('form'),
                input = document.getElementsByTagName('input'),
                statusMessage = document.createElement('div');
                statusMessage.classList.add('status');

        function sendForm(elem) {
            elem.addEventListener('submit', function(e) {
                e.preventDefault();
                    elem.appendChild(statusMessage);
                    let formData = new FormData(elem);

                   function postData(data) {
                       return new Promise(function(resolve, reject) {
                            let request = new XMLHttpRequest();

                            request.open('POST', 'server.php');
                            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                            request.onreadystatechange = function() {
                                if (request.readyState < 4) {
                                    resolve();
                                } else if (request.readyState === 4) {
                                    if (request.status == 200 && request.status < 300) {
                                        resolve();
                                    } else {
                                        reject();
                                    }
                                }
                            }
                            request.send(data);
                       
            });
        }
        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                 }

        }

        postData(formData)
            .then(()=> statusMessage.innerHTML = message.loading)
            .then(()=> {
                thanksModal.style.display = 'block';
                mainModal.style.display = 'none';
                statusMessage.innerHTML = '';
            })
            .catch(()=> statusMessage.innerHTML = message.failure)
            .then(clearInput)
        });
        }
    sendForm(form);
    sendForm(formBottom);

    
        // Slider

        let slideIndex = 1,
            slides = document.querySelectorAll('.slider-item'),
            prev = document.querySelector('.prev'),
            next = document.querySelector('.next'),
            dotsWrap = document.querySelector('.slider-dots'),
            dots = document.querySelectorAll('.dot');


        showSlides(slideIndex);
        function showSlides(n) {

            if (n > slides.length) {
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach((item) => item.style.display = 'none');
            // for (let i = 0; i < item.length; i++) {
            //     slides[i].style.display = 'none';
            // }

            dots.forEach((item) => item.classList.remove('dot-active'));

            slides[slideIndex -1].style.display = 'block';
            dots[slideIndex - 1].classList.add('dot-active');
        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        prev.addEventListener('click', function() {
            plusSlides(-1);
        });

        next.addEventListener('click', function() {
            plusSlides(1);
        });

        dotsWrap.addEventListener('click', function(event) {
            for (let i = 0; i < dots.length + 1; i++) {
                if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                    currentSlide(i);
                }
            }
        });

        // Calc

        let persons = document.querySelectorAll('.counter-block-input')[0],
            restDays = document.querySelectorAll('.counter-block-input')[1],
            place = document.getElementById('select'),
            totalValue = document.getElementById('total'),
            personsSum = 0,
            daysSum = 0,
            total = 0;

            totalValue.innerHTML = 0;

            persons.addEventListener('change', function() {
                personsSum = +this.value;
                total = (daysSum + personsSum)*4000;

                if (restDays.value == '') {
                    totalValue.innerHTML = 0;
                } else {
                    totalValue.innerHTML = total;
                }
                personsSum = 0;
            });

            restDays.addEventListener('change', function() {
                daysSum = +this.value;
                // console.log(daysSum);
                total = (daysSum + personsSum)*4000;

                if (persons.value == '') {
                    totalValue.innerHTML = 0;
                } else {
                    totalValue.innerHTML = total;
                }

                  daysSum = 0;
            });

            place.addEventListener('change', function() {
                if (restDays.value == '' || persons.value == '') {
                    totalValue.innerHTML = 0;
                } else {
                    let a = total;
                    totalValue.innerHTML = a * this.options[this.selectedIndex].value;
                }

            });


         });















                 // let message = {
        //     loading: 'loading...',
        //     success: 'Thank you! See soon',
        //     failure: 'Something wrong...'
        // };
        // let form = document.querySelector('.main-form'),
        //     input = document.getElementsByTagName('input'),
        //     statusMessage = document.createElement('div');

        // statusMessage.classList.add('status');

        // form.addEventListener('submit', function(event) {
        //     event.preventDefault();
        //     form.appendChild(statusMessage);    

        //     let request = new XMLHttpRequest();

        //     request.open('POST', 'server.php');
        //     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        //     let formData = new FormData(form);

        //     let obj = {};

        //     formData.forEach(function(value, key) {
        //         obj[key] = value;
        //     });

        //     let json = JSON.stringify(obj);

        //     request.send(json);

        // request.addEventListener('readystatechange', function() {
        //     if (request.readyState < 4) {
        //         statusMessage.innerHTML = message.loading;
        //     } else if (request.readyState === 4 && request.status == 200) {
        //         statusMessage.innerHTML = message.success;
        //     } else {
        //         statusMessage.innerHTML = message.failure;
        //     }
        // });

        // for (let i = 0; i < input.length; i++) {
        //     input[i].value = '';
        // }

        // });

        // let message1 = {
        //     loading: 'loading...',
        //     success: 'Thank you! See soon',
        //     failure: 'Something wrong...'
        // };

        // let newForm = document.getElementById('form'),
        //     statusMessage1 = document.createElement('div'),
        //     input1 = newForm.getElementsByTagName('input');
        //     statusMessage1.classList.add('status');
           
        // newForm.addEventListener('submit', function(event) {
            
        //     event.preventDefault();
        //     newForm.appendChild(statusMessage1);    

        //     let request1 = new XMLHttpRequest();

        //     request1.open('POST', 'server.php');
        //     request1.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        //     let formData1 = new FormData(newForm);
          
        //     let obj1 = {};

        //     formData1.forEach(function(value, key) {
        //         obj1[key] = value;
        //     });

        //     let json1 = JSON.stringify(obj1);

        //     request1.send(json1);

        //     request1.addEventListener('readystatechange', function() {
        //         if (request1.readyState < 4) {
        //             statusMessage1.innerHTML = message1.loading;
        //         } else if (request1.readyState === 4 && request1.status == 200) {
        //             statusMessage1.innerHTML = message1.success;
        //         } else {
        //             statusMessage1.innerHTML = message1.failure;
        //         }
        //     });
    
        //     for (let i = 0; i < input1.length; i++) {
        //         input1[i].value = '';
        //     }