<?php
/**
* @version		$Id: mod_footer.php 14401 2010-01-26 14:10:00Z louis $
* @package		Joomla
* @copyright	Copyright (C) 2015. All rights reserved.
* @license		GNU/GPL, see LICENSE.php
* Rwandair!is a company which help peoples to travel the world
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
* See COPYRIGHT.php for copyright notices and details.
*/

// no direct access
defined('_JEXEC') or die('Restricted access');

global $mainframe;

$date =& JFactory::getDate();
$cur_year	= $date->toFormat('%Y');
$csite_name	= $mainframe->getCfg('sitename');

if (JString::strpos(JText :: _('Rwandair'), '%date%')) {
	$line1 = str_replace('%date%', $cur_year, JText :: _('Rwandair'));
} else {
	$line1 = JText :: _('Rwandair');
}

if (JString::strpos($line1, '%sitename%')) {
	$lineone = str_replace('%sitename%', $csite_name, $line1);
} else {
	$lineone = $line1;
}

require(JModuleHelper::getLayoutPath('mod_footer'));
