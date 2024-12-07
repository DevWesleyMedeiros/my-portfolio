<?php
// Passa o Email para onde eu vou receber as mensagens
  $receiving_email_address = 'devwesleymedeiros@yahoo.com';

  // Verifica se o file php-email-form.php existe no diretório php_email_form
  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Indisponível o carregamento do PHP do formulário de Email');
  }

  // Instância um objeto contact da classe PHP_Email_Form
  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  // Captura os dados do formulário
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'];
  
  // Monta o Email com base nos campos do formulário
  $contact->add_message( $_POST['name'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['message'], 'Message', 10);

  echo $contact->send();
?>
