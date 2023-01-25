<?php

use MediaWiki\Hook\ParserFirstCallInitHook;
use MediaWiki\ResourceLoader\Hook\ResourceLoaderGetConfigVarsHook;

define('SB4_MODULE_KEY', 'ext.scratchBlocks4');

class Scratchblock4Hook implements ParserFirstCallInitHook, ResourceLoaderGetConfigVarsHook {
	// Ouput HTML for <scratchblocks> tag

	public function onParserFirstCallInit($parser) {
		// Register <scratchblocks> and <sb> tag
		$parser->setHook('scratchblocks', array("Scratchblock4Hook", 'sb4RenderTag'));
		$parser->setHook('sb', array("Scratchblock4Hook", 'sb4RenderInlineTag'));
		//throw new Exception(var_dump($parser));
		return true;
	}

	public function onResourceLoaderGetConfigVars(array &$vars, $skin, Config $config): void {
		$vars['wgScratchBlocks4Langs'] = $config->get('ScratchBlocks4Langs');
		$vars['wgScratchBlocks4BlockVersion'] = $config->get('ScratchBlocks4BlockVersion');
	}

	public static function sb4Setup(Parser $parser) {
		$out = $parser->getOutput();
		if (!in_array(SB4_MODULE_KEY, $out->getModules())) {
			$out->addModules([ SB4_MODULE_KEY ]);
		}
	}

	public static function sb4RenderTagGeneric($input, array $args, $parser, $tag) {
		self::sb4Setup($parser);
		return Html::element($tag, [
			'class' => 'blocks' . (isset($args['version']) ? '-' . $args['version'] : '')
		], $input);
	}

	// Output HTML for <scratchblocks> tag
	public static function sb4RenderTag($input, array $args, Parser $parser, PPFrame $frame) {
		return self::sb4RenderTagGeneric($input, $args, $parser, 'pre');
	}

	// Output HTML for inline <sb> tag
	public static function sb4RenderInlineTag($input, array $args, Parser $parser, PPFrame $frame) {
		return self::sb4RenderTagGeneric($input, $args, $parser, 'code');
	}
}
