import { ConfigContext } from "../../components/shared/Header"
import { useContext } from 'react'
import { HomeContainer, ListContainer, ListCard } from './styles'
import data from '../../data/home.json'
import { Link } from "react-router-dom";

export default function Home() {
    const configContext = useContext(ConfigContext)
    return (
        <HomeContainer>
            <h1>
                {configContext.language == "PT/BR" ? "Preparação" : "Preparation"}
            </h1>
            {
                data.map(category => {
                    return (
                        <ListContainer key={category.id}>
                            <div className="title">
                                <h3>
                                    {configContext.language == "PT/BR" ? `${category.pt_title}` : `${category.en_title}`}
                                </h3>
                                <Link to={`/${category.id}`}>
                                    <span>
                                        {configContext.language == "PT/BR" ? "Ver todos" : "See all"}
                                    </span>
                                </Link>
                            </div>
                            <div className="content">
                                {
                                    category.data.map(topic => {
                                        return (
                                            <ListCard key={topic.id}>
                                                <div className="text">
                                                    <h4>
                                                        {configContext.language == "PT/BR" ? `${topic.pt_title}` : `${topic.en_title}`}
                                                    </h4>
                                                    <p>
                                                        {configContext.language == "PT/BR" ? `${topic.pt_description}` : `${topic.en_description}`}
                                                    </p>
                                                </div>
                                                <div className="options">
                                                    <div className="divisor"></div>
                                                    <div className="button">
                                                    <Link to={`/${topic.link}`}>
                                                        <button>
                                                            {configContext.language == "PT/BR" ? "Visualizar" : "See"}
                                                        </button>
                                                    </Link>
                                                    </div>
                                                </div>
                                            </ListCard>
                                        )
                                    })
                                }
                            </div>
                        </ListContainer>
                    )
                })
            }
        </HomeContainer>
    )
}
