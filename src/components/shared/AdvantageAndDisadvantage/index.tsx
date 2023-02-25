import { AdvantageAndDisadvantageContainer, AdvantageContainer, DisadvantageContainer } from './styles'
import { ConfigContext } from "../../../components/shared/Header"
import { useContext } from 'react'
import { BsCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs'

interface Item {
    id: string,
    title: string,
    text: string
}

interface AdvantageProps {
    advantages: Item[],
    disadvantages: Item[]
}

export default function AdvantageAndDisadvantage(props: AdvantageProps) {
    const configContext = useContext(ConfigContext)

    return (
        <AdvantageAndDisadvantageContainer >
            <AdvantageContainer>
                <div className='header'>
                    <h2>
                        {configContext.language == "PT/BR" ? "Vantagens" : "Advantages"}
                    </h2>
                </div>
                <div className="content">
                    {
                        props.advantages.map(adv => {
                            return (
                                <div key={adv.id}>
                                    <span>
                                        <BsCheckCircleFill color={"#02C29F"}/>
                                    </span>
                                    <p>
                                        <strong>{adv.title}</strong>
                                        : {adv.text}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </AdvantageContainer>
            <DisadvantageContainer>
            <div className='header'>
                    <h2>
                        {configContext.language == "PT/BR" ? "Desvantagens" : "Disadvantages"}
                    </h2>
                </div>
                <div className="content">
                    {
                        props.disadvantages.map(disadv => {
                            return (
                                <div key={disadv.id}>
                                    <span>
                                        <BsFillXCircleFill color={"#EA3846"}/>
                                    </span>
                                    <p>
                                        <strong>{disadv.title}</strong>
                                        : {disadv.text}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </DisadvantageContainer>
        </AdvantageAndDisadvantageContainer>
    )
}
