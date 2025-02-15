document.addEventListener('alpine:init', () => {
    Alpine.store('auth', {
        isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
        userData: JSON.parse(localStorage.getItem("user")) || null,

        login(email, password) {
            if (email === "correo@mimail.com" && password === "1234") {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("user", JSON.stringify({ email }));

                this.isLoggedIn = true;
                this.userData = { email };
            } else {
                alert("Correo o contraseña incorrectos");
            }
        },

        logout() {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("user");

            this.isLoggedIn = false;
            this.userData = null;
        }
    });

    Alpine.data('cartData', () => ({
        cart: JSON.parse(localStorage.getItem("cart")) || [],

        addToCart(item) {
            if (!Alpine.store('auth').isLoggedIn) {
                document.querySelector('[x-data]').__x.$data.showLogin = true;
                return;
            }

            let existingItem = this.cart.find(cartItem => cartItem.title === item.title);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cart.push({ ...item, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(this.cart));
            alert(`${item.title} agregado al carrito 🛒`);
        },

        removeFromCart(index) {
            this.cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(this.cart));
        },

        finalizePurchase() {
            if (this.cart.length === 0) {
                alert("Tu carrito está vacío.");
                return;
            }
            window.location.href = "/comprar-derechos.html";
        }
    }));

    // 🔹 Datos del Contenido Musical
    Alpine.data('contentData', () => ({
        contentList: [
            { title: "Groovy Ambient Funk", type: "Canción", audio: "/assets/music/cancion01.mp3" },
            { title: "Letras de Amor", type: "Letra", url: "/assets/letters/letra1.md" },
            { title: "Juan Pérez", type: "Compositor", url: "#perfil1" },
            { title: "Field Grass", type: "Composición", audio: "/assets/music/composicion01.mp3" },
            { title: "Partitura - Groovy Ambient Funk", type: "Partitura", image: "/assets/img/partitura.jpeg" },
            { title: "Viva el Amor", type: "Canción", audio: "/assets/music/cancion02.mp3" },
            { title: "Balada Triste", type: "Letra", url: "/assets/letters/letra2.md" },
            { title: "Ana López", type: "Compositor", url: "#perfil2" },
            { title: "Romantic Hope - Delicate Cinematic Orchestral", type: "Composición", audio: "/assets/music/composicion02.mp3" },
            { title: "Partitura - Viva el Amor", type: "Partitura", image: "/assets/img/partitura.jpeg" },
            { title: "A Short Acoustic Guitar Love Song", type: "Canción", audio: "/assets/music/cancion03.mp3" },
            { title: "Rock en Vivo", type: "Letra", url: "/assets/letters/letra3.md" },
            { title: "Carlos Ramírez", type: "Compositor", url: "#perfil3" },
            { title: "The Magic of Hope", type: "Composición", audio: "/assets/music/composicion03.mp3" },
            { title: "Partitura - The Magic of Hope", type: "Partitura", image: "/assets/img/partitura.jpeg" },
            { title: "Live for the Moment (Full Version)", type: "Canción", audio: "/assets/music/cancion04.mp3" },
            { title: "Salsa Romántica", type: "Letra", url: "/assets/letters/letra4.md" },
            { title: "María González", type: "Compositor", url: "#perfil4" },
            { title: "Zen Meditation", type: "Composición", audio: "/assets/music/composicion04.mp3" },
            { title: "Partitura - Zen Meditation", type: "Partitura", image: "/assets/img/partitura.jpeg" }
        ],

        playAudio(audioSrc) {
            let player = document.getElementById("audioPlayer");
            player.src = audioSrc;
            player.play();
        },

    }));
});
