<?php


if(isset($_POST['email'])) {



    // EDIT THE 2 LINES BELOW AS REQUIRED

    $email_to = "prisecnice@email.cz";

    $email_subject = "=?UTF-8?B?".base64_encode("Pozdrav z Přísečnice")."?=";





    function died($error) {

        // your error code can go here

        echo "Omlouvám se, ale ve formuláři, který jste vyplnili, jsou chyby. ";

        echo "Tyto chyby jsou vypsány niže.<br />";

        echo "Vraťte se zpět a opravte tyto chyby.<br /><br />";

        echo "I am very sorry, but there were error(s) found with the form you submitted. ";

        echo "These errors appear below.<br />";

        echo "Please go back and fix these errors.<br /><br />";

        echo $error."<br /><br />";

        die();

    }



    // validation expected data exists

    if(!isset($_POST['name']) ||

        !isset($_POST['email']) ||

        !isset($_POST['comments'])) {

        died('Omlouvám se, ale zdá se, že políčka jsou špatně vyplněna. (I am sorry, but there appears to be a problem with the form you submitted.)');

    }



    $name = $_POST['name']; // required

    $email_from = $_POST['email']; // required

    $comments = $_POST['comments']; // required



    $error_message = "";

    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  if(!preg_match($email_exp,$email_from)) {

    $error_message .= 'Vyplněná e-mailová adresa není platná. (The Email Address you entered does not appear to be valid.)<br />';

  }

  if(strlen($comments) < 2) {

    $error_message .= 'Vyplněný komentář není platný. (The Comments you entered do not appear to be valid.)<br />';

  }

  if(strlen($error_message) > 0) {

    died($error_message);

  }

    $email_message = "Zpráva:\n\n";




    function clean_string($string) {

      $bad = array("content-type","bcc:","to:","cc:","href");

      return str_replace($bad,"",$string);

    }



    $email_message .= "Jméno: ".clean_string($name)."\n";

    $email_message .= "Email: ".clean_string($email_from)."\n";

    $email_message .= "Komentář: ".clean_string($comments)."\n";




// create email headers

$headers = 'From: '.$email_from."\r\n".

'Content-Type: text/plain; charset=utf-8'."\n".

'Content-Transfer-Encoding: 8bit'."\n".

'Reply-To: '.$email_from."\r\n" .

'X-Mailer: PHP/' . phpversion();

@mail($email_to, $email_subject, $email_message, $headers);

?>
<!-- include your own success html here -->
<!--Thank you for contacting us. We will be in touch with you very soon.-->
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="alternate stylesheet" href="css/lang/english.css" title="english" media="screen"/>
    <link rel="alternate stylesheet" href="css/lang/french.css" title="french" media="screen"/>
    <link rel="stylesheet" href="css/bootstrap/bootstrap.css"/>
    <link rel="icon" href="img/favicon.ico">

    <script src="lib/styleswitch.js"></script>

    <title>Přísečnice / Pressnitz</title>
  </head>
  <body>
    <nav>
      <div class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="index.html" class="navbar-brand"><b>
            <span class="czech">Přísečnice</span>
            <span class="english">Pressnitz</span>
            <span class="french">Pressnitz</span></b></a>
          </div>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <span class="czech">O Obci</span>
                <span class="english">Town</span>
                <span class="french">Le village</span> <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="loc_his.html">
                  <span class="czech">O Obci</span>
                  <span class="english">The town</span>
                  <span class="french">Le village</span>
                  </a></li>
<!--
                  <li><a href="location.html">
                  <span class="czech">Poloha</span>
                  <span class="english">Location</span>
                  <span class="french">La localisation</span>
                  </a></li>
                  <li><a href="history.html">
                  <span class="czech">Historie</span>
                  <span class="english">History</span>
                  <span class="french">La histoire</span>
                  </a></li>
                  <li><a href="urban.html">
                  <span class="czech">Urbanistický vývoj</span>
                  <span class="english">Urban development</span>
                  <span class="french">Le développement urbain du village</span>
                  </a></li>
-->
                  <li><a href="landUse.html">
                  <span class="czech">Vývoj využití ploch</span>
                  <span class="english">Land Use</span>
                  <span class="french">L'utilisation des terres</span>
                  </a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <span class="czech">Rekonstrukce obce</span>
                <span class="english">Reconstruction of the town</span>
                <span class="french">La reconstruction du village</span> <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="reconstruction.html">
                  <span class="czech">Úvod</span>
                  <span class="english">Introduction</span>
                  <span class="french">La introduction</span>
                  </a></li>
                  <li><a href="model_town.html">
                  <span class="czech">Model středu obce</span>
                  <span class="english">The model of the town centre</span>
                  <span class="french">Le modèle du village</span>
                  </a></li>
                  <li><a href="models.html">
                  <span class="czech">Modely buduv</span>
                  <span class="english">Models</span>
                  <span class="french">Des modèles de bâtiments</span>
                  </a></li>
                </ul>
              </li>
<!--
              <li><a href="about.html">
              <span class="czech">O Projektu</span>
              <span class="english">About</span>
              <span class="french">A propos du projet</span>
              </a></li>
-->
              <li><a href="contakt.html">
              <span class="czech">Kontakt</span>
              <span class="english">Contact</span>
              <span class="french">Le contact</span>
              </a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <span class="czech">Jazyk</span>
                <span class="english">Language</span>
                <span class="french">Langue</span> <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="javascript:chooseStyle('none', 60)">Česky</a></li>
                  <li><a href="javascript:chooseStyle('english', 60)">English</a></li>
<!--                 <li><a href="javascript:chooseStyle('french', 60)">Fran&ccedil;ais</a></li>-->
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div class="wrapper">
      <div class="container">
        <h2><span class="czech">Kontakt</span>
        <span class="english">Contact</span>
        <span class="french"></span></h2>

        <p><span class="czech">Děkuji Vám za zprávu.</span>
        <span class="english">Thank you for contacting me.</span>
        <span class="french"></span></p>

        <p><a href="contakt.html"><span class="czech">Zpět</span>
        <span class="english">Back</span>
        <span class="french"></span></a></p>

        <div class="ja">
          <img src="img/ja.png" alt="">
        </div>
      </div>
    </div>

    <footer class="navbar-fixed-bottom">
      <div class="container paticka">
        <span class="czech">&copy; Ing. Renata Duchnová s použitím knihovny <a href="http://getbootstrap.com"><i>Bootstrap</i></a></span>
        <span class="english">&copy; Ing. Renata Duchnová with contributions of <a href="http://getbootstrap.com"><i>Bootstrap</i></a> library</span>
<!--
        <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="czech">Jazyk</span><span class="english">Language</span><span class="french">Langue</span> <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                      <li><a href="javascript:chooseStyle('none', 60)">Česky</a></li>
                      <li><a href="javascript:chooseStyle('english', 60)">English</a></li>
                      <li><a href="javascript:chooseStyle('french', 60)">Fran&ccedil;ais</a></li>
                    </ul>
                </li>
-->
      </div>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="lib/bootstrap/bootstrap.min.js"></script>
  </body>
</html>

<?php

}

?>
