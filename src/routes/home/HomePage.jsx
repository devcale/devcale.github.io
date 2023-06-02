import React from 'react'
import { Banner } from '../../components/Banner/Banner'
import { Skills } from '../../components/Skills/Skills'
import { Projects } from '../../components/Projects/Projects'

import { NavBar } from "../../components/NavBar/NavBar";

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      
      <div className="page-sections">
        <Banner />
        <Skills />
        <Projects />
      </div>
    </div>
  )
}
