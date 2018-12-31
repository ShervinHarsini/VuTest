<?php
	require_once $_SERVER['DOCUMENT_ROOT'] . '/test/log/Log.php';
	require_once $_SERVER['DOCUMENT_ROOT'] . "/test/lib/MicroDB/Database.php";
	require_once 'lib/limonade.php';
	require_once 'lib/arrch.php';
	require_once 'lib/yaml.php';
	require_once 'utility/AuthClass.php';
	
	$log = new Log\Log('log/file.txt');

	dispatch_get('/hi',  'view');
	  function view()
	  { 	
		  $pr = array();
		  //$yaml  = new Yaml();
		  //$array = $yaml->load("data/1");
		  return json($pr);
	  };
	 dispatch_get('/new',  'newProduct');
	  function newProduct(){
		$db = new \MicroDB\Database('data/products');
		global $log;
		$yaml  = new Yaml\Yaml();
		$yamlData = $yaml -> load('data/products/1.yml');
		//$log -> log("yaml". var_dump($yamlData));
		$id = $db->create($yamlData);
		return $id;

	  };
	  dispatch_get('/cHJvZHVjdA/:id',  'product');
	  function product()
	  { 
		  $id = base64_decode(params('id'));
		  $db = new \MicroDB\Database('data/products');
		  $product = $db->load($id);
		  global $log;
		  $log->log('get Id: '.$id); 
		  $log->log('get Product: '.json($product));
		  $product["id"] = $id;
		  return json($product, JSON_PRETTY_PRINT);
	  };
	  dispatch_get('/save/:id',  'saveProduct');
	  function saveProduct()
	  { 
		  $id = base64_decode(params('id'));
		  $decTerm = json_decode($id);
		  $pieces1 = explode("/", $id);
		  $db = new \MicroDB\Database('data/products');
		  $product = $db->load($decTerm -> {'id'});
		  $product['id'] = $decTerm -> {'id'};
		  $product['title'] = $decTerm -> {'title'};
		  $product['productName'] = $decTerm -> {'productName'};
		  $db->save($decTerm -> {'id'},$product);
		  return json($product, JSON_PRETTY_PRINT);
	  }	;	  
	  
	  
	  
	  dispatch_get('/c2VhcmNo/:terms',  'search');
	  function search()
	  { 
		  global $log;
		  $term = base64_decode(params('terms'));
		  $decTerm = json_decode($term);
		  $log->log('get term: '.json($decTerm)); 
	
		  $actualPage =  (($decTerm -> {'actualPage'} - 1) * $decTerm -> {'results'});
		  $results =  $decTerm -> {'results'};
		  $sort =  $decTerm -> {'sort'};
		  $asc =  $decTerm -> {'up'} ? 'ASC' : 'DESC';
		  $search = Arrch\Arrch::searchTerm($decTerm);
		  $pieces = $search['words'];
		  $piecesOp = $search['op'];
		  
		  $filter = $decTerm -> {'filter'};
		  
		  
		  $color = Arrch\Arrch::filterThis("Color", $filter, 'color');
		  $colors = $color['color'];
		  $colOp =  $color['op'];
		  
		  $size = Arrch\Arrch::filterThis("Size", $filter, 'name');
		  $sizes = $size['color'];
		  $sizeOp =  $size['op'];
	  
		  $gender = Arrch\Arrch::filterThis("Gender", $filter, 'name');
		  $genders = $gender['color'];
		  $genderOp =  $gender['op'];
		
		  $price = Arrch\Arrch::getPrice($filter);
		
		  
		  $db = new \MicroDB\Database('data/products');
		  $products = $db->find(function($post) use ($pieces, 
													$log, 
													$colors, 
													$colOp,  
													$sizes, $sizeOp,
													$genders, $genderOp,														
													$piecesOp,
													$price
													)  {
			  $data = array();
			  array_push($data, $post);
				$results = Arrch\Arrch::find($data, array(
					'where'     => array(
						array(array('title','body'), $piecesOp ,$pieces),
						array('filter.color', $colOp, $colors),
						array('filter.size', $sizeOp, $sizes),
						array('filter.Gender', $genderOp, $genders),
						array('price', ">", $price['min']),
						array('price', "<", $price['max'])
					),
				), 'all');
				$log->log('Find Arr: '.json($results));
				return sizeof($results) > 0;
			// End of Find
		  });
		$res = array();
		while (list($key, $val) = each($products)) {
			$val["id"] = $key;
			array_push($res, $val);
		}
		
		$sort = Arrch\Arrch::sort($res, $sort, $asc);
		
		$pageNumber = ceil(sizeof($res) / $results);
		if($pageNumber === 0){
			$pageNumber = 1;
		};
		$pagination = array_slice($sort, $actualPage, $results);
		
		  return json_encode(array(
		  products => $pagination,
		  pageNumber => $pageNumber
		  ), JSON_PRETTY_PRINT);
	  }

	dispatch_get('/login/:username',  'login');
	  function login()
	  { 	
		$auth = new Auth('data/users');
		$term = base64_decode(params('username'));
		$pieces1 = explode("/", $term);
		$pieces = explode("||", $pieces1[0]);
		$user = $auth -> login($pieces[0], $pieces[1]);
		switch($pieces1[1]){
			case 'detail':
				session_unset();
				if(isset($user)){
					$_SESSION['user'] = $user->{'username'};
				}
				return json($user);
			case 'is':
				if(isset($_SESSION['user'])){
					return json($auth->is('lead-developers'));
				}
				return false;
			case 'group':
				return json($auth->getGroupStructure());
		}
	  };
	  
run();

?>