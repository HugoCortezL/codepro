import { HeaderContainer, OptionsContainer, ContentContainer } from './styles'
import { createContext, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

export const ConfigContext = createContext({ language: "PT/BR", darkMode: false })

interface HeaderProps {
    children: any
}
export default function Header(props: HeaderProps) {
    const [language, setLanguage] = useState("PT/BR")
    const [darkMode, setDarkMode] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)

    return (
        <ConfigContext.Provider value={{ language: language, darkMode: darkMode }}>
            <HeaderContainer>
                <h1>Code Pro</h1>
                <div className="options">
                    <span className="click" onClick={() => setOpenOptions(!openOptions)}>
                        Options
                        <span>
                            <BsChevronDown />
                        </span>
                    </span>
                    {
                        openOptions &&
                        <OptionsContainer>
                            <div>
                                Dark Mode:
                                <label className="switch">
                                    <input type="checkbox" name="darkMode" id="darkMode" onClick={() => setDarkMode(!darkMode)} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="divisor"></div>
                            <div>
                                <p>
                                    Idioma:
                                </p>
                                <div className='language-buttons'>
                                    <button className={language == "PT/BR" ? "active" : ""} onClick={() => setLanguage("PT/BR")}>
                                        PT/BR
                                    </button>
                                    <button className={language == "EN/US" ? "active" : ""} onClick={() => setLanguage("EN/US")}>
                                        EN/US
                                    </button>
                                </div>
                            </div>
                        </OptionsContainer>
                    }
                </div>
            </HeaderContainer>
            <ContentContainer>

                {props.children}
            </ContentContainer>
        </ConfigContext.Provider>
    )
}
