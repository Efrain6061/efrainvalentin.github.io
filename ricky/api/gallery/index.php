<?php
use Facebook\Facebook;
use Facebook\Exceptions\FacebookResponseException;
use Facebook\Exceptions\FacebookSDKException;

require_once '../facebook/graph-sdk/src/Facebook/autoload.php';
require_once '../facebook/graph-sdk/src/Facebook/Exceptions/FacebookResponseException.php';
require_once '../facebook/graph-sdk/src/Facebook/Exceptions/FacebookSDKException.php';
require_once '../facebook/graph-sdk/src/Facebook/Helpers/FacebookRedirectLoginHelper.php';

$appId = "405308196815900";
$appSecret = "28c30771e621de366f8bf489854e39be";
$fb = new Facebook([
    'app_id' => $appId,
    'app_secret' => $appSecret,
    'default_graph_version' => 'v4.0'
]);

$accessToken = "EAAFwoCsYhBwBAEZBFyzqZAs6gdbhEKvJmU8ZBPoqxAOZChbOrDQGzmfHwgzqqCuS9VqHngboMqOVXetvatTUlgzlFaa1j25mtRmm7T8m2MrMmr3UwjdrrZAZC5D1QqzUXtCaBuMoZCQhWBMl1BZCV85DZB5SiwCVuOLDTDhooBj1NxxwFZCjWrBTRj8lMQmFMB1E8ZD";

$postData = "";
try {
    $userPosts = $fb->get("/398799877534176/photos?fields=source,images,name", $accessToken);
    $postBody = $userPosts->getDecodedBody();
    $postData = $postBody["data"];
} catch (FacebookResponseException $e) {
    // display error message
    exit();
} catch (FacebookSDKException $e) {

    // display error message
    exit();
}

require_once "wall-view.php";
?>