<?php

require_once 'Auth/User.php';

class User implements Jasny\Auth\User
{
    /**
     * @var int
     */
    public $id;

    /**
     * @var string
     */
    public $username;

    /**
     * Hashed password
     * @var string
     */
    public $password;

    /**
     * @var boolean
     */
    public $active;


    /**
     * @var boolean
     */
    public $access_level;


    /**
     * Get the user ID
     * 
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get the usermame
     * 
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Get the hashed password
     * 
     * @return string
     */
    public function getHashedPassword()
    {
        return $this->password;
    }


    /**
     * Event called on login.
     * 
     * @return boolean  false cancels the login
     */
    public function onLogin()
    {
        if (!$this->active) {
            return false;
        }

        // You might want to log the login
    }

    /**
     * Event called on logout.
     */
    public function onLogout()
    {
        // You might want to log the logout
    }
	/**
	 * Get the access level of the user
	 * 
	 * @return int
	 */
	public function getRole()
	{
		return $this->access_level;
	}
}

?>