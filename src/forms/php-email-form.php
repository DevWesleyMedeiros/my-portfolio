<?php

// class PHP_Email_Form {
//   public $to = '';
//   public $from_name = '';
//   public $from_email = '';
//   public $subject = '';
//   public $messages = array();
//   public $ajax = false;

//   // Adiciona mensagens ao e-mail
//   public function add_message($content, $label, $priority = 0) {
//     $this->messages[] = array(
//       'content' => $content,
//       'label' => $label,
//       'priority' => $priority
//     );
//   }

//   // Validação dos campos
//   private function validate_fields() {
//     if (empty($this->from_name)) {
//       return 'O campo Nome é obrigatório.';
//     }

//     if (empty($this->from_email) || !filter_var($this->from_email, FILTER_VALIDATE_EMAIL)) {
//       return 'O e-mail fornecido é inválido.';
//     }

//     if (empty($this->subject)) {
//       return 'O campo Assunto é obrigatório.';
//     }

//     return null;
//   }

//   // Envio do e-mail
//   public function send() {
//     // Validação antes do envio
//     $validation_error = $this->validate_fields();
//     if ($validation_error) {
//       return "Erro: $validation_error";
//     }

//     $email_content = "";
//     foreach ($this->messages as $message) {
//       $email_content .= $message['label'] . ": " . $message['content'] . "\n";
//     }

//     $headers = "From: {$this->from_name} <{$this->from_email}>\r\n";
//     $headers .= "Reply-To: {$this->from_email}\r\n";
//     $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

//     if (mail($this->to, $this->subject, $email_content, $headers)) {
//       return "OK";
//     } else {
//       return "Erro: Falha no envio do e-mail.";
//     }
//   }
// }
?>
