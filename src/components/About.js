import React from 'react'
import { LANG } from '../utils/langConfig'

const About = ({lang}) => {
  const language = LANG[lang]
  return (
    <div>
      <div className="p-3 my-2 text-center">
        <h1 className="text-2xl font-bold">{language.title1}</h1>
        <p>{language.description}</p>
      </div>
      <div className="p-3 my-2 text-center">
        <h1 className="text-2xl font-bold">{language.title2}</h1>
        <p>{language.description}</p>
      </div>
      <div className="p-3 my-2 text-center">
        <h1 className="text-2xl font-bold">{language.title3}</h1>
        <p>{language.description}</p>
      </div>
      <div className="p-3 my-2 text-center">
        <h1 className="text-2xl font-bold">{language.title4}</h1>
        <p>{language.description}</p>
      </div>
    </div>
    
  )
}

export default About