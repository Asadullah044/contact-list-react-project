import React from 'react'
import './feature.css';
import Feature from '../../components/feature/Feature';



function Features() {

  const featuresData = [
    {
      title : 'Improving end Distrust Instantly',
      text : 'Lorem ipsum dolor sit amet, consectetur exercitationem illum nostrum consequuntur tempore commodi, iusto laborum. Aperiam, libero.'
    },
    {
      title : 'Become the tended active',
      text : 'Lorem ipsum dolor sit amet, consectetur exercitationem illum nostrum consequuntur tempore commodi, iusto laborum. Aperiam, libero.'
    },
    {
      title : 'Message or am nothing',
      text : 'Lorem ipsum dolor sit amet, consectetur exercitationem illum nostrum consequuntur tempore commodi, iusto laborum. Aperiam, libero.'
    },
    {
      title : 'Really boy law county',
      text : 'Lorem ipsum dolor sit amet, consectetur exercitationem illum nostrum consequuntur tempore commodi, iusto laborum. Aperiam, libero.'
    }
  
  ]

  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The future is now and you have to just realize it,Step into future Today & make it happen.
        </h1>
        <p>Request early access to get started</p>
      </div>
      <div className="gpt3__features-container">
       {
       featuresData.map((feature , index)=>{
        return <Feature title={feature.title} text={feature.text} key={feature.item + index}/>
       })
       }
      </div>
    </div>
  )
}

export default Features