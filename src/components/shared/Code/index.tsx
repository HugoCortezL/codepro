import { CodeContainer, CodeHeader, CodesTextContainer } from './styles'
import { useEffect, useState } from 'react'

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

    useEffect(() => {
        const codeToShow = props.data.codes.find(code => code.id == languageShow)
        if (codeToShow) setCodeShow(codeToShow)
    }, [languageShow])
    return (
        <CodeContainer >
            <CodeHeader>
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
            <CodesTextContainer>
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
