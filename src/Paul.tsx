export default ({name='Paul Bartlett'}) => <div>Hello {name}</div>
export const Porky = ({name='Porky Pies'}) => <div>Greetings {name}</div>

export const Something = ({number: number = 786}) => {
    let a = 123;
    debugger;
    
    return (
        <div>
            Output: {a+number}
        </div>
    )
}
 