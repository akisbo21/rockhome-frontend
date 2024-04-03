import Vue from 'vue'

var api = new Vue({

	data () {
		return {
			baseUrl : process.env.VUE_APP_ROCK_BACKEND
		}
	},

	methods: {
		getBaseUrl() {
			return this.baseUrl;
		},
		get (url) {
            url = this.baseUrl + url;

			return new Promise((resolve) => {
				fetch(url, {
                    headers: {
                        'token': window.sessionId
                    },
                })
					.then(res => res.json())
					.then(res => {
						resolve(res.body);
					})
			});
		},

		post (url, data) {
            url = this.baseUrl + url;

			return new Promise((resolve, reject) => {
				fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
                        'token': window.sessionId
					},
					body: JSON.stringify(data)
				})
					.then(res => res.json())
					.then(res => {
						if (res.code === 200) {
							resolve(res.body);
						}
						else {
							reject(res.error)
						}
					})
			});
		}
	}
})

export default {
	install (Vue, options) {
		Vue.prototype.$rockApi = api
	}
}