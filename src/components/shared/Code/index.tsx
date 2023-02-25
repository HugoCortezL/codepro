import { CodeContainer, CodeHeader, CodesTextContainer } from './styles'
import { ConfigContext } from "../../../components/shared/Header"
import { useEffect, useState, useContext } from 'react'
interface CodeProps {
    data: {
        languages: string[]
        codes: {
            id: string
            codes: {
                id: string
                text: string
            }[]
        }[]
    }
}

export default function Code(props: CodeProps) {
    const [languageShow, setLanguageShow] = useState(props.data.languages[0])
    const [codeShow, setCodeShow] = useState(props.data.codes[0])
    const configContext = useContext(ConfigContext)

    useEffect(() => {
        const codeToShow = props.data.codes.find(code => code.id == languageShow)
        if (codeToShow) setCodeShow(codeToShow)
    }, [languageShow])
    return (
        <CodeContainer >
            <CodeHeader darkMode={configContext.darkMode}>
                {
                    props.data.languages.map(language => {
                        return (
                            <button key={language}
                                className={language == languageShow ? "active" : ""}
                                onClick={() => setLanguageShow(language)}
                            >
                                {language}
                            </button>
                        )
                    })
                }
            </CodeHeader>
            <CodesTextContainer darkMode={configContext.darkMode}>
                {
                    codeShow.codes.map(code => {
                        return (
                            <div key={code.id} className="code" >
                                <p>
                                    {code.text}
                                </p>
                            </div>
                        )
                    })
                }
            </CodesTextContainer>
        </CodeContainer>
    )
}
