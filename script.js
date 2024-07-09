//biblioteca e código de terceiros
const formatador = (data) => {
    return {
        dia: {
            numerico: dayjs(data).format('DD'),
            semana: {
                curto: dayjs(data).format('ddd'),
                longo: dayjs(data).format('dddd'),
            }
        },
        mes: dayjs(data).format('MMMM'),
        hora: dayjs(data).format('HH:mm')
    }
}

//object
const atividade = {
    nome: 'Almoço',
    data: new Date('2024-07-08 10:00'),
    finalizada: true
}

//lista, array, vetor []
let atividades = [
    atividade,
    {
        nome: 'Academia em grupo',
        data: new Date('2024-07-08 12:00'),
        finalizada: false
    },
    {
        nome: 'Gaming session',
        data: new Date('2024-07-08 16:00'),
        finalizada: true
    },
]

// atividades = []


//arrow function
const criarItemDeAtividade = (atividade) => {
    
    let input = '<input type="checkbox" '

    if(atividade.finalizada) {
        input = input + 'checked'
    }

    input = input + '>'

    return `
    <div>
        ${input}
        <span>${atividade.nome}</span>
        <time>${atividade.data}</time>
    </div>
    `
}

const atualizarListaDeAtividades = () => {
    const section = document.querySelector("section")

    //verificar se minha lista está vazia
    if(atividades.length == 0) {
        section.innerHTML = `<p>Nenhuma atividade cadastrada.</p>`
        return
    }

    for(let atividade of atividades) {
    section.innerHTML += criarItemDeAtividade(atividade)
    }
}

atualizarListaDeAtividades()



