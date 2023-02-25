import { ConfigContext } from "../../../components/shared/Header"
import { useContext, useState } from 'react'
import { DataStructureContainer, DescriptionContainer, ExplicationContainer } from './styles'
import { useParams } from "react-router-dom";
import dataStructureData from '../../../data/data-structure.json'
import Code from "../../../components/shared/Code";
import AdvantageAndDisadvantage from "../../../components/shared/AdvantageAndDisadvantage";
import Faq from "../../../components/shared/Faq";
import Operation from "../../../components/shared/Operations";

export default function DataStructure() {
    const configContext = useContext(ConfigContext)
    const topic = useParams().topic
    const [topicData, setTopicData] = useState(dataStructureData.find(data => data.id == topic))

    if (!topicData) {
        return (
            <h1>
                404 NOT FOUND
            </h1>
        )
    }

    return (
        <DataStructureContainer darkMode={configContext.darkMode}>
            <h1>
                {configContext.language == "PT/BR" ? `${topicData.pt_title}` : `${topicData.en_title}`}
            </h1>
            <DescriptionContainer darkMode={configContext.darkMode}>
                {configContext.language == "PT/BR" ?
                    <p>
                        <strong>Descrição</strong>
                        : {topicData.pt_description}
                    </p> :
                    <p>
                        <strong>Description</strong>
                        : {topicData.en_description}
                    </p>
                }
            </DescriptionContainer>
            <div className="image">
                <img src={configContext.darkMode ? topicData.white_image : topicData.black_image} alt="" />
            </div>
            <Code data={topicData.code} />
            <ExplicationContainer darkMode={configContext.darkMode}>
                <h2>
                    {configContext.language == "PT/BR" ? "Explicação" : "Explication"}
                </h2>
                <ul>
                    {
                        configContext.language == "PT/BR" ?
                            topicData.pt_explication.map(desc => {
                                return (
                                    <li key={desc.id}>
                                        {desc.text}
                                    </li>
                                )
                            }) :
                            topicData.en_explication.map(desc => {
                                return (
                                    <li key={desc.id}>
                                        {desc.text}
                                    </li>
                                )
                            })
                    }
                </ul>
            </ExplicationContainer>
            <AdvantageAndDisadvantage
                advantages={configContext.language == "PT/BR" ? topicData.pt_advantages : topicData.en_advantages}
                disadvantages={configContext.language == "PT/BR" ? topicData.pt_disadvantages : topicData.en_disadvantages}
            />
            <Faq data={configContext.language == "PT/BR" ? topicData.pt_faq : topicData.en_faq} />
            <Operation data={topicData.operations} />
        </DataStructureContainer>
    )
}
