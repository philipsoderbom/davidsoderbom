
<?php

if (isset($_POST['submit'])) {

	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message'];

	$mailTo = "philip_soderbom@icloud.com";
	$headers = "From: ".$mailFrom;
	$txt = "You Have Received A n Email From ".$name.".\n\n".$message;

	mail($mailTo, $dubject, $txt, $headers);

	header("Location: index.html?mailsend");
}