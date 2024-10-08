
function api() {
    const cifra = [];
    const p1 = "giulian"
    var c = "tarkovsky"

    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (posição = 0; posição < p1.length; posição++) {
        for (i = 0; i < 26; i++) {
            if (p1[posição].includes(alfabeto[i])) {
                console.log(posição + ": " + alfabeto[i])
                if ((alfabeto.indexOf(p1[posição]) + alfabeto.indexOf(c[posição])) < 26) {
                    cifra.push(alfabeto[(alfabeto.indexOf(p1[posição]) + alfabeto.indexOf(c[posição]))])
                    var cifraoriginal = cifra.join("");
                    console.log(cifraoriginal);

                }
                else if ((alfabeto.indexOf(p1[posição]) + alfabeto.indexOf(c[posição])) + 26) {
                    cifra.push(alfabeto[(alfabeto.indexOf(p1[posição]) + alfabeto.indexOf(c[posição])) - 26])
                    var cifraoriginal = cifra.join("");
                    console.log(cifraoriginal);
                }

                


            }


        }

    }

    fetch('https://desafio9.onrender.com/decrypt_message', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "encrypted_message": cifraoriginal,
            "keyword": c
        })

    })

}

