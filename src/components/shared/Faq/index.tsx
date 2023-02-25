import { FaqContainer, FaqCard } from './styles'
import { ConfigContext } from "../../../components/shared/Header"
import { useContext } from 'react'

interface FaqProps {
    data: {
        id: string,
        question: string,
        answer: string
    }[]

}

export default function Faq(props: FaqProps) {
    const configContext = useContext(ConfigContext)

    return (
        <FaqContainer darkMode={configContext.darkMode}>
            <h2>
                {configContext.language == "PT/BR" ? "Perguntas Frequentes em intrevistas" : "Interview FAQ"}
            </h2>
            <div className='questions'>
                {
                    props.data.map(item => {
                        return (
                            <FaqCard key={item.id} darkMode={configContext.darkMode}>
                                <summary>
                                    {item.question}
                                </summary>
                                <div className="divisor"></div>
                                <p className="answer">
                                    {item.answer}
                                </p>
                            </FaqCard>
                        )
                    })
                }
            </div>
        </FaqContainer>
    )
}
