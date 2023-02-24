import { ConfigContext } from "../../components/shared/Header"
import { useContext, useState, useEffect } from 'react'
import { CategoryContainer, ListContainer, ListCard } from './styles'
import { useParams, Navigate } from "react-router-dom";
import data from "../../data/home.json"

interface DataInterface {
    id: string;
    pt_title: string;
    en_title: string;
    data: {
        id: string;
        pt_title: string;
        en_title: string;
        pt_description: string;
        en_description: string;
        link: string;
    }[]
}

export default function Category() {
    const configContext = useContext(ConfigContext)
    const category = useParams().category
    const [categoryData, setCategoryData] = useState<DataInterface | null>({
        id: "",
        pt_title: "",
        en_title: "",
        data: [{
            id: "",
            pt_title: "",
            en_title: "",
            pt_description: "",
            en_description: "",
            link: "",
        }]
    })

    useEffect(() => {
        const finalData = data.find(item => item.id == category)
        setCategoryData(finalData || null)
    }, [])

    if (!categoryData) {
        return (
            <Navigate to="/" replace={true} />
        )
    }

    return (
        <CategoryContainer>
            <h1>
                {configContext.language == "PT/BR" ? `${categoryData.pt_title}` : `${categoryData.en_title}`}
            </h1>
            <ListContainer>
                {
                    categoryData.data.map(topic => {
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
                                        <button>
                                            {configContext.language == "PT/BR" ? "Visualizar" : "See"}
                                        </button>
                                    </div>
                                </div>
                            </ListCard>
                        )
                    })
                }
            </ListContainer>
        </CategoryContainer>
    )
}
