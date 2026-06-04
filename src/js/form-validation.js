// Script para validação do formulário
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const messageField = document.getElementById('message-field');
    const charCount = document.getElementById('char-count');
    const maxLength = 1000;

    // Função para atualizar contador de caracteres
    if (messageField && charCount) {
        messageField.addEventListener('input', function () {
            const currentLength = this.value.length;
            charCount.textContent = currentLength;

            if (currentLength >= maxLength * 0.9) {
                charCount.classList.add('text-danger');
            } else {
                charCount.classList.remove('text-danger');
            }

            // Limitar caracteres
            if (currentLength > maxLength) {
                this.value = this.value.substring(0, maxLength);
                charCount.textContent = maxLength;
            }
        });
    }

    // máscara de telefone
    if (typeof IMask !== 'undefined') {
        const phoneInput = document.getElementById('phone-field');
        if (phoneInput) {
            IMask(phoneInput, {
                mask: '(00) 00000-0000'
            });
        }
    }

    // Validação para arquivo
    const fileInput = document.getElementById('attachment-field');
    if (fileInput) {
        fileInput.addEventListener('change', function () {
            const fileSize = this.files[0]?.size || 0;
            const fileType = this.files[0]?.type || '';
            const maxSize = 5 * 1024 * 1024; // calculo do tamanho para 5MB
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];

            if (fileSize > maxSize) {
                alert('O arquivo excede o tamanho máximo de 5MB.');
                this.value = '';
            } else if (this.files[0] && !allowedTypes.includes(fileType)) {
                alert('Formato de arquivo não permitido. Use apenas PDF, DOC, DOCX, JPG ou PNG.');
                this.value = '';
            }
        });
    }

    // Validação do formulário antes do envio
    if (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();

                // Destacar campos inválidos
                const invalidFields = form.querySelectorAll(':invalid');
                invalidFields[0]?.focus();
            } else {
                // Desativar botão para evitar múltiplos envios
                const submitBtn = document.getElementById('submitBtn');
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.querySelector('.state--default').style.display = 'none';
                    submitBtn.querySelector('.state--sent').style.display = 'flex';
                }

                event.preventDefault();

                // código de envio de formulário
                // Código para envio usando AJAX (exemplo)
                /* 
                const formData = new FormData(form);
                fetch('seu-endpoint-de-processamento.php', {
                  method: 'POST',
                  body: formData
                })
                .then(response => response.json())
                .then(data => {
                  if (data.success) {
                    form.querySelector('.sent-message').style.display = 'block';
                    form.reset();
                  } else {
                    form.querySelector('.error-message').textContent = data.message || 'Ocorreu um erro ao enviar a mensagem.';
                    form.querySelector('.error-message').style.display = 'block';
                    submitBtn.disabled = false;
                  }
                })
                .catch(error => {
                  console.error('Erro:', error);
                  form.querySelector('.error-message').textContent = 'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.';
                  form.querySelector('.error-message').style.display = 'block';
                  submitBtn.disabled = false;
                });
                */

                // Simulação de envio bem-sucedido (remova ao implementar o código real)
                setTimeout(() => {
                    form.querySelector('.sent-message').style.display = 'block';

                    // Reset após 3 segundos
                    setTimeout(() => {
                        form.reset();
                        submitBtn.disabled = false;
                        submitBtn.querySelector('.state--default').style.display = 'flex';
                        submitBtn.querySelector('.state--sent').style.display = 'none';
                        form.querySelector('.sent-message').style.display = 'none';
                        charCount.textContent = '0';
                    }, 3000);
                }, 1500);
            }

            form.classList.add('was-validated');
        });
    }
});