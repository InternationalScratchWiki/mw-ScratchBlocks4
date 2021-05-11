<?php
define('SB4_MODULE_KEY', 'ext.scratchBlocks4');

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
		global $wgScratchBlocks4Langs, $wgScratchBlocks4BlockVersion;
		$vars['wgScratchBlocks4Langs'] = $wgScratchBlocks4Langs;
		$vars['wgScratchBlocks4BlockVersion'] = $wgScratchBlocks4BlockVersion;
		return true;
	}

	public static function sb4Setup(Parser $parser) {
		$out = $parser->getOutput();
		if (!in_array(SB4_MODULE_KEY, $out->getModules())) {
			$out->addModules(SB4_MODULE_KEY);
		}
	}

	public static function sb4RenderTagGeneric($input, array $args, $parser, $tag) {
		self::sb4Setup($parser);
		return (
			'<'
			. $tag
			. ' class="blocks'
			. (isset($args['version']) ? '-' . htmlspecialchars($args['version']) : '')
			. '">'
			. htmlspecialchars($input)
			. '</'
			. $tag
			. '>'
		);
	}

	// Output HTML for <scratchblocks> tag
	public static function sb4RenderTag ($input, array $args, Parser $parser, PPFrame $frame) {
		return self::sb4RenderTagGeneric($input, $args, $parser, 'pre');
	}

	// Output HTML for inline <sb> tag
	public static function sb4RenderInlineTag ($input, array $args, Parser $parser, PPFrame $frame) {
		return self::sb4RenderTagGeneric($input, $args, $parser, 'code');
	}
}
?>
