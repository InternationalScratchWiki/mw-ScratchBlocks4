<?php
class Scratchblock4Hook {
	// Ouput HTML for <scratchblocks> tag
	
	public static function sbParserInit (Parser $parser) {
		// Register <scratchblocks> and <sb> tag
		$parser->setHook('scratchblocks4', array( "Scratchblock4Hook", 'sbRenderTag') );
		$parser->setHook('sb4', array( "Scratchblock4Hook", 'sbRenderInlineTag') );
		//throw new Exception(var_dump($parser));
		return true;
	}
	
	public static function sbReadLS (array &$vars) {
		global $wgScratchBlocks4Lang;
		$vars['wgScratchBlocks4Lang'] = $wgScratchBlocks4Lang;
		return true;
	}
	
	public static function sbSetup() {
		global $wgOut;
		$wgOut->addModules('ext.scratchBlocks');
	}

	// Output HTML for <scratchblocks> tag
	public static function sbRenderTag ($input, array $args, Parser $parser, PPFrame $frame) {
		return '<pre class="sb4blocks">' . htmlspecialchars($input) . '</pre>';
	}

	// Output HTML for inline <sb> tag
	public static function sbRenderInlineTag ($input, array $args, Parser $parser, PPFrame $frame) {
		return '<code class="sb4blocks">' . htmlspecialchars($input) . '</code>';
	}
}
?>
