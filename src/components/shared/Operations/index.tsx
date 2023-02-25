import { OperationContainer } from './styles'
import { ConfigContext } from "../../../components/shared/Header"
import { useContext } from 'react'

interface OperationProps {
    data: {
        id: string,
        title: string,
        link: string
    }[]

}

export default function Operation(props: OperationProps) {
    const configContext = useContext(ConfigContext)
    let width;
    if(props.data.length % 2 == 0){
        width = props.data.length * 55.0
    }else{
        width = (props.data.length * 55.0) + 50
    }
    return (
        <OperationContainer width={`${width}px`}>
            <h2>
                {configContext.language == "PT/BR" ? "Operações" : "Operations"}
            </h2>
            <div className='options'>
                <div className="container">
                    {
                        props.data.map(item => {
                            const key = Math.random()
                            return (
                                <button key={key}>
                                    {item.title}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </OperationContainer>
    )
}
