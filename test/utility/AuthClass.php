<?php

require_once 'Auth/Sessions.php';
require_once 'Authz/ByGroup.php';
require_once 'Auth/Confirmation.php';
require_once 'User.php';
require_once 'Auth.php';
require_once 'Authz.php';
require_once $_SERVER['DOCUMENT_ROOT'] . "/test/lib/MicroDB/Database.php";

class Auth extends Jasny\Auth implements Jasny\Authz
{
    use Jasny\Auth\Sessions;
	use Jasny\Authz\ByGroup;
	use Jasny\Auth\Confirmation;
	
    /**
     * @var string
     */
    protected $path;	
	
    public function __construct($path)
    {
        $this->path = $path;
    }

    /**
     * Fetch a user by ID
     * 
     * @param int $id
     * @return Jasny\Auth\User
     */
    public function fetchUserById($id)
    {
        // Database action that fetches a User object
		$db = new \MicroDB\Database($this->path);
		$userD = $db->load($id);
		$userD["id"] = $id;
		$user = new user();
		$user -> {'id'} = $userD['id'];
		$user -> {'username'} =  $userD['username'];
		$user -> {'password'} =  $userD['password'];
		$user -> {'active'} =  $userD['active'];
		$user -> {'access_level'} = $userD['access_level'];
		return $user;
    }

    /**
     * Fetch a user by username
     * 
     * @param string $username
     * @return Jasny\Auth\User
     */
    public function fetchUserByUsername($username)
    {
        // Database action that fetches a User object
		$db = new \MicroDB\Database($this->path);
		$userA = $db->find(function($usr) use ($username) {return $usr['username'] === $username;});
		$userD = null;
		while (list($key, $val) = each($userA)) {
			$val["id"] = $key;
			$userD = $val;
		}
		$user = new user();
		$user -> {'id'} = $userD['id'];
		$user -> {'username'} =  $userD['username'];
		$user -> {'password'} =  $userD['password'];
		$user -> {'active'} =  $userD['active'];
		$user -> {'access_level'} = $userD['access_level'];
		return $user;
    }
	
    public function getGroupStructure()
    {
        return [
            'users' => [],
            'managers' => [],
            'employees' => ['user'],
            'developers' => ['employees'],
            'paralegals' => ['employees'],
            'lawyers' => ['paralegals'],
            'lead-developers' => ['developers', 'managers'],
            'firm-partners' => ['lawyers', 'managers']
        ];
    }
	public function getConfirmationSecret()
	{
	return 'test';
	}

	
}

/*
$auth = new Auth();
$user = $auth -> login('shervin88', 'pass');
var_dump($user);
//var_dump($auth -> login('user', 'pass'));
//var_dump($auth -> login('user', 'pass'));
//var_dump($auth->is('lead-developers'));
//var_dump($auth->getGroupStructure()['lead-developers']);
//var_dump($auth->getRoles());
var_dump($auth->getConfirmationToken($user, 'signup'));
var_dump($auth->fetchUserForConfirmation($auth->getConfirmationToken($user, 'signup'), 'signup'));
*/
?>