export default class {
	constructor(name, value = null) {
		this.name = name;
		this.value = value;
	}
	setDebug(bool, global = true) {
		if (global) {
			window.debug___states = bool;
		}
		this.debug = bool;
	}
	sendDebug(message, color) {
		if (debug___states || this.debug) {
			console.log(`%c${message}`, `color:${color}`);
		}
	}
	set(value) {
		this.oldValue = this.value;
		this.value = value;
		this.emitChange();
		this.sendDebug(`${this.name} changed to ${JSON.stringify(this.value)}`, "green");
	}
	get() {
		return this.value;
	}
	emitChange() {
		document.dispatchEvent(
			new CustomEvent("stateChange", {
				detail: {
					name: this.name,
					value: this.value,
				},
			})
		);
		this.sendDebug(`${this.name} emitted change`, "green");
	}
	addChangeListener(callback) {
		document.addEventListener("stateChange", (event) => {
			if (event.detail.name === this.name) {
				if (event.detail.value !== this.oldValue) {
					callback(event.detail.value, this.oldValue);
					this.sendDebug(`${this.name} received change`, "green");
				}
			}
		});
	}
}
