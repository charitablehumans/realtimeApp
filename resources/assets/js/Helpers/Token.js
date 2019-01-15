class Token {
    isValid(token) {
        const payload = this.payload(token);
        // console.log(payload.iss);
        if (payload) {
            return payload.iss == "http://realtimeapp.test/api/auth/login" ||
                "http://realtimeapp.test/api/auth/signup"
                ? true
                : false;
        }

        return false;
    }
    payload(token) {
        const payload = token.split(".")[1];
        // console.log(token);
        // console.log(this.decode(payload));
        return this.decode(payload);
    }

    decode(payload) {
        if (this.isBase64(payload)) {
            return JSON.parse(atob(payload));
        }
        return false;
    }

    isBase64(str) {
        // console.log(btoa(atob(str)));
        try {
            return btoa(atob(str)).replace(/=/g, "") == str;
        } catch (err) {
            return false;
        }
    }
}

export default (Token = new Token());
