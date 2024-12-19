// Script que esconde o texto do botão do formulário e troca por outro para HTML em Inglês

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
            <span style="--i:5">D</span>
            <span style="--i:6">o</span>
            <span style="--i:7">n</span>
            <span style="--i:8">e</span>
        `;
        setTimeout(() => {
            (this).find(".button p").html(spansHTML);
            hiddenFormInputs();
        }, 100);
        setTimeout(sentButton, 10000);
    });
})