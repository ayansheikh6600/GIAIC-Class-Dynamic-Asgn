import React from 'react'

const page = ({params}) => {

  console.log(params.country)

  interface countryObj  {
    name :string,
    population : number,
    CapitalCity:string
  }

  const PkObj : countryObj = {

    name :"Pakistan",
    population:123456,
    CapitalCity:"Islamabad"
  }
  const indiaObj : countryObj = {

    name :"India",
    population:123456,
    CapitalCity:"Dehli"
  }

  if(params.country === "pakistan"){
    return(
      <div>
        <h1>
          name : {PkObj.name}
        </h1>
      </div>
    )
  }else if(params.country === "india"){
    return(
      <div>
      <h1>
        name : {indiaObj.name}
      </h1>
    </div>
    )
  }else{
    return(
      <h1>
        Country Does not Exist
      </h1>
    )
  }

  
}

export default page
