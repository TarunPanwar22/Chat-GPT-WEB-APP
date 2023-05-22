import React from 'react'
import './brand.css';
import {google , slack , atlassian , dropbox , shopify } from './imports'
function Brand() {
  return (
    <div className='gpt3_brand section'>
      <div>
        <img src={google} alt="google" />
        <div>

        <img src={slack} alt="stack" />
        </div>
        <div>

        <img src={atlassian} alt="atlassian" />
        </div>
        <div>

        <img src={dropbox} alt="dropbox" />
        </div>
        <div>

        <img src={shopify} alt="shopify" />
        </div>
        

      </div>
      Brand
    </div>
  )
}

export default Brand
