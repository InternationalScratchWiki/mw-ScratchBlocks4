function run_scratchblocks() {
	var version = mw.config.get('wgScratchBlocks4BlockVersion');
	// Note: the weak equality is intentional to allow '2' and 2 both specify sb2
	if (version == 2 || version[0] == '2') { // to handle '2.0'
		version = 'scratch2';
	} else {
		version = 'scratch3';
	}
	var langs = ['en'].concat(mw.config.get('wgScratchBlocks4Langs'));
	scratchblocks.renderMatching('pre.blocks', {languages: langs, style: version});
	scratchblocks.renderMatching('code.blocks', {languages: langs, style: version, inline: true});
	scratchblocks.renderMatching('pre[class^=blocks-3]', {languages: langs, style: 'scratch3'});
	scratchblocks.renderMatching('code[class^=blocks-3]', {languages: langs, style: 'scratch3', inline: true});
	scratchblocks.renderMatching('pre[class^=blocks-2]', {languages: langs, style: 'scratch2'});
	scratchblocks.renderMatching('code[class^=blocks-2]', {languages: langs, style: 'scratch2', inline: true});
	var query = '[class^=blocks-3] .scratchblocks svg';
	if (version === 'scratch3') {
		query = '.blocks .scratchblocks svg, ' + query;
	}
	var items = document.querySelectorAll(query);
	var item;
	for (var i = items.length; i--;) {
		item = items[i];
		item.width.baseVal.value *= 0.675;
		item.height.baseVal.value = item.viewBox.baseVal.height * 0.675;
	}
}
$.getScript('https://scratchblocks.github.io/js/scratchblocks-v3.5.1-min.js').done(function(){
	$.getScript('https://scratchblocks.github.io/js/translations-all-v3.5.1.js').done(function(){
		mw.hook('wikipage.content').add(run_scratchblocks);
	});
});
