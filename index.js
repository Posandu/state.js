class State {
	constructor(value = null) {
		this.value = value;
	}

	setDebug(bool, global = true) {
		if (global) {
			window.debug___states = bool;
		}
		this.debug = bool;
	}

	sendDebug(message, color) {
		if (window.debug___states || this.debug) {
			console.log(`%c${message}`, `color:${color}`);
		}
	}

	set(value) {
		this.oldValue = this.value;
		this.value = value;
		this.emitChange();
		this.sendDebug(`changed to ${JSON.stringify(this.value)}`, "green");
	}

	get() {
		return this.value;
	}

	emitChange() {
		if (this.oldValue !== this.value) {
			this.callback(this.value, this.oldValue);
			this.sendDebug(`received change`, "green");
		}
		this.sendDebug(`emitted change`, "green");
	}

	addChangeListener(callback) {
		this.callback = callback;
	}
}

export default function State(value) {
	return new State(value);
}
