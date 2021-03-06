<?php
namespace Log;
/**
 * Class Log
 * A really simple logging class that writes flat data to a file.
 * @author Dennis Thompson
 * @license MIT
 * @version 1.0
 * @copyright AtomicPages LLC 2014
 */
class Log {
	private $handle, $dateFormat;
	public function __construct($file, $mode = "w") {
 		/*if(file_exists($file)){
			unlink($file);
		};  */
		$this->handle = fopen($file, $mode);
		$this->dateFormat = "d/M/Y H:i:s";
	}
	public function dateFormat($format) {
		$this->dateFormat = $format;
	}
	public function getDateFormat() {
		return $this->dateFormat;
	}
	/**
	 * Writes info to the log
	 * @param mixed, string or an array to write to log
	 * @access public
	 */
	public function log($entries) {
		if(is_string($entries)) {
			fwrite($this->handle, "Error: [" . date($this->dateFormat) . "] " . $entries . "\n");
		} else {
			foreach($entries as $value) {
				fwrite($this->handle, "Error: [" . date($this->dateFormat) . "] " . $value . "\n");
			}
		}
	}
}