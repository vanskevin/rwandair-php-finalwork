<?php
/**
* @package   Warp Theme Framework
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) YOOtheme GmbH
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/

// no direct access
defined('_JEXEC') or die('Restricted access');
?>

<?php /** @todo Should this be routed */ ?>

<div id="system" class="<?php echo $this->params->get('pageclass_sfx')?>">
	
	<?php if ($this->params->get('show_page_title')) : ?>
	<h1 class="title"><?php echo $this->escape($this->params->get('page_title')); ?></h1>
	<?php endif; ?>

	<?php if ($this->params->get('show_logout_title') && $this->params->get('header_logout')) : ?>
	<h1 class="title"><?php echo $this->params->get('header_logout'); ?></h1>
	<?php endif; ?>

	<?php if ($this->params->get('description_logout') || $this->image) : ?>
	<div class="description">
		<?php echo $this->image; ?>
		<?php if ($this->params->get('description_logout')) echo $this->params->get('description_logout_text'); ?>
	</div>
	<?php endif; ?>

	<form action="index.php" method="post" name="login" id="login">
		<fieldset>
			<legend><?php echo JText::_('Logout') ?></legend>
			<div>
				<input type="submit" name="Submit" class="button" value="<?php echo JText::_('Logout'); ?>" />
			</div>
		</fieldset>

		<input type="hidden" name="option" value="com_user" />
		<input type="hidden" name="task" value="logout" />
		<input type="hidden" name="return" value="<?php echo $this->return; ?>" />
	</form>
		
</div>