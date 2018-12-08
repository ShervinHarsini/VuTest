<?php
	require_once 'log/Log.php';
	$log = new Log('log/file.txt');
	require_once $_SERVER['DOCUMENT_ROOT'] . "/test/MicroDB/Database.php";
	require_once 'lib/limonade.php';
	require_once 'lib/arrch.php';

	dispatch_post('/hi',  'view');
	  function view()
	  { 
		  $id = $_POST["id"];
		  $db = new \MicroDB\Database('data');
		  $post = $db->load($id);
		  return json($post);
	  };
	  
	  dispatch_get('/product/:id',  'product');
	  function product()
	  { 
		  $id = params('id');
		  $db = new \MicroDB\Database('data');
		  $product = $db->load($id);
		  global $log;
		  $log->log('get Id: '.$id); 
		  $log->log('get Product: '.json($product)); 
		  return json($product);
	  }	;
	  dispatch_get('/search/:terms',  'search');
	  function search()
	  { 
		  global $log;
		  $term = params('terms');
		  $pieces = explode(" ", $term);
		  $log->log('get term: '.json($pieces)); 
		  $db = new \MicroDB\Database('data');
		  $products = $db->find(function($post) use ($pieces, $log)  {
			  $data = array();
			  array_push($data, $post);
				$results = Arrch\Arrch::find($data, array(
					'where'     => array(
						array(array('productName','description'), "~" ,$pieces),
					),
				), 'all');
				$log->log('Find Arr: '.json($results));
				return sizeof($results) > 0;
			// End of Find
		  });
		  return json($products);
	  }
run();

?>