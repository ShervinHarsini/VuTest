<?php

	function mailS($mail){
		$from = "shervin88@gmail.com";
		$to = "shervin88@gmail.com";
		$subject = "PHP Mail Test script";
		$message = $mail;
		$headers = "From:" . $from;
		mail($to,$subject,$message, $headers);
	}
	if(isset($_POST["result"])){
		$file = 'req.txt';
		$current = file_get_contents($file);
		$current = $_POST["result"];
		file_put_contents($file, $current);
		return json_encode(array("status" => "OK"));
	}
?>