import React from 'react'
import Hero from './component/Hero'
import About from './about/page'
import Blog from './Blog/page'
import Faq from './faq/page'
import Comment from './component/Comment'
import Contact from './contact/page'

const home = () => {
  return (
  <>
<Hero />
<About/>
<Blog />
<Faq />
<Comment />
<Contact />

  </>
  )
}

export default home