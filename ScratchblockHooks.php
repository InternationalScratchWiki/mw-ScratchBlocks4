<?php
class Scratchblock4Hook {
	// Ouput HTML for <scratchblocks> tag
	
	public static function sb4ParserInit (Parser $parser) {
		// Register <scratchblocks> and <sb> tag
		$parser->setHook('scratchblocks4', array( "Scratchblock4Hook", 'sb4RenderTag') );
		$parser->setHook('sb4', array( "Scratchblock4Hook", 'sb4RenderInlineTag') );
		//throw new Exception(var_dump($parser));
		return true;
	}
	
	public static function sb4ReadLS (array &$vars) {
		global $wgScratchBlocks4Lang;
		$vars['wgScratchBlocks4Lang'] = $wgScratchBlocks4Lang;
		return true;
	}
	
	public static function sb4Setup() {
		global $wgOut;
		$wgOut->addModules('ext.scratchBlocks4');
	}

	// Output HTML for <scratchblocks> tag
	public static function sb4RenderTag ($input, array $args, Parser $parser, PPFrame $frame) {
		$fixme = '';
		if (array_key_exists('fixme', $args)) {
			$fixme = 'fixme';
		}
		return '<pre class="sb4blocks ' . $fixme . '">' . htmlspecialchars($input) . '</pre>';
	}

	// Output HTML for inline <sb> tag
	public static function sb4RenderInlineTag ($input, array $args, Parser $parser, PPFrame $frame) {
		$fixme = '';
		if (array_key_exists('fixme', $args)) {
			$fixme = 'fixme';
		}
		return '<code class="sb4blocks ' . $fixme . '">' . htmlspecialchars($input) . '</code>';
	}
}
?>
