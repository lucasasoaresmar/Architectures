const Todo = require('./src/entities/todo/use_cases/index')

async function main() {
    try {
        const todo1 = await Todo.add({ todo: 'Estudar' })
        const todo2 = await Todo.add({ todo: 'Fazer janta' })
        const todo3 = await Todo.add({ todo: 'Jogar Lixo fora' })

        setTimeout( async () => {
            await Todo.update({
                id: todo2.id,
                todo: 'Fazer um jantar bem gostoso'
            })
            await Todo.update({
                id: todo3.id,
                todo: 'Jogar lixo azul na lixeira'
            })
        
            await Todo.checkUncheckTodo(todo1)
            await Todo.checkUncheckTodo(todo3)
        
            console.log(await Todo.findAll())
        }, 3000)
        
    } catch (err) {
        console.log(err.message)
    }
}

main()