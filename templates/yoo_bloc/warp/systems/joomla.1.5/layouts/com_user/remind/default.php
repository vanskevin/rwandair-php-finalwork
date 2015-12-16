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

<div id="system" class="<?php echo $this->params->get('pageclass_sfx')?>">
	
	<?php if ($this->params->get('show_page_title')) : ?>
	<h1 class="title"><?php echo $this->escape($this->params->get('page_title')); ?></h1>
	<?php endif; ?>

	<p><?php echo JText::_('REMIND_USERNAME_DESCRIPTION'); ?></p>

	<form class="submission josForm form-validate" action="<?php echo JRoute::_( 'index.php?option=com_user&task=remindusername' ); ?>" method="post">
		<fieldset>
			<legend><?php echo JText::_( 'REMIND_USERNAME_EMAIL_TIP_TITLE' ) ?></legend>
	
			<div>
				<label for="email" class="hasTip" title="<?php echo JText::_('REMIND_USERNAME_EMAIL_TIP_TITLE'); ?>::<?php echo JText::_('REMIND_USERNAME_EMAIL_TIP_TEXT'); ?>"><?php echo JText::_('Email Address'); ?>:</label>
				<input id="email" name="email" type="text" class="required validate-email" />
			</div>
			
		</fieldset>
		
		<div class="submit">
			<button type="submit"><?php echo JText::_('Submit'); ?></button>
		</div>
		
		<?php echo JHTML::_( 'form.token' ); ?>
	</form>

</div>