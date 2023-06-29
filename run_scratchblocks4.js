mw.hook("wikipage.content").add(function run_scratchblocks() {
	var version = mw.config.get("wgScratchBlocks4BlockVersion");
	var scale = 1;
	// Note: the weak equality is intentional to allow '2' and 2 both specify sb2
	if (version == 2 || version[0] == "2") {
		// to handle '2.0'
		version = "scratch2";
	} else {
		version =
			(version === "scratch3-high-contrast" || version === "scratch3-hc")
				? "scratch3-high-contrast"
				: "scratch3";
		scale = 0.675;
	}
	var langs = ["en"].concat(mw.config.get("wgScratchBlocks4Langs"));
	scratchblocks.renderMatching("pre.blocks", {
		languages: langs,
		style: version,
		scale: scale,
	});
	scratchblocks.renderMatching("code.blocks", {
		languages: langs,
		style: version,
		inline: true,
		scale: scale,
	});
	scratchblocks.renderMatching("pre[class^=blocks-3-hc]", {
		languages: langs,
		style: "scratch3-high-contrast",
		scale: 0.675,
	});
	scratchblocks.renderMatching("code[class^=blocks-3-hc]", {
		languages: langs,
		style: "scratch3-high-contrast",
		inline: true,
		scale: 0.675,
	});
	scratchblocks.renderMatching(
		"pre[class^=blocks-3]:not([class^=blocks-3-hc])",
		{
			languages: langs,
			style: "scratch3",
			scale: 0.675,
		}
	);
	scratchblocks.renderMatching(
		"code[class^=blocks-3]:not([class^=blocks-3-hc])",
		{
			languages: langs,
			style: "scratch3",
			inline: true,
			scale: 0.675,
		}
	);
	scratchblocks.renderMatching("pre[class^=blocks-2]", {
		languages: langs,
		style: "scratch2",
	});
	scratchblocks.renderMatching("code[class^=blocks-2]", {
		languages: langs,
		style: "scratch2",
		inline: true,
	});
});
