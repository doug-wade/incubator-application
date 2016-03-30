import React from 'react'
import PointOfContact from './PointOfContact'
import Essay from './Essay'
import Submit from './Submit'
import Contributors from './Contributors'
import Title from './Title'
import Instructions from './Instructions'
import Popover from './Popover'
import { connect } from 'react-redux'

let App = () => (
  <div className="wrapper">
    <Title />
    <Instructions />
    <PointOfContact />
    <Contributors />
    <Essay prompt="What are you doing?" elementId="q1" />
    <Essay prompt="Who is your target audience?" elementId="q2" />
    <Essay prompt="How will you make money or sustain your business?" elementId="q3" />
    <Essay prompt="What do you expect to get out of the Cornish Incubator program?" elementId="q4" />
    <Essay prompt="How will you further the Cornish mission of Artist, Citizen, Innovator?" elementId="q5" />
    <Essay prompt="Why this why now?" elementId="q6" />
    <Submit />
    <Popover />
  </div>
)

App = connect()(App);

export default App
