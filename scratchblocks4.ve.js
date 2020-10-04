function makeSBReloadTool() {
	function ReloadSBCommand () {
		ReloadSBCommand.parent.call(this, 'ReloadSB');
	}
	OO.inheritClass(ReloadSBCommand, ve.ui.Command);
	ReloadSBCommand.prototype.execute = function () {
		if (typeof window.run_scratchblocks !== 'function') {
			console.error('ScratchBlocks unavailable.');
			return true;
		}
		window.run_scratchblocks();
		return true;
	};
	ve.ui.commandRegistry.register(new ReloadSBCommand());
	
	function ReloadSBTool (...args) {
		ReloadSBTool.parent.apply(this, args);
	}
	OO.inheritClass(ReloadSBTool, ve.ui.Tool);
	ReloadSBTool.static.name = 'ReloadSB';
	ReloadSBTool.static.group = 'object';
	ReloadSBTool.static.title = OO.ui.deferMsg('sb3-ve-reload');
	ReloadSBTool.static.icon = 'reload';
	ReloadSBTool.static.commandName = 'ReloadSB';
	// Do not add this automatically - because this inserts the menu item at wrong plce
	ReloadSBTool.static.autoAddToCatchall = false;
	ReloadSBTool.static.deactivateOnSelect = true;
	
	ReloadSBTool.prototype.onUpdateState = function () {
		ReloadSBTool.super.prototype.onUpdateState.apply(this, arguments);
		this.setDisabled(!this.toolbar.getSurface() || this.toolbar.getSurface().getMode() === 'source');
	};

	ve.ui.toolFactory.register(ReloadSBTool);
	// Insert at the top of pagemenu section
	ve.init.mw.DesktopArticleTarget.static.actionGroups[1].include.unshift('ReloadSB');
}

function shouldAutoReload () {
	return mw.user.options.get('sb3-ve-auto-reload');
}

function makeSBScriptTool() {
	/* CONTENT EDITABLE */
	ve.ce.MWSBScriptNode = function VeCeMWSBScriptNode() {
		// Parent constructor
		ve.ce.MWSBScriptNode.super.apply(this, arguments);
	
		// DOM changes
		this.$element.addClass('blocks');
		if (typeof window.run_scratchblocks === 'function') {
			this.$element.addClass('needsRendering');
			window.run_scratchblocks();
		}
	}
	
	OO.inheritClass(ve.ce.MWSBScriptNode, ve.ce.MWBlockExtensionNode);
	
	ve.ce.MWSBScriptNode.prototype.afterRender = function () {
		ve.ce.MWBlockExtensionNode.prototype.afterRender.call(this);
		if (typeof window.run_scratchblocks === 'function' && shouldAutoReload()) {
			window.run_scratchblocks();
		}
	}
	
	ve.ce.MWSBScriptNode.static.name = 'mwSBScript';
	ve.ce.MWSBScriptNode.static.tagName = 'pre'; // Tag name for rendering
	ve.ce.MWSBScriptNode.static.primaryCommandName = 'SBScript';
	ve.ce.MWSBScriptNode.static.iconWhenInvisible = 'puzzle';
	
	ve.ce.nodeFactory.register(ve.ce.MWSBScriptNode);
	
	/* DATA MODEL */
	ve.dm.MWSBScriptNode = function VeDmMWSBScriptNode() {
		// Parent constructor
		ve.dm.MWSBScriptNode.super.apply(this, arguments);
	};
	
	OO.inheritClass(ve.dm.MWSBScriptNode, ve.dm.MWBlockExtensionNode);
	
	ve.dm.MWSBScriptNode.static.name = "mwSBScript";
	ve.dm.MWSBScriptNode.static.tagName = "scratchblocks"; // Tag name for wikitext
	ve.dm.MWSBScriptNode.static.extensionName = "scratchblocks";
	
	ve.dm.modelRegistry.register(ve.dm.MWSBScriptNode);
	
	/* INSPECTER */
	ve.ui.MWSBScriptInspector = function VeUiMWSBScriptInspector () {
		// Parent constructor
		ve.ui.MWSBScriptInspector.super.apply(this, arguments);
	}
	
	OO.inheritClass(ve.ui.MWSBScriptInspector, ve.ui.MWLiveExtensionInspector);
	
	ve.ui.MWSBScriptInspector.static.name = 'mwSBScript';
	ve.ui.MWSBScriptInspector.static.title = OO.ui.deferMsg('sb3-ve-block');
	ve.ui.MWSBScriptInspector.static.modelClasses = [ve.dm.MWSBScriptNode];
	ve.ui.MWSBScriptInspector.static.dir = 'ltr';
	
	ve.ui.windowFactory.register(ve.ui.MWSBScriptInspector);
	
	/* INSPECTOR TOOL */
	ve.ui.MWSBScriptInspectorTool = function VeUiMWSBScriptInspectorTool() {
		ve.ui.MWSBScriptInspectorTool.super.apply(this, arguments);
	};
	
	OO.inheritClass(ve.ui.MWSBScriptInspectorTool, ve.ui.FragmentInspectorTool);
	
	ve.ui.MWSBScriptInspectorTool.static.name = 'mwSBScript';
	ve.ui.MWSBScriptInspectorTool.static.group = 'object';
	ve.ui.MWSBScriptInspectorTool.static.icon = 'puzzle';
	ve.ui.MWSBScriptInspectorTool.static.title = OO.ui.deferMsg('sb3-ve-block');
	ve.ui.MWSBScriptInspectorTool.static.modelClasses = [ve.dm.MWSBScriptNode];
	ve.ui.MWSBScriptInspectorTool.static.commandName = 'SBScript';
	ve.ui.toolFactory.register(ve.ui.MWSBScriptInspectorTool);
	
	ve.ui.commandRegistry.register(
		new ve.ui.Command(
			'SBScript', 'window', 'open',
			{args: ['mwSBScript'], supportedSelections: ['linear']}
		)
	);
	
	ve.ui.sequenceRegistry.register(
		new ve.ui.Sequence('wikitextSBScript', 'SBScript', '<scratchblocks', 14)
	);
	
	ve.ui.commandHelpRegistry.register('insert', 'SBScript', {
		sequences: ['wikitextSBScript'],
		label: OO.ui.deferMsg('sb3-ve-block')
	});
}

console.log('ScratchBlocks for VisualEditor loaded.');
makeSBReloadTool();
makeSBScriptTool();