// Script que esconde o texto do botão do formulário e troca por outro para HTML em Espanhol

(function(){
    function hiddenFormInputs(){
    const inputFild = ('.php-email-form input, textarea');

    inputFild.each((index, input)=>{
        (input).val("");
    })
   }
    function sentButton(){
        ('.php-email-form').find('button p').html('Enviar');
    }

    (".php-email-form").on('submit', function (event) {
        const spansHTML = 
        `
            <span style="--i:5">H</span>
            <span style="--i:6">e</span>
            <span style="--i:7">c</span>
            <span style="--i:8">h</span>
            <span style="--i:8">o</span>
        `;
        setTimeout(() => {
            (this).find(".button p").html(spansHTML);
            hiddenFormInputs();
        }, 100);
        setTimeout(sentButton, 10000);
    });
})