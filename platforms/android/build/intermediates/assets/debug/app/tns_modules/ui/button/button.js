var common = require("./button-common");
global.moduleMerge(common, exports);
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        _super.call(this);
        this._isPressed = false;
    }
    Object.defineProperty(Button.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype._createUI = function () {
        var that = new WeakRef(this);
        this._android = new android.widget.Button(this._context);
        this._android.setOnClickListener(new android.view.View.OnClickListener({
            get owner() {
                return that.get();
            },
            onClick: function (v) {
                if (this.owner) {
                    this.owner._emit(common.Button.tapEvent);
                }
            }
        }));
        this._android.setOnTouchListener(new android.view.View.OnTouchListener({
            get owner() {
                return that.get();
            },
            onTouch: function (v, ev) {
                if (ev.getAction() === 0) {
                    this.owner._goToVisualState("highlighted");
                }
                else if (ev.getAction() === 1) {
                    this.owner._goToVisualState("normal");
                }
                return false;
            }
        }));
    };
    Button.prototype._onTextPropertyChanged = function (data) {
        if (this.android) {
            this.android.setText(data.newValue + "");
        }
    };
    Button.prototype._setFormattedTextPropertyToNative = function (value) {
        var newText = value ? value._formattedText : null;
        if (this.android) {
            if (newText) {
                if (!this._transformationMethod) {
                    this._transformationMethod = this.android.getTransformationMethod();
                }
                this.android.setTransformationMethod(null);
            }
            else {
                if (this._transformationMethod && !this.android.getTransformationMethod()) {
                    this.android.setTransformationMethod(this._transformationMethod);
                }
            }
            this.android.setText(newText);
        }
    };
    return Button;
}(common.Button));
exports.Button = Button;
