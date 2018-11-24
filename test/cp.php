<?php
$data = file_get_contents('1.txt');
$cdata = gzcompress($data);
$cdata1 = gzuncompress($cdata);
echo $cdata;
echo $cdata1;

$myfile = fopen("test.txt", "w") or die("Unable to open file!");
fwrite($myfile, $cdata);
fclose($myfile);



?>