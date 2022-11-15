const input = document.getElementById('input');
const botao = document.getElementById('botao');
const div = document.querySelector('.princ');

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        botao.click();
    }
})

botao.addEventListener('click', () => {
    if (input.value == 0) {
        alert("Digite um pokemon para consultar.")
    } else {
        getPokemon(input.value);
    }
})

const toggleLoader = () => {
    const loader = document.querySelector('.loader');

    loader.classList.toggle("hidden");
};

const getPokemon = async (setPokemon) => {
    let pokemon = setPokemon.toLowerCase();

    try {
        toggleLoader();
        const api = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
        const response = await fetch(api);
        const data = await response.json();

        console.log(data);

        const div2 = document.createElement('div');
        div2.classList.add('default');

        if (data.types[0].type.name == 'grass') {
            div2.style.backgroundImage = 'url(../images/grass.png)';
        } else if (data.types[0].type.name == 'fire') {
            div2.style.backgroundImage = 'url(https://github.com/LukaSL0/pokedex/blob/main/images/fire.png)';
        } else if (data.types[0].type.name == 'water') {
            div2.style.backgroundImage = 'url(../images/water.png)';
        } else if (data.types[0].type.name == 'electric') {
            div2.style.backgroundImage = 'url(../images/electric.png)';
        } else if (data.types[0].type.name == 'psychic') {
            div2.style.backgroundImage = 'url(../images/psychic.png)';
        } else if (data.types[0].type.name == 'fighting') {
            div2.style.backgroundImage = 'url(../images/fighting.png)';
        } else if (data.types[0].type.name == 'dark') {
            div2.style.backgroundImage = 'url(../images/dark.png)';
        } else if (data.types[0].type.name == 'steel') {
            div2.style.backgroundImage = 'url(../images/steel.png)';
        } else if (data.types[0].type.name == 'fairy') {
            div2.style.backgroundImage = 'url(../images/fairy.png)';
        } else if (data.types[0].type.name == 'dragon') {
            div2.style.backgroundImage = 'url(../images/dragon.png)';
        } else if (data.types[0].type.name == 'normal') {
            div2.style.backgroundImage = 'url(../images/normal.png)';
        } else if (data.types[0].type.name == 'ice') {
            div2.style.backgroundImage = 'url(../images/water.png)';
        } else if (data.types[0].type.name == 'bug') {
            div2.style.backgroundImage = 'url(../images/grass.png)';
        }
        div.appendChild(div2);
    
        const nomePokemon = document.createElement('p');
        nomePokemon.classList.add('nome');
        nomePokemon.innerHTML = data.name[0].toUpperCase() + data.name.substring(1);
        div2.appendChild(nomePokemon);

        let vida = Math.round(data.stats[0].base_stat*1.8);
        if ((vida % 10) == '9') {
            vida += 1;
        } else if ((vida % 10) == '8') {
            vida += 2;
        } else if ((vida % 10) == '7') {
            vida += 3;
        } else if ((vida % 10) == '6') {
            vida += 4;
        } else if ((vida % 10) == '5') {
            vida += 5;
        } else if ((vida % 10) == '4') {
            vida += 6;
        } else if ((vida % 10) == '3') {
            vida += 7;
        } else if ((vida % 10) == '2') {
            vida += 8;
        } else if ((vida % 10) == '1') {
            vida += 9;
        }
        const vidaP = document.createElement('p');
        if (vida < '100') {
            vidaP.classList.add('vida1');
        } else if (vida > 99) {
            vidaP.classList.add('vida2');
        }
        vidaP.innerHTML = vida;
        div2.appendChild(vidaP);

        const img = document.createElement('img');
        img.classList.add('imgcenter');
        img.src = data.sprites.front_default;
        div2.appendChild(img);
    
        input.value = "";
        toggleLoader();
    } catch (err) {
        input.value = "";
        alert('[ERRO] Pokemon não encontrado.');
        console.log(err);
        toggleLoader();
    }
}