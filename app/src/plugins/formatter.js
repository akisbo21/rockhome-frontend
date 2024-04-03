var Formatter = function() {
    var self = this;

    self.onlyInt = function (num) {
        if (!num) {
            return ''
        }

        return num.replace(/[^+\d]/g, '');
    };

    self.formatNumber = function (num) {
        if (!num) {
            return ''
        }

        num = num.toString();
        num = num.replace(/[^+\d]/g, '');
        var formatted = '';
        var numberCount = num.length;

        for (var i = 0; i < num.length; i++) {
            formatted += (num.length > 3 && ((num.length - i) % 3 === 0)) ? (' ' + num[i]) : num[i]
        }

        if (numberCount > 3 && numberCount % 3 === 0) {
            formatted = formatted.slice(1)
        }

        return formatted
    };
};


export default {
    install (Vue, options) {
        Vue.prototype.$formatter = new Formatter();
    }
}