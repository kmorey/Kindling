kindling.module(function () {
	'use strict';

	function highlightName(e, options, username) {
		if (!options || username === '') {
			return;
		}

		var $messages = $('#chat-wrapper').find('div:.body');

		kindling.unbindNewMessages();
		try {
			var highlightOptions = { className: 'nameHighlight', tagType: 'mark' };
			$messages.highlightRegex(undefined, highlightOptions);

			// TODO: check for empty key words
			if (options.highlightName === 'true') {
				$messages.highlightRegex(kindling.getKeywordsRegex(options.highlightKeywords), highlightOptions);
			}
		} catch (err) {
		} finally {
			kindling.bindNewMessages();
		}
	}

	return {
		init: function () {
			$.subscribe('loaded optionsChanged newMessage', highlightName);
		}
	};
}());
