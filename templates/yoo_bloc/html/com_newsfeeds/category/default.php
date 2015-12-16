<?php
/**
* @package   yoo_bloc
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) YOOtheme GmbH
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/

// no direct access
defined('_JEXEC') or die('Restricted access');
?>

<div class="joomla <?php echo $this->params->get('pageclass_sfx')?>">
	<div class="newsfeeds">
	
		<?php if ($this->params->get('show_page_title', 1)) : ?>
		<h1 class="pagetitle">
			<?php echo $this->escape($this->params->get('page_title')); ?>
		</h1>
		<?php endif; ?>

		<?php if ( @$this->image || @$this->category->description ) : ?>
		<div class="description">
			<?php
				if ( isset($this->image) ) :  echo $this->image; endif;
				echo $this->category->description;
			?>
		</div>
		<?php endif; ?>
		
		<?php echo $this->loadTemplate('items'); ?>

	</div>
</div>