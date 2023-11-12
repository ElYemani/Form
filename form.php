<?php

if(isset($_POST['submit'])){
  $fullname = $_POST['fname'];
  $email = $_POST['mail'];
  $emailto = $_POST['toMail'];
  $msg = $_POST['msg'];
  $subject = $_POST['subject'];

  $headers = "From: ".$email;
  $txt = "you have recived an e-mail from: ".$fullname.".\n\n".$msg;

  mail($emailto, $subject, $txt, $headers);
  header("Location: index.html?mailsend");
}