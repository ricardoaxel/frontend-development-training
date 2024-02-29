import { useState } from 'react'
import { SectionModelElementList } from './App.interface'
import { Exercises } from './Exercises'
import { sections } from './sections';

import './App.css'

const Section = ({name, sections, level, onSelectSection, actualSection}: SectionModelElementList) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isSelected = actualSection === name;

  return (
    <ul>
      {sections && (isExpanded ? "-": '+')}
      <span 
        style={sections && {fontWeight: "bold"}}
        className={`${isSelected && 'selectedSection'}`}
        onClick={sections ? () => setIsExpanded(!isExpanded): () => {onSelectSection(name)}}>{name}
      </span>
      {isExpanded &&
        <li style={{marginLeft: `${level}rem`}} >
          {sections?.map((section) => <Section key={section.name} actualSection={actualSection}{...section} level={level+1} onSelectSection={onSelectSection}/>)}
        </li>
      }
    </ul>
  )
}

function  App() {
  const [actualSection, setActualSection] = useState("")
  const Exercise = Exercises[actualSection];

  return (
    <div className='exercisesSegment'>
      <h1>React exercises</h1>
      <div className='bodySegment'>
        <div className="sections">
          <h2>Sections</h2>
          {sections.map((section) => 
            <Section key={section.name} level={1} actualSection={actualSection} {...section} onSelectSection={setActualSection} />
          )}
        </div>
        <div className='content'>
          <h2>Actual section: {actualSection}</h2> 
          <div className='sectionContent'>
            {(actualSection && Exercise !== undefined) && <Exercise />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
