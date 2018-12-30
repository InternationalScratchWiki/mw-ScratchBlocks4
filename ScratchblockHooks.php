<?php
class Scratchblock4Hook {
	// Ouput HTML for <scratchblocks> tag

	public static function sb4ParserInit (Parser $parser) {
		// Register <scratchblocks> and <sb> tag
		$parser->setHook('scratchblocks', array( "Scratchblock4Hook", 'sb4RenderTag') );
		$parser->setHook('sb', array( "Scratchblock4Hook", 'sb4RenderInlineTag') );
		//throw new Exception(var_dump($parser));
		return true;
	}

	public static function sb4ReadLS (array &$vars) {
		global $wgScratchBlocks4Langs;
		$vars['wgScratchBlocks4Langs'] = $wgScratchBlocks4Langs;
		return true;
	}

	public static function sb4Setup() {
		global $wgOut;
		$wgOut->addModules('ext.scratchBlocks4');
	}

	// Output HTML for <scratchblocks> tag
	public static function sb4RenderTag ($input, array $args, Parser $parser, PPFrame $frame) {
		return '<pre class="blocks">' . htmlspecialchars($input) . '</pre>';
	}

	// Output HTML for inline <sb> tag
	public static function sb4RenderInlineTag ($input, array $args, Parser $parser, PPFrame $frame) {
		return '<code class="blocks">' . htmlspecialchars($input) . '</code>';
	}
}
?>
