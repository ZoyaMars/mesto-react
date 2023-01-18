export class Api {
    constructor(options) {
        this._options = options;
        this._baseUrl = this._options.baseUrl;
        this._authorization = this._options.headers.authorization;
    }

    _checkAnswer(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
        }
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
                headers: {
                    authorization: this._authorization
                }
            })
            .then((res) => {
                return this._checkAnswer(res);
            })
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
                headers: {
                    authorization: this._authorization
                }
            })
            .then((res) => {
                return this._checkAnswer(res);
            })
    }

    patchUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
                method: 'PATCH',
                headers: {
                    authorization: this._authorization,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.title,
                    about: data.job
                })
            })
            .then((res) => {
                return this._checkAnswer(res);
            })
    }

    patchAvatarInfo(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
                method: 'PATCH',
                headers: {
                    authorization: this._authorization,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    avatar: data.avatar
                })
            })
            .then((res) => {
                return this._checkAnswer(res);
            })
    }

    addNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
                method: 'POST',
                headers: {
                    authorization: this._authorization,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.place,
                    link: data.link
                })
            })
            .then((res) => {
                return this._checkAnswer(res);
            })
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
                method: 'DELETE',
                headers: {
                    authorization: this._authorization
                }
            })
            .then((res) => {
                return this._checkAnswer(res);
            })
    }

    setLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                method: 'PUT',
                headers: {
                    authorization: this._authorization
                }
            })
            .then((res) => {
                return this._checkAnswer(res);
            })
    }

    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                method: 'DELETE',
                headers: {
                    authorization: this._authorization
                }
            })
            .then((res) => {
                return this._checkAnswer(res);
            })
    }

}



const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
    headers: {
      authorization: '8d3c6a15-ceca-43f0-a891-5377cbbfaafe',
      'Content-Type': 'application/json'
    }
});

export default api;
