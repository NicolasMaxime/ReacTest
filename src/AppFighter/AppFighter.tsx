import React from 'react';
import FighterList from "./fighter/FighterList";
import {FighterInterface} from "./fighter/FighterInterface";

const fightersTab = [
  {
    id: '0',
    name: 'toto',
    firstname: 'tata',
    type: 'boxer',
    biography: 'a little biographyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
  },
  {
    id: '1',
    name: 'roger',
    firstname: 'Bertrand',
    type: 'gentil',
    biography: 'a little biography'
  },
  {
    id: '2',
    name: 'loic',
    firstname: 'danger',
    type: 'mechant',
    biography: 'a little biography'
  },
  {
    id: '3',
    name: 'aubin',
    firstname: 'jal',
    type: 'boxer',
    biography: 'a little biography'
  }
] as FighterInterface[]

function AppFighter() {
  return (
    <FighterList fightersArr={fightersTab}/>
  );
}

export default AppFighter;
