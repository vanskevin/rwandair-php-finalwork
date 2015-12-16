<?php
/**
* @package   yoo_bloc
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) YOOtheme GmbH
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/


require_once(dirname(__FILE__)."/warp/warp.php");

$warp =& Warp::getInstance();

// add paths
$warp->path->register(dirname(__FILE__).'/warp/systems/joomla.1.5/helpers','helpers');
$warp->path->register(dirname(__FILE__).'/warp/systems/joomla.1.5/layouts','layouts');
$warp->path->register(dirname(__FILE__).'/layouts','layouts');

$warp->path->register(dirname(__FILE__).'/js', 'js');
$warp->path->register(dirname(__FILE__).'/css', 'css');

// load helpers
$warp->loadHelper(array('system', 'modules', 'javascripts', 'stylesheets', 'useragent', 'cache'));

require_once(dirname(__FILE__)."/presets.php");