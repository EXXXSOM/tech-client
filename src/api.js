import axios from 'axios';

class api {
    serverPath = 'https://lab-4-it.herokuapp.com';

    getProducts = async () => {
        try {
            const response = await axios.get(this.serverPath + '/getProducts');
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };

    getProduct = async (id) => {
        try {
            const response = await axios.get(
                this.serverPath + '/getProduct/' + id
            );
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };

    addProduct = async (product) => {
        try {
            const response = await axios.post(this.serverPath + '/addProduct', {
                name: product.name,
                price: product.price,
                massa: product.massa,
                currency: product.currency,
                url: product.url,
            });
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };

    updateProduct = async (prod) => {
        try {
            const response = await axios.put(
                this.serverPath + '/updateProduct',
                {
                    product: prod,
                }
            );
            alert('Продукт обновлен');
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };

    deleteProduct = async (id) => {
        try {
            const response = await axios.delete(
                this.serverPath + '/deleteProduct/' + id
            );
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };

    sendMail = async (email, name, message) => {
        try {
            const response = await axios.post(
                this.serverPath + '/sendMessage',
                {
                    name: name,
                    email: email,
                    message: message,
                }
            );
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };

    uploadFiles = async (files) => {
        try {
            const formData = new FormData();
            files.forEach((file) => {
                formData.append('file', file);
            });
            const response = await axios
                .post(this.serverPath + '/loadFiles', formData)
                .then(() => {
                    alert('Файлы загружены на сервер!');
                    location.reload();
                });

            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };
    getImg = async () => {
        try {
            const res = await axios.get(this.serverPath + '/getImg');
            let files = [];
            res.data.forEach((element) => {
                files.push(this.serverPath + '/img/' + element);
            });
            return files;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };
    getAudio = async () => {
        try {
            const res = await axios.get(this.serverPath + '/getAudio');
            let files = [];
            res.data.forEach((element) => {
                files.push(this.serverPath + '/audio/' + element);
            });
            return files;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };
    getDocument = async () => {
        try {
            const res = await axios.get(this.serverPath + '/getDocument');
            let files = [];
            res.data.forEach((element) => {
                files.push(this.serverPath + '/document/' + element);
            });
            return files;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };
    getOther = async () => {
        try {
            const res = await axios.get(this.serverPath + '/getOther');
            let files = [];
            res.data.forEach((element) => {
                files.push(this.serverPath + '/other/' + element);
            });
            return files;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };
    getVideo = async () => {
        try {
            const res = await axios.get(this.serverPath + '/getVideo');
            let files = [];
            res.data.forEach((element) => {
                files.push(this.serverPath + '/video/' + element);
            });
            return files;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };
    getFiles = async () => {
        try {
            const res = await axios.get(this.serverPath + '/getFiles');
            let files = [];
            res.data.forEach((element) => {
                files.push(this.serverPath + '/' + element);
            });
            return files;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };

    login = async (name, email, password) => {
        try {
            const response = await axios.post(this.serverPath + '/login', {
                name: name,
                email: email,
                password: password,
            });
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };
}

export default new api();
