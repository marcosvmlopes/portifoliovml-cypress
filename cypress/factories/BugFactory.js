var faker = require('faker')

export default {
    bugDado: function () {

        const moment = require("moment");   

        var dados = {
            tipo: {
                tarefa: 'タスク',
                incomodar: 'バグ',
                solicitar: '要望',
                outros: 'その他'
            },
            titulo: faker.company.catchPhrase(),
            descritivo: faker.lorem.paragraphs(4),
            assinado: 'Marcos',
            categoria: {
                grave: 'grave',
                auto: 'auto',
                moderado: 'moderado',
                leve: 'leve'
            },
            data_fix: moment().add(90, 'days').format("YYYY/MM/DD"),
            print: "logo.jpg",
            msn: 'Issue has been added.'
        }
        return dados
    }
}