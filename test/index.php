<?php
	require_once $_SERVER['DOCUMENT_ROOT'] . "/test/MicroDB/Database.php";
	require_once 'lib/limonade.php';

	dispatch_post('/hi',  'view');
	  function view()
	  { 
		  $id = $_POST["id"];
		  $db = new \MicroDB\Database('data');
		  $post = $db->load($id);
		  return json($post);
	  }
run();

?>