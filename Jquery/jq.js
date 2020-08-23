
$(document).ready(() => {

    /* barras do carousel */
   
    $('.next1-jq').click(() => {
        $('.barraSlide1').css('display', 'none')
        $('.barraSlide2').css('display', 'block')
    })

    $('.prev2-jq').click(() => {
        $('.barraSlide2').css('display', 'none')
        $('.barraSlide1').css('display', 'block')
    })

    $('.next2-jq').click(() => {
        $('.barraSlide2').css('display', 'none')
        $('.barraSlide3').css('display', 'block')
    })

    $('.prev3-jq').click(() => {
        $('.barraSlide3').css('display', 'none')
        $('.barraSlide2').css('display', 'block')
    })
    
   
    // efeito botao home
    $(window).scroll(() => {
        if($(document).scrollTop() > 300) {
            $('.btn-home').css('display', 'block')
        } else {
            $('.btn-home').css('display', 'none')
        }
        
    })

    $('.prev1-jq').css('opacity', '0.3')



    
   var i = 1
   
   function clicouParaDireita() {
    i++;
        
        if (i == 2) {
            $('.carrousel').hide()
            $('.carrouse2').fadeToggle(2000).css('display', 'flex')
        }
    
        if (i == 3) {
            $('.carrouse2').hide()
            $('.carrouse3').fadeToggle(2000).css('display', 'flex')
            $('.next3-jq').css('opacity', '0.3')
            }
    }



    function clicouParaEsquerda() {
        i--;
    
        if (i == 2) {
            $('.carrouse3').hide()
            $('.carrouse2').fadeToggle(2000).css('display', 'flex')
        }
    
        if (i == 1) {
            $('.carrouse2').hide()
            $('.carrousel').fadeToggle(2000).css('display', 'flex')
            $('.prev1-jq').css('opacity', '0.3')
            }
    }
    
    $('.next1-jq').click(() => {
            clicouParaDireita()
        })
    $('.next2-jq').click(() => {
            clicouParaDireita()
        }) 
    $('.prev3-jq').click(() => {
            clicouParaEsquerda()
        })  
    $('.prev2-jq').click(() => {
            clicouParaEsquerda()
        })    

    /* portfolio */
    $('.animate-cards-portfolio1').mouseenter(function () {
        $(this).append("<div class='sites-animate'></div>");
        $('.sites-animate').append("<h2 class='animate-text animate-text-titulo'>Site: Supremo Logística</h2>");
        $('.sites-animate').append("<h2 class='animate-text animate-text-descricao'>Criado por: Marcos Maciel</h2>");
        $('.sites-animate').append("<a href='https://supremologistica.com.br/' target='_blank'><button class='link-site'>Link do site</button></a>");
    });


    $('.animate-cards-portfolio1').mouseleave(function () {
        $('.sites-animate').remove();
        $('.animate-text').remove();
    });


    $('.animate-cards-portfolio2').mouseenter(function () {
        $(this).append("<div class='sites-animate'></div>");
        $('.sites-animate').append("<h2 class='animate-text animate-text-titulo'>Site: Fashion</h2>");
        $('.sites-animate').append("<h2 class='animate-text animate-text-descricao'>Criado por: Marcos Maciel</h2>");
        $('.sites-animate').append("<a target='_blank'><button class='link-site'>Link do site</button></a>");
    });


    $('.animate-cards-portfolio2').mouseleave(function () {
        $('.sites-animate').remove();
        $('.animate-text').remove();
    });


    $('.animate-cards-portfolio3').mouseenter(function () {
        $(this).append("<div class='sites-animate'></div>");
        $('.sites-animate').append("<h2 class='animate-text animate-text-titulo'>Site: Front-end</h2>");
        $('.sites-animate').append("<h2 class='animate-text animate-text-descricao'>Criado por: Marcos Maciel</h2>");
        $('.sites-animate').append("<a target='_blank'><button class='link-site'>Link do site</button></a>");
    });


    $('.animate-cards-portfolio3').mouseleave(function () {
        $('.sites-animate').remove();
        $('.animate-text').remove();
    });


    $('.animate-cards-portfolio4').mouseenter(function () {
        $(this).append("<div class='sites-animate'></div>");
        $('.sites-animate').append("<h2 class='animate-text animate-text-titulo'>Site: Finans</h2>");
        $('.sites-animate').append("<h2 class='animate-text animate-text-descricao'>Criado por: Marcos Maciel</h2>");
        $('.sites-animate').append("<a target='_blank'><button class='link-site'>Link do site</button></a>");
    });


    $('.animate-cards-portfolio4').mouseleave(function () {
        $('.sites-animate').remove();
        $('.animate-text').remove();
    });

        /*
        
        window.setInterval(function() { 
            if (i == 1) {
                clicouParaDireita()
                $('.barraSlide1').css('display', 'none')
                $('.barraSlide2').css('display', 'block')
            }
            else if (i == 2) {
                clicouParaDireita()
                $('.barraSlide2').css('display', 'none')
                $('.barraSlide3').css('display', 'block')
            }
            else if (i == 3) { 
                i = 1
                $('.carrouse3').hide()
                $('.carrousel').fadeToggle(1000).css('display', 'flex')
                $('.barraSlide3').css('display', 'none')
                $('.barraSlide1').css('display', 'block')
            }
          }, 6000, this)

          */
})












